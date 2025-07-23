import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/components/windowos.module.css";

const gridSize = 80;

const initialIcons = [
  { id: "1", name: "Portfolio", x: 0, y: 0, icon: "/icons/portfolio.png" },
  { id: "2", name: "Blog", x: 0, y: gridSize, icon: "/icons/blog.png" },
  { id: "3", name: "Weather", x: 0, y: 2 * gridSize, icon: "/icons/weather.png" },
];

export default function WindowsOS() {
  const [icons, setIcons] = useState(initialIcons);
  const dragging = useRef(null);

  const handleMouseDown = (e, id) => {
    const icon = icons.find((i) => i.id === id);
    const offsetX = e.clientX - icon.x;
    const offsetY = e.clientY - icon.y;
    dragging.current = { id, offsetX, offsetY };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const { id, offsetX, offsetY } = dragging.current;

    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    setIcons((prev) =>
      prev.map((icon) =>
        icon.id === id ? { ...icon, x: newX, y: newY } : icon
      )
    );
  };

  const handleMouseUp = () => {
    if (!dragging.current) return;

    const { id } = dragging.current;
    dragging.current = null;

    setIcons((prev) => {
      const current = prev.find((i) => i.id === id);
      const snapX = Math.round(current.x / gridSize) * gridSize;
      const snapY = Math.round(current.y / gridSize) * gridSize;

      const overlapping = prev.find(
        (i) => i.id !== id && i.x === snapX && i.y === snapY
      );

      if (overlapping) {
        // Swap positions
        return prev.map((icon) => {
          if (icon.id === id) return { ...icon, x: snapX, y: snapY };
          if (icon.id === overlapping.id) return { ...icon, x: current.x, y: current.y };
          return icon;
        });
      } else {
        // Snap to empty grid
        return prev.map((icon) =>
          icon.id === id ? { ...icon, x: snapX, y: snapY } : icon
        );
      }
    });

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={styles.desktop}>
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className={styles.icon}
          onMouseDown={(e) => handleMouseDown(e, icon.id)}
          animate={{ x: icon.x, y: icon.y }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            position: "absolute",
            cursor: "grab",
          }}
        >
          <img src={icon.icon} alt={icon.name} style={{ width: 40 }} />
          <div>{icon.name}</div>
        </motion.div>
      ))}
    </div>
  );
}
