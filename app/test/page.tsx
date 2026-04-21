'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import OptionButton from '@/components/OptionButton';
import FloatingCat from '@/components/FloatingCat';
import CTAButton from '@/components/CTAButton';
import { questions } from '@/data/questions';
import styles from './page.module.css';

interface ScoreType {
  activity: number;
  social: number;
  curiosity: number;
  emotion: number;
  territory: number;
  adapt: number;
}

const catEmojis = ['😺', '😸', '😻', '🙀', '😽', '🐱'];

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [scores, setScores] = useState<ScoreType>({
    activity: 0,
    social: 0,
    curiosity: 0,
    emotion: 0,
    territory: 0,
    adapt: 0,
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showCat, setShowCat] = useState(false);

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const isFirstQuestion = currentQuestion === 0;
  const hasAnsweredCurrent = answers[currentQuestion] !== null;
  const currentCat = catEmojis[currentQuestion % catEmojis.length];

  const handleSelectOption = (optionIndex: number) => {
    if (isTransitioning) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    const selectedOption = question.options[optionIndex];
    setScores(prev => ({
      activity: prev.activity + selectedOption.scores.activity,
      social: prev.social + selectedOption.scores.social,
      curiosity: prev.curiosity + selectedOption.scores.curiosity,
      emotion: prev.emotion + selectedOption.scores.emotion,
      territory: prev.territory + selectedOption.scores.territory,
      adapt: prev.adapt + selectedOption.scores.adapt,
    }));

    // Show cat animation on answer
    setShowCat(true);
    setTimeout(() => setShowCat(false), 600);

    if (!isLastQuestion) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setIsTransitioning(false);
      }, 600);
    }
  };

  const handlePrev = () => {
    if (!isFirstQuestion && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(prev => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (!isLastQuestion && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleSubmit = () => {
    sessionStorage.setItem('mmti_scores', JSON.stringify(scores));
    router.push('/result');
  };

  return (
    <main className={styles.main}>
      {/* Decorative background */}
      <div className={styles.bgDecor}>
        <div className={styles.decorCircle1} />
        <div className={styles.decorCircle2} />
      </div>

      <FloatingCat position="bottom-right" size={80} opacity={0.5} delay={0} />
      <FloatingCat position="top-left" size={50} opacity={0.3} delay={1} />
      <FloatingCat position="top-right" size={40} opacity={0.25} delay={2} />
      
      <div className={styles.container}>
        {/* Progress Section */}
        <motion.div
          className={styles.progressSection}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>测试进度</span>
            <motion.span 
              className={styles.progressCat}
              animate={showCat ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              {currentCat}
            </motion.span>
          </div>
          <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
        </motion.div>

        {/* Question Area */}
        <div className={styles.questionWrapper}>
          <AnimatePresence mode="wait">
            <QuestionCard
              key={currentQuestion}
              questionNumber={currentQuestion + 1}
              questionText={question.text}
            >
              {question.options.map((option, index) => (
                <OptionButton
                  key={index}
                  text={option.text}
                  index={index}
                  isSelected={answers[currentQuestion] === index}
                  onClick={() => handleSelectOption(index)}
                />
              ))}
            </QuestionCard>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <motion.div
          className={styles.navigation}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            className={`${styles.navButton} ${isFirstQuestion ? styles.disabled : ''}`}
            onClick={handlePrev}
            disabled={isFirstQuestion || isTransitioning}
            whileHover={!isFirstQuestion ? { scale: 1.02 } : {}}
            whileTap={!isFirstQuestion ? { scale: 0.98 } : {}}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            上一题
          </motion.button>

          <div className={styles.navCenter}>
            {Array.from({ length: Math.min(totalQuestions, 5) }, (_, i) => {
              const qIndex = Math.max(0, Math.min(currentQuestion - 2 + i, totalQuestions - 1));
              return (
                <motion.div
                  key={qIndex}
                  className={`${styles.navDot} ${qIndex === currentQuestion ? styles.navDotActive : ''} ${answers[qIndex] !== null ? styles.navDotAnswered : ''}`}
                  animate={qIndex === currentQuestion ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                />
              );
            })}
            {totalQuestions > 5 && (
              <span className={styles.navMore}>...</span>
            )}
          </div>

          {isLastQuestion ? (
            <motion.div
              whileHover={{ scale: hasAnsweredCurrent ? 1.02 : 1 }}
              whileTap={{ scale: hasAnsweredCurrent ? 0.98 : 1 }}
            >
              <CTAButton
                text="查看结果"
                onClick={handleSubmit}
                disabled={!hasAnsweredCurrent}
              />
            </motion.div>
          ) : (
            <motion.button
              className={styles.navButton}
              onClick={handleNext}
              disabled={isTransitioning}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              下一题
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          )}
        </motion.div>

        {/* Encouragement */}
        <AnimatePresence>
          {currentQuestion === 0 && (
            <motion.div
              className={styles.encouragement}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              根据你的第一直觉选择就好，没有对错之分
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
