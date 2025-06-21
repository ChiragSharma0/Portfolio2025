// ProfileGrid.jsx
import React from "react";
import styles from "../styles/components/ProfileGrid.module.css";
import SocialButton from "./SOCIAL";

const ProfileGrid = () => {


  return (
    <div className={styles.grid}>

      <div className={styles.item1}>

        <div className={styles.hoverContent}>hover</div>
        <div className={styles.centerText}>Projects</div>
      </div>


      <div className={styles.item2}>
        <div className={styles.hoverContent}></div>
        <div className={styles.centerText}>Github</div>
      </div>


      <div className={styles.item3}>
        <div className={styles.hoverContent}></div>
        <div className={styles.centerText}>Contact Me</div>
      </div>


      <div className={styles.item4}>
        <div className={styles.centerText}>Linkedin</div>
        <div className={styles.hoverContent}> </div>

      </div>


      <div className={styles.item5}>
        <div className={styles.hoverContent}></div>
        <div className={styles.centerText}>Feed</div>
      </div>


      <div className={styles.item6}>
        <div className={styles.hoverContent}></div>
        <div className={styles.centerText}>Resume</div>
      </div>


      <div className={styles.item7}>
        <div className={styles.hoverContent}></div>
        <div className={styles.centerText}>Experience</div>
      </div>


    </div>
  );
};



export default ProfileGrid;
