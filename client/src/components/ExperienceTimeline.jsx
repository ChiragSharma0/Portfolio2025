import React from 'react';
import styles from '../styles/components/timeline.module.css';

import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';



const experienceData = [
  {
    month: 'Aug',
    year: '2021',
    title: 'Built My Portfolio Website',
    start: 'Aug 2021',
    end: 'Sep 2021',
    detail: 'Designed and developed a personal portfolio website to showcase my projects, skills, and resume. Implemented responsive layout, animations, and contact form.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
  },
  {
    month: 'Dec',
    year: '2024',
    title: 'Internship at IIT Kanpur',
    start: 'Dec 2024',
    end: 'Feb 2025',
    detail: 'Worked as a frontend and collaboration logic intern under a research team. Helped develop a collaborative code editing platform using advanced real-time synchronization tools.',
    tools: ['Monaco Editor', 'Y.js', 'GitHub API', 'React'],
  },
  {
    month: 'Mar',
    year: '2025',
    title: 'Built Real-Time Collaborative IDE',
    start: 'Mar 2025',
    end: 'Jun 2025',
    detail: 'Developed a real-time IDE inspired by VS Code using MERN stack, Monaco Editor, and Socket.IO. Implemented Google login, version control integration, and modular file explorer.',
    tools: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.IO', 'Monaco'],
  },
  {
    month: 'Jun',
    year: '2025',
    title: 'Freelance Web Development Projects',
    start: 'Jun 2025',
    end: 'Present',
    detail: 'Working with clients to build responsive web applications and dashboards. Focused on delivering performant, accessible, and scalable web solutions using MERN and GSAP.',
    tools: ['React', 'GSAP', 'MongoDB', 'Firebase', 'Tailwind'],
  }
];


const Timeline = () => {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.verticalLine} />
      {experienceData.map((item, index) => {
        const fromLeft = index % 2 === 0;
        return (
          <motion.div
            key={index}
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
              <div>
                <strong>{item.title}</strong>
                </div>

              <div className={styles.hiddenText}>
                <div className={styles.row}>
                  <span>{item.start} </span> -
                  <span>{item.end}</span>
                </div>

                <div className={styles.row}>
                  <span className={styles.label}>📄 Description:</span>
                  <p className={styles.desc}>{item.detail}</p>
                </div>

                <div className={styles.row}>
                  <span className={styles.label}>🧰 Tools:</span>
                  <p className={styles.tools}>{item.tools.join(', ')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;
