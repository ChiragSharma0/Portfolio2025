import React, { useState } from "react";
import styles from "../styles/pages/dashboard.module.css"
import Projectbox from "../components/projects/projectbox";
import Dashskillcard from "../components/dashboard/dashstackcard";
import ProfileGrid from "../components/dashboard/intro";
import SkillShowcase from "../components/dashboard/dashstackcard";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Timeline from "../components/ExperienceTimeline";

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




    const experiences = [
        {
            title: "Freelancer",
            description: "Providing web development services to clients worldwide.",
        },
        {
            title: "Co-Founder, Devure Zyntra Technologies",
            description: "Building modern websites and apps as part of a collaborative team.",
        },
        {
            title: "Trainee, IIT Kanpur",
            description: "Completed a hands-on training program at IIT Kanpur to deepen technical and professional skills.",
        },
    ];


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


            <div className={styles.dashsection}>
                <h3>My Projects</h3>

                <div className={styles.projectlist}>

                    <Projectbox image="https://media.licdn.com/dms/image/v2/D5622AQFB8jXaDZlxLw/feedshare-shrink_2048_1536/B56ZaqfuORGkAo-/0/1746617165481?e=1755129600&v=beta&t=xHnxqUyWEak1ho0cUr93p7FB-GwfT4AePSVRGeVUxhg" heading="HSRIF" info=" A personalised dashboard to monitor heat related stress index" type="Govt." />
                    <Projectbox image="https://media.licdn.com/dms/image/v2/D5622AQFB8jXaDZlxLw/feedshare-shrink_2048_1536/B56ZaqfuORGkAo-/0/1746617165481?e=1755129600&v=beta&t=xHnxqUyWEak1ho0cUr93p7FB-GwfT4AePSVRGeVUxhg" heading="HSRIF" info=" A personalised dashboard to monitor heat related stress index" type="Govt." />

                </div>
            </div>


            <div className={styles.dashsection}>
                <h3>My Experience</h3>

                {experiences.map((exp, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.title}>{exp.title}</div>
                        <div className={styles.description}>{exp.description}</div>
                    </div>
                ))}
            </div>



        </div>

    )
}

export default Dashboard;