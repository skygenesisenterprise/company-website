"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface HeroWorldMapProps {
  className?: string;
}

export function HeroWorldMap({ className }: HeroWorldMapProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const frameRef = React.useRef(0);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const glyphs = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯";
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      context.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(rect.width, rect.height) * 0.42;
      const points: Array<{ x: number; y: number; z: number; glyph: string }> = [];

      context.font = "12px monospace";
      context.textAlign = "center";
      context.textBaseline = "middle";

      for (let phi = 0; phi < Math.PI * 2; phi += 0.15) {
        for (let theta = 0; theta < Math.PI; theta += 0.15) {
          const x = Math.sin(theta) * Math.cos(phi + time * 0.5);
          const y = Math.sin(theta) * Math.sin(phi + time * 0.5);
          const z = Math.cos(theta);

          const rotationY = time * 0.3;
          const rotatedX = x * Math.cos(rotationY) - z * Math.sin(rotationY);
          const rotatedZ = x * Math.sin(rotationY) + z * Math.cos(rotationY);

          const rotationX = time * 0.2;
          const rotatedY = y * Math.cos(rotationX) - rotatedZ * Math.sin(rotationX);
          const finalZ = y * Math.sin(rotationX) + rotatedZ * Math.cos(rotationX);

          const depth = (finalZ + 1) / 2;
          const glyphIndex = Math.floor(depth * (glyphs.length - 1));

          points.push({
            x: centerX + rotatedX * radius,
            y: centerY + rotatedY * radius,
            z: finalZ,
            glyph: glyphs[glyphIndex],
          });
        }
      }

      points.sort((a, b) => a.z - b.z);

      points.forEach((point) => {
        const alpha = 0.14 + (point.z + 1) * 0.28;
        context.fillStyle = `oklch(0.48 0.11 248 / ${alpha})`;
        context.fillText(point.glyph, point.x, point.y);
      });

      time += 0.02;
      frameRef.current = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className={cn("h-full w-full", className)} />;
}
