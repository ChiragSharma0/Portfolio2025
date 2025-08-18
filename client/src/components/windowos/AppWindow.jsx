import React from "react";
import { Rnd } from "react-rnd";
import styles from "../../styles/pages/winScreen.module.css";

export default function AppWindow({ name, content = "hello there", onClose }) {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 400,
        height: 300,
      }}
      minWidth={200}
      minHeight={150}
      bounds="parent"
      dragHandleClassName={styles.apptittle} 
      className={styles.AppContainer}
    >
      <div className={styles.apptittle}>
        <div>{name}</div>
        <div className={styles.appclosebutton} onClick={onClose}>X</div>
      </div>
      <div className={styles.appbody}>
        <iframe
          src={content}
          title={name}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </Rnd>
  );
}
