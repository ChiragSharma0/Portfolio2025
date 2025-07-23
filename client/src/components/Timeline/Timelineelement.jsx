import React from 'react';
import styles from '../../styles/components/timeline.module.css';
import { motion } from 'framer-motion';

const TimelineElement = ({ item, index }) => {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      className={`${styles.item} ${fromLeft ? styles.left : styles.right}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className={styles.circle} />
      <div className={`${styles.badge} ${fromLeft ? styles.badgeRight : styles.badgeLeft}`}>
        {item.month} {item.year}
      </div>

      <div className={`${styles.tooltipBox} ${fromLeft ? styles.tooltipLeft : styles.tooltipRight}`}>
        <div className={styles.title}><strong>{item.title}</strong></div>
        <div className={styles.jobMeta}>
          <div className={styles.duration}>{item.start} - {item.end}</div>
        </div>

        <div className={styles.hiddenText}>
          <div className={styles.fullDesc}>
            <span className={styles.label}>📄 Description:</span>
            <p>{item.detail}</p>
          </div>

          <div className={styles.skills}>
            <span className={styles.label}>🧰 Tools:</span>
            <div className={styles.skillList}>
              {item.tools.map((tool, i) => (
                <span key={i} className={styles.skillBadge}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineElement;
