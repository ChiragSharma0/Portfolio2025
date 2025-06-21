import React from 'react';
import styles from '../styles/components/timeline.module.css';

import { motion } from 'framer-motion';
// src/components/Timeline/Timeline.jsx


const timelineData = [
  {
    year: "2023",
    title: "Internship at IIT Kanpur",
    description: "Worked on collaborative code editor project with real-time sync and GitHub integration.",
  },
  {
    year: "2022",
    title: "Portfolio Website",
    description: "Built my personal website using MERN stack to showcase projects and resume.",
  },
  {
    year: "2021",
    title: "Started Learning Web Dev",
    description: "Began exploring HTML, CSS, and JavaScript. Created basic websites and projects.",
  },
];

const Timeline = () => {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.line} />
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className={styles.year}>{item.year}</div>
          <div className={styles.content}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
