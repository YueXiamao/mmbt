'use client';

import { motion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';
import FloatingCat from '@/components/FloatingCat';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <FloatingCat position="bottom-right" size={100} opacity={0.7} delay={0} />
      <FloatingCat position="top-right" size={60} opacity={0.4} delay={2} />
      
      <div className={styles.hero}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badgeIcon}>
            <svg width="20" height="20" viewBox="0 0 100 100">
              <path d="M50 85c-20 0-35-15-35-35 0-12 6-23 15-30v15c-5 3-8 9-8 15 0 10 8 18 18 18s18-8 18-18c0-6-3-12-8-15v-15c9 7 15 18 15 30 0 20-15 35-35 35z" fill="#C9A96E"/>
              <circle cx="35" cy="45" r="5" fill="#1A1614"/>
              <circle cx="65" cy="45" r="5" fill="#1A1614"/>
              <ellipse cx="50" cy="58" rx="4" ry="3" fill="#E8A87C"/>
            </svg>
          </span>
          <span>猫咪性格测试</span>
        </motion.div>
        
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          MMTI
        </motion.h1>
        
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          探索你的猫咪灵魂
        </motion.p>
        
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          18道题目，帮你发现内心深处像哪种猫猫。
          <br />
          是高冷的狮子猫，还是黏人的布偶猫？
          <br />
          是调皮的奶牛猫，还是慵懒的英短？
        </motion.p>
        
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CTAButton text="开始测试" href="/test" />
        </motion.div>
        
        <motion.div
          className={styles.meta}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span>约18道题</span>
          <span className={styles.dot}>·</span>
          <span>3分钟完成</span>
          <span className={styles.dot}>·</span>
          <span>16种猫咪类型</span>
        </motion.div>
      </div>
      
      <div className={styles.features}>
        <motion.div
          className={styles.feature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className={styles.featureIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3>科学维度</h3>
          <p>从活跃度、社交性、好奇心等6个维度分析你的性格</p>
        </motion.div>
        
        <motion.div
          className={styles.feature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className={styles.featureIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h3>快速完成</h3>
          <p>仅需3分钟，18道精心设计的选择题</p>
        </motion.div>
        
        <motion.div
          className={styles.feature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className={styles.featureIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </div>
          <h3>详细解析</h3>
          <p>获得专属性格分析和猫咪类型解读</p>
        </motion.div>
      </div>
      
      <footer className={styles.footer}>
        <p>MMTI 猫猫性格测试 · 用趣味的方式了解自己</p>
      </footer>
    </main>
  );
}
