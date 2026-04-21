'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ResultCard from '@/components/ResultCard';
import FloatingCat from '@/components/FloatingCat';
import { calculateCatType, ScoreType } from '@/data/catTypes';
import styles from './page.module.css';

export default function ResultPage() {
  const router = useRouter();
  const [scores, setScores] = useState<ScoreType | null>(null);
  const [catType, setCatType] = useState<ReturnType<typeof calculateCatType> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const scoresJson = sessionStorage.getItem('mmti_scores');
    if (!scoresJson) {
      router.replace('/test');
      return;
    }

    try {
      const parsedScores: ScoreType = JSON.parse(scoresJson);
      setScores(parsedScores);
      const result = calculateCatType(parsedScores);
      setCatType(result);
    } catch {
      router.replace('/test');
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  const handleRestart = () => {
    sessionStorage.removeItem('mmti_scores');
    router.push('/test');
  };

  if (isLoading || !catType || !scores) {
    return (
      <main className={styles.main}>
        <FloatingCat position="bottom-right" size={120} opacity={0.7} delay={0} />
        <FloatingCat position="top-right" size={60} opacity={0.4} delay={2} />
        
        <motion.div 
          className={styles.loading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.loadingAnimation}>
            <motion.div
              className={styles.loadingCat}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg viewBox="0 0 100 100" width="80" height="80">
                <path d="M50 85c-20 0-35-15-35-35 0-12 6-23 15-30v15c-5 3-8 9-8 15 0 10 8 18 18 18s18-8 18-18c0-6-3-12-8-15v-15c9 7 15 18 15 30 0 20-15 35-35 35z" fill="#C9A96E"/>
                <circle cx="35" cy="45" r="5" fill="#1A1614"/>
                <circle cx="65" cy="45" r="5" fill="#1A1614"/>
                <ellipse cx="50" cy="58" rx="4" ry="3" fill="#E8A87C"/>
                <path d="M46 62 Q50 68 54 62" stroke="#1A1614" strokeWidth="2" fill="none"/>
                <path d="M15 25 L25 45 L35 35" fill="#C9A96E"/>
                <path d="M85 25 L75 45 L65 35" fill="#C9A96E"/>
              </svg>
            </motion.div>
            <div className={styles.loadingDots}>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
              />
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
              />
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </div>
          <h2 className={styles.loadingTitle}>正在分析你的猫咪灵魂...</h2>
          <p className={styles.loadingText}>通过{scores ? '6' : '...'}个维度解读你的性格密码</p>
          <div className={styles.loadingBars}>
            {[0, 1, 2, 3, 4, 5].map(i => (
              <motion.div
                key={i}
                className={styles.loadingBar}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <FloatingCat position="bottom-right" size={100} opacity={0.6} delay={0} />
      <FloatingCat position="top-left" size={50} opacity={0.3} delay={1} />
      <FloatingCat position="bottom-left" size={60} opacity={0.4} delay={3} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>测试完成</h1>
          <p className={styles.subtitle}>你的专属猫咪人格报告</p>
        </motion.div>

        <ResultCard catType={catType} scores={scores} onRestart={handleRestart} />
      </div>
    </main>
  );
}
