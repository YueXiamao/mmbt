'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import RadarChart from './RadarChart';
import DimensionBar from './DimensionBar';
import CTAButton from './CTAButton';
import { CatType } from '@/data/catTypes';
import { getCatById } from '@/data/catTypes';
import styles from './ResultCard.module.css';

interface ResultCardProps {
  catType: CatType;
  scores: {
    activity: number;
    social: number;
    curiosity: number;
    emotion: number;
    territory: number;
    adapt: number;
  };
  onRestart: () => void;
}

export default function ResultCard({ catType, scores, onRestart }: ResultCardProps) {
  const [activeTab, setActiveTab] = useState<'personality' | 'lifestyle' | 'relationship'>('personality');
  
  const dimensionData = [
    { label: '活跃度', value: Math.round((scores.activity / 24) * 100) },
    { label: '社交性', value: Math.round((scores.social / 24) * 100) },
    { label: '好奇心', value: Math.round((scores.curiosity / 24) * 100) },
    { label: '情感表达', value: Math.round((scores.emotion / 24) * 100) },
    { label: '领地意识', value: Math.round((scores.territory / 24) * 100) },
    { label: '适应能力', value: Math.round((scores.adapt / 24) * 100) },
  ];

  const tabs = [
    { id: 'personality', label: '性格特点' },
    { id: 'lifestyle', label: '生活方式' },
    { id: 'relationship', label: '人际关系' },
  ] as const;

  const compatibleCats = catType.compatibleWith.map(id => getCatById(id)).filter(Boolean);

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Hero Section */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.imageContainer}>
          <img src={catType.imageUrl} alt={catType.name} className={styles.image} />
          <motion.div
            className={styles.imageOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.div
            className={styles.catIcon}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.4 }}
          >
            <svg viewBox="0 0 100 100" className={styles.catSvg}>
              <path d="M50 85c-20 0-35-15-35-35 0-12 6-23 15-30v15c-5 3-8 9-8 15 0 10 8 18 18 18s18-8 18-18c0-6-3-12-8-15v-15c9 7 15 18 15 30 0 20-15 35-35 35z" fill="currentColor"/>
              <circle cx="35" cy="45" r="5" fill="#1A1614"/>
              <circle cx="65" cy="45" r="5" fill="#1A1614"/>
              <ellipse cx="50" cy="58" rx="4" ry="3" fill="#E8A87C"/>
              <path d="M46 62 Q50 68 54 62" stroke="#1A1614" strokeWidth="2" fill="none"/>
              <path d="M15 25 L25 45 L35 35" fill="currentColor"/>
              <path d="M85 25 L75 45 L65 35" fill="currentColor"/>
            </svg>
          </motion.div>
        </div>
        <div className={styles.heroContent}>
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {catType.id}
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {catType.name}
          </motion.h2>
          <motion.div
            className={styles.tags}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {catType.tags.map((tag, i) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {catType.description}
      </motion.p>

      {/* Radar Chart Section */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className={styles.sectionTitle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
            <line x1="12" y1="22" x2="12" y2="15.5"/>
            <polyline points="22 8.5 12 15.5 2 8.5"/>
          </svg>
          六维性格分析
        </h3>
        <div className={styles.radarContainer}>
          <RadarChart data={dimensionData} size={280} />
        </div>
        <div className={styles.dimensionBars}>
          <DimensionBar label="活跃度" value={dimensionData[0].value} delay={0.7} />
          <DimensionBar label="社交性" value={dimensionData[1].value} delay={0.8} />
          <DimensionBar label="好奇心" value={dimensionData[2].value} delay={0.9} />
          <DimensionBar label="情感表达" value={dimensionData[3].value} delay={1.0} />
          <DimensionBar label="领地意识" value={dimensionData[4].value} delay={1.1} />
          <DimensionBar label="适应能力" value={dimensionData[5].value} delay={1.2} />
        </div>
      </motion.div>

      {/* Tabbed Content */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  className={styles.tabIndicator}
                  layoutId="tabIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.tabContent}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'personality' && (
              <div className={styles.traitGrid}>
                <div className={styles.traitColumn}>
                  <h4 className={styles.traitTitle}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    性格优点
                  </h4>
                  <ul className={styles.traitList}>
                    {catType.strengths.map((s, i) => (
                      <motion.li
                        key={s}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        {s}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className={styles.traitColumn}>
                  <h4 className={styles.traitTitle}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    成长空间
                  </h4>
                  <ul className={styles.traitList}>
                    {catType.weaknesses.map((w, i) => (
                      <motion.li
                        key={w}
                        className={styles.weakness}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        {w}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'lifestyle' && (
              <ul className={styles.lifestyleList}>
                {catType.lifestyle.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <span className={styles.lifestyleIcon}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18"/>
                      </svg>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            )}
            {activeTab === 'relationship' && (
              <ul className={styles.relationshipList}>
                {catType.relationships.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Compatible Cats Section */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <h3 className={styles.sectionTitle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          最佳搭档
        </h3>
        <p className={styles.compatibleIntro}>{catType.compatibleReason}</p>
        <div className={styles.compatibleGrid}>
          {compatibleCats.map((cat, i) => cat && (
            <motion.div
              key={cat.id}
              className={styles.compatibleCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.compatibleImageWrapper}>
                <img src={cat.imageUrl} alt={cat.name} className={styles.compatibleImage} />
              </div>
              <div className={styles.compatibleInfo}>
                <span className={styles.compatibleId}>{cat.id}</span>
                <h4 className={styles.compatibleName}>{cat.name}</h4>
                <div className={styles.compatibleTags}>
                  {cat.tags.slice(0, 2).map(tag => (
                    <span key={tag} className={styles.compatibleTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        className={styles.actions}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <CTAButton text="重新测试" onClick={onRestart} variant="secondary" />
        <CTAButton text="分享结果" onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: 'MMTI 猫猫性格测试',
              text: `我的测试结果是「${catType.name}」！你也来测测看吧~`,
              url: window.location.href,
            });
          } else {
            navigator.clipboard.writeText(
              `我的测试结果是「${catType.name}」！你也来测测看吧~ ${window.location.href}`
            );
          }
        }} />
      </motion.div>
    </motion.div>
  );
}
