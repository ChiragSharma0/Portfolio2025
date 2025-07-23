// DraggableIcon.jsx
import React, { forwardRef } from "react";
import styles from "../../styles/components/windowos.module.css";

const DraggableIcon = forwardRef(({ icon, name }, ref) => {
  return (
    <div ref={ref} className={styles.icon}>
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
});

export default DraggableIcon;
