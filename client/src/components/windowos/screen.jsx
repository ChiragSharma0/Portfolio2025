import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/pages/winScreen.module.css";
import DesktopIcon from "./winicon";
import TaskIcon from "./taskicon";
import Taskbar from "./Taskbar";
import AppWindow from "./AppWindow";

const GRID_SIZE = 80;
const GAP = 10;
const TASKBAR_HEIGHT = 60; // Set your taskbar height

const initialIcons = [
  { id: 1, name: "My Files" },
  { id: 2, name: "Browser" ,url:"https://www.cleverdeveloper.in/"},
  { id: 3, name: "Notes",url:"https://chiragsharma0.github.io/Calculator/" },
  { id: 4, name: "Editor" },
  { id: 4, name: "Editor" },
  { id: 4, name: "Editor" },
  { id: 4, name: "Editor" },
  { id: 4, name: "Editor" },
  { id: 4, name: "Editor" },
  { id: 4, name: "Editor" },


];

export default function WINSCREEN() {
  const [icons, setIcons] = useState([]);
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });
  const dragging = useRef(null);
  const [ActiveApps, setActive] = useState([])

  useEffect(() => {
    const calculateGrid = () => {
      const cols = Math.floor(window.innerWidth / (GRID_SIZE + GAP));
      const rows = Math.floor(
        (window.innerHeight - TASKBAR_HEIGHT) / (GRID_SIZE + GAP)
      );
      setGrid({ cols, rows });

      setIcons(
        initialIcons.map((icon, index) => {
          const row = index % rows; // Fill vertically first
          const col = Math.floor(index / rows); // Move to next column when full
          return {
            ...icon,
            x: col * (GRID_SIZE + GAP),
            y: row * (GRID_SIZE + GAP),
          };
        })
      );

    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  const handleMouseDown = (e, id) => {
    const icon = icons.find((i) => i.id === id);
    const offsetX = e.clientX - icon.x;
    const offsetY = e.clientY - icon.y;
    const previous = { x: icon.x, y: icon.y }
    dragging.current = { id, offsetX, offsetY, previous };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const { id, offsetX, offsetY } = dragging.current;

    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    const maxX = window.innerWidth - GRID_SIZE;
    const maxY = window.innerHeight - GRID_SIZE; // Prevent overlap

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    setIcons((prev) =>
      prev.map((icon) =>
        icon.id === id ? { ...icon, x: newX, y: newY } : icon
      )
    );
  };

  const handleMouseUp = () => {
    if (!dragging.current) return;
    const { id, previous } = dragging.current;
    dragging.current = null;

    setIcons((prev) => {
      const current = prev.find((i) => i.id === id);
      let snapX = Math.round(current.x / (GRID_SIZE + GAP)) * (GRID_SIZE + GAP);
      let snapY = Math.round(current.y / (GRID_SIZE + GAP)) * (GRID_SIZE + GAP);

      const maxX = window.innerWidth - GRID_SIZE;
      const maxY = window.innerHeight - TASKBAR_HEIGHT - GRID_SIZE;

      snapX = Math.max(0, Math.min(snapX, maxX));
      snapY = Math.max(0, Math.min(snapY, maxY));

      const isOccupied = prev.some(
        (icon) => icon.id !== id && icon.x === snapX && icon.y === snapY
      );

      return prev.map((icon) =>
        icon.id === id
          ? {
            ...icon,
            x: isOccupied ? previous.x : snapX,
            y: isOccupied ? previous.y : snapY,
          }
          : icon
      );
    });

    console.log(initialIcons)
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleIconClick = (icon) => {
    setActive(prev => [...prev, icon]); // append new app
  };
const handleAppClose = (icon) => {
  setActive((prev) => prev.filter((app) => app.id !== icon.id));
};


  return (
    <div className={styles.wincontainer}>
      <div className={styles.screen}>
        {icons.map((icon) => (
          <DesktopIcon key={icon.id} icon={icon} onMouseDown={handleMouseDown} onClick={() => handleIconClick(icon)}
          />
        ))}
        <div className={styles.windowcontainer}>
          {ActiveApps.map((app) => (
            <AppWindow name={app.name} content={app.url} onClose={() => handleAppClose(app)}/>
          ))}
        </div>
      </div>

      <Taskbar />


    </div>
  );
}
