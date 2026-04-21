'use client';

import { motion } from 'framer-motion';
import styles from './DimensionBar.module.css';

interface DimensionBarProps {
  label: string;
  value: number;
  delay?: number;
  color?: string;
}

export default function DimensionBar({ label, value, delay = 0, color }: DimensionBarProps) {
  const barColor = color || (value >= 70 ? '#C9A96E' : value >= 40 ? '#E8A87C' : '#B8C4CE');
  
  return (
    <motion.div
      className={styles.bar}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}%</span>
      </div>
      <div className={styles.track}>
        <motion.div
          className={styles.fill}
          style={{ backgroundColor: barColor }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className={styles.shine}
          animate={{
            x: ['0%', `${value}%`],
          }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}
