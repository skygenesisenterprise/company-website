package middleware

import (
	"fmt"
	"math"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	redis "github.com/redis/go-redis/v9"
)

type RedisRateLimiter struct {
	client    *redis.Client
	keyPrefix string
	makeKey   func(ctx *gin.Context) string
	limit     int
	window    time.Duration
}

type RedisRateLimiterOption func(*RedisRateLimiter)

func WithKeyPrefix(prefix string) RedisRateLimiterOption {
	return func(rl *RedisRateLimiter) {
		rl.keyPrefix = prefix
	}
}

func WithKeyFunc(fn func(ctx *gin.Context) string) RedisRateLimiterOption {
	return func(rl *RedisRateLimiter) {
		rl.makeKey = fn
	}
}

func NewRedisRateLimiter(client *redis.Client, limit int, window time.Duration, opts ...RedisRateLimiterOption) gin.HandlerFunc {
	if client == nil {
		return func(ctx *gin.Context) { ctx.Next() }
	}

	rl := &RedisRateLimiter{
		client:    client,
		keyPrefix: "company-website:v1:ratelimit",
		limit:     limit,
		window:    window,
		makeKey: func(ctx *gin.Context) string {
			return ctx.ClientIP()
		},
	}

	for _, opt := range opts {
		opt(rl)
	}

	return func(ctx *gin.Context) {
		key := fmt.Sprintf("%s:%s", rl.keyPrefix, rl.makeKey(ctx))
		now := time.Now().Unix()
		windowSeconds := int64(rl.window.Seconds())
		windowStart := now - windowSeconds

		pipe := rl.client.Pipeline()
		pipe.ZRemRangeByScore(ctx, key, "0", strconv.FormatInt(windowStart, 10))
		count := pipe.ZCard(ctx, key)
		pipe.ZAdd(ctx, key, redis.Z{Score: float64(now), Member: now})
		pipe.Expire(ctx, key, rl.window)
		_, err := pipe.Exec(ctx)
		if err != nil {
			ctx.Next()
			return
		}

		if count.Val() >= int64(rl.limit) {
			retryAfter := math.Ceil(float64(windowSeconds))
			ctx.Header("Retry-After", fmt.Sprintf("%.0f", retryAfter))
			ctx.Header("X-RateLimit-Limit", strconv.Itoa(rl.limit))
			ctx.Header("X-RateLimit-Remaining", "0")
			ctx.AbortWithStatusJSON(http.StatusTooManyRequests, gin.H{
				"success":     false,
				"error":       "Too many requests",
				"retry_after": retryAfter,
			})
			return
		}

		remaining := int64(rl.limit) - count.Val() - 1
		if remaining < 0 {
			remaining = 0
		}
		ctx.Header("X-RateLimit-Remaining", strconv.FormatInt(remaining, 10))
		ctx.Next()
	}
}

func NewRedisRateLimiterForRoute(client *redis.Client, route string, limit int, window time.Duration) gin.HandlerFunc {
	return NewRedisRateLimiter(client, limit, window,
		WithKeyFunc(func(ctx *gin.Context) string {
			return fmt.Sprintf("%s:%s", ctx.ClientIP(), route)
		}),
	)
}
