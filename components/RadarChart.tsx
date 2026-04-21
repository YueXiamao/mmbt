'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './RadarChart.module.css';

interface RadarChartProps {
  data: {
    label: string;
    value: number;
  }[];
  size?: number;
}

const DIMENSIONS = ['活跃度', '社交性', '好奇心', '情感表达', '领地意识', '适应能力'];

export default function RadarChart({ data, size = 280 }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const center = size / 2;
    const radius = (size / 2) * 0.65;
    const levels = 5;
    const angleStep = (Math.PI * 2) / 6;

    // Draw background rings
    ctx.strokeStyle = '#EDE8E3';
    ctx.lineWidth = 1;
    for (let level = 1; level <= levels; level++) {
      const levelRadius = (radius / levels) * level;
      ctx.beginPath();
      for (let i = 0; i <= 6; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = center + Math.cos(angle) * levelRadius;
        const y = center + Math.sin(angle) * levelRadius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Draw axis lines
    ctx.strokeStyle = '#EDE8E3';
    for (let i = 0; i < 6; i++) {
      const angle = i * angleStep - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(center + Math.cos(angle) * radius, center + Math.sin(angle) * radius);
      ctx.stroke();
    }

    // Draw dimension labels
    ctx.font = '500 12px Outfit, sans-serif';
    ctx.fillStyle = '#6B5E57';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < 6; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const labelRadius = radius + 24;
      const x = center + Math.cos(angle) * labelRadius;
      const y = center + Math.sin(angle) * labelRadius;
      ctx.fillText(DIMENSIONS[i], x, y);
    }

    // Draw data polygon with animation
    const drawData = (progress: number) => {
      ctx.clearRect(0, 0, size, size);
      
      // Redraw background
      ctx.strokeStyle = '#EDE8E3';
      ctx.lineWidth = 1;
      for (let level = 1; level <= levels; level++) {
        const levelRadius = (radius / levels) * level;
        ctx.beginPath();
        for (let i = 0; i <= 6; i++) {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + Math.cos(angle) * levelRadius;
          const y = center + Math.sin(angle) * levelRadius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Redraw axes
      ctx.strokeStyle = '#EDE8E3';
      for (let i = 0; i < 6; i++) {
        const angle = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.lineTo(center + Math.cos(angle) * radius, center + Math.sin(angle) * radius);
        ctx.stroke();
      }

      // Draw labels
      ctx.font = '500 12px Outfit, sans-serif';
      ctx.fillStyle = '#6B5E57';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < 6; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const labelRadius = radius + 24;
        const x = center + Math.cos(angle) * labelRadius;
        const y = center + Math.sin(angle) * labelRadius;
        ctx.fillText(DIMENSIONS[i], x, y);
      }

      // Draw data area
      const gradient = ctx.createRadialGradient(center, center, 0, center, center, radius);
      gradient.addColorStop(0, 'rgba(201, 169, 110, 0.3)');
      gradient.addColorStop(1, 'rgba(232, 168, 124, 0.15)');
      
      ctx.fillStyle = gradient;
      ctx.strokeStyle = '#C9A96E';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const value = (data[i].value / 100) * radius * progress;
        const angle = i * angleStep - Math.PI / 2;
        const x = center + Math.cos(angle) * value;
        const y = center + Math.sin(angle) * value;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw data points
      for (let i = 0; i < 6; i++) {
        const value = (data[i].value / 100) * radius * progress;
        const angle = i * angleStep - Math.PI / 2;
        const x = center + Math.cos(angle) * value;
        const y = center + Math.sin(angle) * value;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#C9A96E';
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw value labels
      ctx.font = '600 11px Outfit, sans-serif';
      ctx.fillStyle = '#C9A96E';
      for (let i = 0; i < 6; i++) {
        const value = (data[i].value / 100) * radius * progress;
        const angle = i * angleStep - Math.PI / 2;
        const valueRadius = value + 14;
        const x = center + Math.cos(angle) * valueRadius;
        const y = center + Math.sin(angle) * valueRadius;
        ctx.fillText(`${Math.round(data[i].value * progress)}%`, x, y);
      }
    };

    // Animate
    let startTime: number;
    const duration = 1500;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      drawData(easeOut(progress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [data, size]);

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </motion.div>
  );
}
