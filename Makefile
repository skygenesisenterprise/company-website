.PHONY: help build-dev build-cloud run-dev run-cloud stop clean prune rmi-dev dev-up dev-down dev-logs dev-rebuild dev-restart cloud-up cloud-down cloud-logs cloud-rebuild rmi-cloud

APP_IMAGE := skygenesisenterprise/company-website
DEV_IMAGE_TAG := latest-dev
CLOUD_IMAGE_TAG := cloud
DEV_COMPOSE := docker-compose.dev.yml
CLOUD_COMPOSE := docker-compose.cloud.yml
CLOUD_ENV := APP_IMAGE_TAG=$(CLOUD_IMAGE_TAG)

help:
	@echo "Available targets:"
	@echo "  build-dev     - Build development image"
	@echo "  build-cloud   - Build cloud image"
	@echo "  run-dev       - Run development image directly"
	@echo "  run-cloud     - Run cloud image directly"
	@echo "  stop          - Stop all containers"
	@echo "  clean         - Remove build artifacts"
	@echo "  prune         - Clean up Docker system"
	@echo "  rmi-dev       - Remove dev image and container"
	@echo "  dev-up        - Start dev environment (docker-compose)"
	@echo "  dev-down      - Stop dev environment"
	@echo "  dev-logs      - View dev environment logs"
	@echo "  cloud-up      - Start cloud environment (docker-compose)"
	@echo "  cloud-down    - Stop cloud environment"
	@echo "  cloud-logs    - View cloud environment logs"

build-dev:
	docker build --no-cache -f Dockerfile.dev -t $(APP_IMAGE):$(DEV_IMAGE_TAG) .

build-cloud:
	docker build --no-cache -f Dockerfile.cloud -t $(APP_IMAGE):$(CLOUD_IMAGE_TAG) .

run-dev:
	docker run --name company-website-dev -p 3000:3000 $(APP_IMAGE):$(DEV_IMAGE_TAG)

run-cloud:
	docker run --name company-website-cloud -p 3000:3000 -p 8080:8080 -e DATABASE_URL $(APP_IMAGE):$(CLOUD_IMAGE_TAG)

stop:
	docker compose -f $(DEV_COMPOSE) down
	docker compose -f $(CLOUD_COMPOSE) down
	docker stop company-website-dev company-website-cloud 2>/dev/null || true
	docker rm company-website-dev company-website-cloud 2>/dev/null || true

clean:
	rm -rf app/.next
	rm -rf server/aether-server

prune:
	docker system prune -f

rmi-dev:
	docker compose -f $(DEV_COMPOSE) down --rmi local 2>/dev/null || true
	docker rmi $(APP_IMAGE):$(DEV_IMAGE_TAG) 2>/dev/null || true

dev-up:
	docker compose -f $(DEV_COMPOSE) up -d --build --remove-orphans

dev-down:
	docker compose -f $(DEV_COMPOSE) down

dev-logs:
	docker compose -f $(DEV_COMPOSE) logs -f

dev-rebuild:
	docker compose -f $(DEV_COMPOSE) down
	docker compose -f $(DEV_COMPOSE) build --no-cache
	docker compose -f $(DEV_COMPOSE) up -d --remove-orphans

dev-restart:
	docker compose -f $(DEV_COMPOSE) restart

cloud-up:
	$(CLOUD_ENV) docker compose -f $(CLOUD_COMPOSE) up -d --build --remove-orphans

cloud-down:
	$(CLOUD_ENV) docker compose -f $(CLOUD_COMPOSE) down

cloud-logs:
	$(CLOUD_ENV) docker compose -f $(CLOUD_COMPOSE) logs -f

cloud-rebuild:
	$(CLOUD_ENV) docker compose -f $(CLOUD_COMPOSE) down
	$(CLOUD_ENV) docker compose -f $(CLOUD_COMPOSE) build --no-cache
	$(CLOUD_ENV) docker compose -f $(CLOUD_COMPOSE) up -d --remove-orphans

rmi-cloud:
	$(CLOUD_ENV) docker compose -f $(CLOUD_COMPOSE) down --rmi local 2>/dev/null || true
	docker rmi $(APP_IMAGE):$(CLOUD_IMAGE_TAG) 2>/dev/null || true
