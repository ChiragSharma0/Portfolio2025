import React, { useEffect } from "react";
import styles from "../styles/pages/Projects.module.css"
import Timeline from "../components/Timeline/Timeline";
import Projectbox from "../components/projects/projectbox";
import Desktop from "../components/projects/windowsos";


const experienceData = [
  {
    month: 'Aug',
    year: '2021',
    title: 'Built My Portfolio Website',
    start: 'Aug 2021',
    end: 'Sep 2021',
    detail: 'Designed and developed a personal portfolio website to showcase my projects, skills, and resume. Implemented responsive layout, animations, and contact form.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
  },
  {
    month: 'Dec',
    year: '2024',
    title: 'Internship at IIT Kanpur',
    start: 'Dec 2024',
    end: 'Feb 2025',
    detail: 'Worked as a frontend and collaboration logic intern under a research team. Helped develop a collaborative code editing platform using advanced real-time synchronization tools.',
    tools: ['Monaco Editor', 'Y.js', 'GitHub API', 'React'],
  },
  {
    month: 'Mar',
    year: '2025',
    title: 'Built Real-Time Collaborative IDE',
    start: 'Mar 2025',
    end: 'Jun 2025',
    detail: 'Developed a real-time IDE inspired by VS Code using MERN stack, Monaco Editor, and Socket.IO. Implemented Google login, version control integration, and modular file explorer.',
    tools: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.IO', 'Monaco'],
  },
  {
    month: 'Jun',
    year: '2025',
    title: 'Freelance Web Development Projects',
    start: 'Jun 2025',
    end: 'Present',
    detail: 'Working with clients to build responsive web applications and dashboards. Focused on delivering performant, accessible, and scalable web solutions using MERN and GSAP.',
    tools: ['React', 'GSAP', 'MongoDB', 'Firebase', 'Tailwind'],
  }
];





function ProjectPage() {

    useEffect(() => {
        console.log("This is data", experienceData);
    }, []);


    return (

        <div className={styles.Projectspage}>


            <div className={styles.Projectsintro}>
                <h1>Experience</h1>
                <p className={styles.greytext}>A summary of my professional work history, technologies I've used, and key achievements.

                </p>

            </div>
                <div className={styles.myprojects}>
                                        <Projectbox image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0160412025002582&psig=AOvVaw3qnKtiqmJQwi_-KYaN4wp4&ust=1750149058609000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjlpKnD9Y0DFQAAAAAdAAAAABAV" heading="HSRIF" info="lorem*3jjjjjdddddddd dddddddddddddddddddddddddddddddddfhhh  hhhhhhhhhhhh hhhhhhhhhhhhhhh  hhhhhhhhruekfekr fkjfkjfhdsj" type="hello" />
                                        <Projectbox image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0160412025002582&psig=AOvVaw3qnKtiqmJQwi_-KYaN4wp4&ust=1750149058609000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjlpKnD9Y0DFQAAAAAdAAAAABAV" heading="HSRIF" info="lorem*3jjjjjdddddddd dddddddddddddddddddddddddddddddddfhhh  hhhhhhhhhhhh hhhhhhhhhhhhhhh  hhhhhhhhruekfekr fkjfkjfhdsj" type="hello" />
                                        <Projectbox image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0160412025002582&psig=AOvVaw3qnKtiqmJQwi_-KYaN4wp4&ust=1750149058609000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjlpKnD9Y0DFQAAAAAdAAAAABAV" heading="HSRIF" info="lorem*3jjjjjdddddddd dddddddddddddddddddddddddddddddddfhhh  hhhhhhhhhhhh hhhhhhhhhhhhhhh  hhhhhhhhruekfekr fkjfkjfhdsj" type="hello" />
                                        <Projectbox image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0160412025002582&psig=AOvVaw3qnKtiqmJQwi_-KYaN4wp4&ust=1750149058609000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjlpKnD9Y0DFQAAAAAdAAAAABAV" heading="HSRIF" info="lorem*3jjjjjdddddddd dddddddddddddddddddddddddddddddddfhhh  hhhhhhhhhhhh hhhhhhhhhhhhhhh  hhhhhhhhruekfekr fkjfkjfhdsj" type="hello" />
                                        <Projectbox image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0160412025002582&psig=AOvVaw3qnKtiqmJQwi_-KYaN4wp4&ust=1750149058609000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjlpKnD9Y0DFQAAAAAdAAAAABAV" heading="HSRIF" info="lorem*3jjjjjdddddddd dddddddddddddddddddddddddddddddddfhhh  hhhhhhhhhhhh hhhhhhhhhhhhhhh  hhhhhhhhruekfekr fkjfkjfhdsj" type="hello" />
                                        <Projectbox image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0160412025002582&psig=AOvVaw3qnKtiqmJQwi_-KYaN4wp4&ust=1750149058609000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjlpKnD9Y0DFQAAAAAdAAAAABAV" heading="HSRIF" info="lorem*3jjjjjdddddddd dddddddddddddddddddddddddddddddddfhhh  hhhhhhhhhhhh hhhhhhhhhhhhhhh  hhhhhhhhruekfekr fkjfkjfhdsj" type="hello" />
                                        <Projectbox image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0160412025002582&psig=AOvVaw3qnKtiqmJQwi_-KYaN4wp4&ust=1750149058609000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjlpKnD9Y0DFQAAAAAdAAAAABAV" heading="HSRIF" info="lorem*3jjjjjdddddddd dddddddddddddddddddddddddddddddddfhhh  hhhhhhhhhhhh hhhhhhhhhhhhhhh  hhhhhhhhruekfekr fkjfkjfhdsj" type="hello" />

                </div>


        </div>
    )

}

export default ProjectPage;