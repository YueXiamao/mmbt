'use client';

import { motion } from 'framer-motion';
import styles from './OptionButton.module.css';

interface OptionButtonProps {
  text: string;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function OptionButton({ text, index, isSelected, onClick }: OptionButtonProps) {
  return (
    <motion.button
      className={`${styles.button} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.01 }}
    >
      <span className={styles.indicator} />
      <span className={styles.text}>{text}</span>
      <style jsx>{`
        .${styles.selected} {
          background-color: rgba(201, 169, 110, 0.1);
          border-color: var(--color-accent-gold);
        }
        .${styles.selected} .${styles.indicator} {
          background-color: var(--color-accent-gold);
        }
      `}</style>
    </motion.button>
  );
}
