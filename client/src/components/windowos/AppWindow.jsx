import React from "react";
import { Rnd } from "react-rnd";
import styles from "../../styles/pages/winScreen.module.css";

export default function AppWindow({ name, content = "hello there", onClose, MAX, onMaximize }) {
  return (
    <Rnd
      size={{
        width: MAX ? "100%" : 400,
        height: MAX ? "100%" : 300,
      }}
      position={{
        x: MAX ? 0 : 100,
        y: MAX ? 0 : 100,
      }}
      minWidth={200}
      minHeight={150}
      bounds="parent"
      dragHandleClassName={styles.apptittle}
      className={styles.AppContainer}
      disableDragging={MAX}  // when maximized, can’t drag
      enableResizing={!MAX}  // when maximized, no resize
    >
      <div className={styles.apptittle}>
        <div>{name}</div>
        <div>
          <div
            className={styles.maximizebutton}
            onClick={onMaximize}
          >
            hi
          </div>
          <div className={styles.appclosebutton} onClick={onClose}>
            ✖
          </div>
        </div>
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
