import React, { useState } from "react";
import styles from "../styles/pages/dashboard.module.css"
import Projectbox from "../components/projectbox";
import Dashskillcard from "../components/dashstackcard";
import ProfileGrid from "../components/intro";
import SkillShowcase from "../components/dashstackcard";

function Dashboard() {
    const [buttontext, settext] = useState("Email");
    const textToCopy = "work.chiragsharma@gmail.com";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            settext("Copied!");
            setTimeout(() => {
                settext("Email");
            }, 2000);
        } catch (err) {
            settext("unable to Copy !");
            setTimeout(() => {
                settext("Email");
            }, 2000);
        }
    }

    return (

        <div className={styles.Dashboardpage}>
            <div className={styles.Dashboardintro}>
                <h1>I'm Chirag Sharma</h1>
                <h1>A <span className={styles.greytext}>Full Stack</span> Web Developer</h1>
                <p className={styles.greytext}>I'm a developer who enjoys building web applications and exploring new technologies —
                    Also passionate about AI/ML and IOT.</p>
                <div className={styles.buttonsdiv}>
                    <button className={styles.buttongrey}>
                        My Works
                    </button>
                    <button className={styles.buttongreylight} onClick={handleCopy}>
                        <span className="material-symbols-outlined">content_copy</span>
                        {buttontext}
                    </button>
                </div>
            </div>

            <div className={styles.dashsection}>
                <h3>My Projects</h3>
                <div className={styles.projectlist}>
                    <Projectbox image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0160412025002582&psig=AOvVaw3qnKtiqmJQwi_-KYaN4wp4&ust=1750149058609000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjlpKnD9Y0DFQAAAAAdAAAAABAV" heading="HSRIF" info="lorem*3jjjjjdddddddd dddddddddddddddddddddddddddddddddfhhh  hhhhhhhhhhhh hhhhhhhhhhhhhhh  hhhhhhhhruekfekr fkjfkjfhdsj" type="hello" />


                    <Projectbox image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0160412025002582&psig=AOvVaw3qnKtiqmJQwi_-KYaN4wp4&ust=1750149058609000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjlpKnD9Y0DFQAAAAAdAAAAABAV" heading="HSRIF" info="lorem*3jjjjjdddddddd dddddddddddddddddddddddddddddddddfhhh  hhhhhhhhhhhh hhhhhhhhhhhhhhh  hhhhhhhhruekfekr fkjfkjfhdsj" type="hello" />
                </div>
            </div>


            <div className={styles.dashsection}>
                <h3>My Tech Stack</h3>
                {/* <div className={styles.projectlist}>
                    <Dashskillcard
                        Heading="Frontend"
                        skills={["HTML", "CSS", "JavaScript", "React", "Tailwind"]}
                    />
                    <Dashskillcard
                        Heading="Backend"
                        skills={["Node", "Express" , "MongoDB"]}
                    />
                    
                    <Dashskillcard
                        Heading="Tools"
                        skills={["GitHub", "VSCode", "Postman"]}
                    />
                    <Dashskillcard
                        Heading="Others"
                        skills={["Figma", "Netlify", "Vercel"]}
                    />
                </div> */}

                <SkillShowcase />
            </div>

            <div className={styles.dashsection}>
                <ProfileGrid />
            </div>



        </div>

    )
}

export default Dashboard;