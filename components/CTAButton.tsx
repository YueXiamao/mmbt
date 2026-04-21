'use client';

import { motion } from 'framer-motion';
import styles from './CTAButton.module.css';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export default function CTAButton({ 
  text, 
  onClick, 
  href,
  variant = 'primary',
  disabled = false 
}: CTAButtonProps) {
  const className = `${styles.button} ${variant === 'secondary' ? styles.secondary : ''} ${disabled ? styles.disabled : ''}`;

  if (href) {
    return (
      <motion.a 
        href={href}
        className={className}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {text}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={className}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      disabled={disabled}
    >
      {text}
    </motion.button>
  );
}
