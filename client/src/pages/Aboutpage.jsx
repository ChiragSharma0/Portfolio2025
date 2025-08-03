import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/pages/Aboutpage.module.css";

function AboutPage() {
    const fullText = ` Hi, I'm Chirag Sharma, a Web Developer based in India. I specialize in creating functional, responsive websites and web applications, always staying up-to-date with new technologies to provide high-quality solutions. My goal is to deliver seamless user experiences and help businesses grow online.`;

    const words = fullText.split(" ");
    const [displayedWords, setDisplayedWords] = useState([]);
    const [done, setDone] = useState(false);

    const animationRan = useRef(false); // 👈 stays true across renders

    useEffect(() => {
        if (animationRan.current) {
            // 👇 if already ran, just show full text
            setDisplayedWords(words);
            setDone(true);
            return;
        }

        animationRan.current = true; // 👈 prevent future runs

        let index = 0;
        const interval = setInterval(() => {
            setDisplayedWords((prev) => [...prev, words[index]]);
            index++;
            if (index >= words.length) {
                clearInterval(interval);
                setDone(true);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.Aboutpage}>
            <div className={styles.location}>
                <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>location_on</span>
                Based in India
            </div>
            <h1 style={{ textAlign: "left" }}>About</h1>

            <div className={styles.Aboutintro}>
                <div className={styles.Abouttext}>
                    <p className={`${styles.blurred} ${done ? styles.clear : ""}`}>
                        {displayedWords.join(" ")}
                    </p>

                    <div className={styles.gridcontainer}>
                        <div className={styles.gridbox1}>
                            <h3>
                                <span className={`material-symbols-outlined ${styles.icon}`}>calendar_today</span>
                                Background
                            </h3>

                            <p>Involved in web development since 2023, focusing on full-stack development.\n I am currently pursuing a BCA degree.</p>
                        </div>
                        <div className={styles.gridbox2}>
                            <h3>
                                <span className={`material-symbols-outlined ${styles.icon}`}>engineering</span>
                                Skills
                            </h3>

                            <p>MERN, Next.js, TypeScript, Git, Docker, Prisma, Jenkins, Postgres and AWS.</p>
                        </div>
                        <div className={styles.gridbox3}>
                            <h3>
                                <span className={`material-symbols-outlined ${styles.icon}`}>interests</span>
                                Interest
                            </h3>

                            <p>Exploring new tech, Web3, IOT, and AI.</p>
                        </div>
                        <div className={styles.gridbox4}>
                            <h3>
                                <span className={`material-symbols-outlined ${styles.icon}`}>person_heart</span>
                                Hobies
                            </h3>

                            <p>Hiking, Coding, designing, cooking, and traveling.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.Aboutphoto}>
                    <div className={styles.image}>                    <img src="/me.jpeg" alt="Harshit" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
