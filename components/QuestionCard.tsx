'use client';

import { motion } from 'framer-motion';
import styles from './QuestionCard.module.css';

interface QuestionCardProps {
  questionNumber: number;
  questionText: string;
  children: React.ReactNode;
}

export default function QuestionCard({ questionNumber, questionText, children }: QuestionCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.header}>
        <span className={styles.label}>问题 {questionNumber}</span>
      </div>
      <h2 className={styles.question}>{questionText}</h2>
      <div className={styles.options}>
        {children}
      </div>
    </motion.div>
  );
}
