// components/DesktopIcon.jsx
import React from "react";
import styles from "../../styles/pages/winScreen.module.css";

export default function TaskIcon({ icon, image,onMouseDown ,name }) {

    return (
        <div
            className={styles.taskicon}
            style={{ transform: `translate(${icon.x}px, ${icon.y}px)` }}
        >
            {image &&  <img src="/linkedin.png" alt={icon.name} draggable={false} />}
            {icon &&   <span class="material-symbols-outlined">{icon}</span>}
            <div className={styles.taskiconame}><p>START</p></div>
        </div>
    );
}
