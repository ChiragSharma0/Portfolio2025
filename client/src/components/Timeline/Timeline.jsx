// components/Timeline.jsx
import React from 'react';
import styles from '../../styles/components/timeline.module.css';
import TimelineElement from './Timelineelement';
import { motion } from 'framer-motion';


const Timeline = ({ data=[] }) => {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.verticalLine} />
      {data.map((item, index) => (
        <TimelineElement key={index} item={item} index={index} />
      ))}
    </div>
  );
};
 
export default Timeline;
