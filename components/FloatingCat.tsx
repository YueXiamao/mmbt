'use client';

import styles from './FloatingCat.module.css';

interface FloatingCatProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  size?: number;
  opacity?: number;
  delay?: number;
}

const catEmojis = ['🐱', '😺', '😸', '🐈', '😻', '🙀'];

export default function FloatingCat({ 
  position = 'bottom-right', 
  size = 80,
  opacity = 0.6,
  delay = 0
}: FloatingCatProps) {
  // Use delay as seed to avoid hydration mismatch (SSR vs client random mismatch)
  const emoji = catEmojis[delay % catEmojis.length];

  const positionStyle = {
    'bottom-right': { bottom: '40px', right: '40px' },
    'bottom-left': { bottom: '40px', left: '40px' },
    'top-right': { top: '100px', right: '40px' },
    'top-left': { top: '100px', left: '40px' },
  };

  return (
    <div 
      className={styles.cat}
      style={{
        ...positionStyle[position],
        fontSize: `${size}px`,
        opacity,
        animationDelay: `${delay}s`,
      }}
    >
      {emoji}
    </div>
  );
}
