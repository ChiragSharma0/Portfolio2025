import React, { useState, useEffect } from "react";
import styles from "../../styles/pages/winScreen.module.css";
import TaskIcon from "./taskicon";

export default function Taskbar() {
    const [time, setTime] = useState(new Date());
    const [battery, setBattery] = useState(null);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);

        if (navigator.getBattery) {
            navigator.getBattery().then((bat) => {
                setBattery(Math.round(bat.level * 100));
                bat.addEventListener("levelchange", () => {
                    setBattery(Math.round(bat.level * 100));
                });
            });
        }

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.taskbar}>
            {/* Left: Weather */}
            <div className={styles.taskbarLeft}>
                <div className={styles.taskpart}>
                    <span className="material-symbols-outlined">cloud</span>
                    <p>Weather</p>
                </div>
            </div>

            {/* Center: Start + Apps */}
            <div className={styles.taskbarCenter}>
                <TaskIcon icon="grid_view" name="START" />


            </div>

            {/* Right: System Tray */}
            <div className={styles.taskbarRight}>
                {/* Volume */}
                <div className={styles.taskpart}>
                    <span className="material-symbols-outlined">volume_up</span>
                </div>

                {/* Battery */}
                <div className={`${styles.taskpart} ${styles.datetime}`}>
                    <span className="material-symbols-outlined">
                        {battery === null
                            ? "battery_unknown"
                            : battery > 80
                                ? "battery_full"
                                : battery > 50
                                    ? "battery_5_bar"
                                    : battery >= 20
                                        ? "battery_2_bar"
                                        : "battery_alert"}
                    </span>
                    {battery !== null && (
                        <span style={{ fontSize: "12px" }}>{battery}%</span>
                    )}
                </div>


                {/* Time & Date with info box */}
                <div
                    className={`${styles.taskpart} ${styles.datetime}`}

                    style={{ position: "relative" }}
                >
                    <span style={{ fontSize: "14px", textAlign: "right" }}>
                        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}
                    </span>
                    <span style={{ fontSize: "12px" }}>
                        {time.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }).replace(/\//g, "-")}
                    </span>

                    <div className={styles.taskiconame} >
                        {time.toLocaleString("en-US", {
                            weekday: "long",
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}
