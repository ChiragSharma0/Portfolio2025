// ProfileGrid.jsx
import React from "react";
import styles from "../styles/components/ProfileGrid.module.css";

const ProfileGrid = () => {
 

  return (
    <div className={styles.grid}>
      <div className={styles.item1}>Projects</div>
      <div className={styles.item2}>LinkedIn</div>
      <div className={styles.item3}>Experience</div>
      <div className={styles.item4}>GitHub</div>
      <div className={styles.item5}>Feed</div>
      <div className={styles.item6}>Resume</div>
      <div className={styles.item7}>Contact Me</div>
    </div>
  );
};



export default ProfileGrid;
