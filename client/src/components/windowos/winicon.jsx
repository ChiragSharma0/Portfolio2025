// components/DesktopIcon.jsx
import React from "react";
import styles from "../../styles/pages/winScreen.module.css";

export default function DesktopIcon({ icon, onMouseDown ,onClick }) {
  return (
    <div
      className={styles.icon}
      style={{ transform: `translate(${icon.x}px, ${icon.y}px)` }}
      onMouseDown={(e) => onMouseDown(e, icon.id)}
      onDoubleClick={onClick} // Optional: double-click to open

    >
      <img src="/linkedin.png" alt={icon.name} draggable={false} />
      <span>{icon.name}</span>
    </div>
  );
}
