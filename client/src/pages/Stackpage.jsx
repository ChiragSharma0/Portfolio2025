import React, { useEffect } from "react";
import styles from "../styles/pages/Stack.module.css"
// At the top of your StackPage.jsx
// Add the React icon
import { SiReact, SiTypescript, SiTailwindcss, SiRadixui } from "react-icons/si";
import { SiExpress, SiMongodb } from "react-icons/si";
import { SiDocker, SiVercel } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { MdOutlineCloud } from "react-icons/md"; // as placeholder for Hostinger
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiPostman,  } from "react-icons/si";
import { MdExtension } from "react-icons/md"; // used for Cursor
import { SiFigma, SiCanva } from "react-icons/si";


const stackData = [
    {
        name: "React.js",
        description: "Library for building user interfaces",
        tags: ["UI", "Components", "JavaScript"],
        icon: <SiReact /> // ✅ Corrected to React icon
    },
    {
        name: "TypeScript",
        description: "Strongly typed programming language for JavaScript",
        tags: ["Language", "JavaScript", "React"],
        icon: <SiTypescript />
    },
    {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
        tags: ["CSS", "Styling", "UI"],
        icon: <SiTailwindcss />
    },
    {
        name: "shadcn/ui",
        description: "Re-usable components built with Radix UI and Tailwind",
        tags: ["Components", "UI", "Tailwind"],
        icon: <SiRadixui />
    }
];

const backendData = [
    {
        name: "Express.js",
        description: "Minimal and flexible Node.js web application framework",
        tags: ["Server", "Routing", "Node.js"],
        icon: <SiExpress />,
    },
    {
        name: "MongoDB",
        description: "NoSQL database for modern web applications",
        tags: ["Database", "NoSQL", "JSON"],
        icon: <SiMongodb />,
    },
];

const devopsData = [
    {
        name: "Docker",
        description: "Container platform for consistent app deployment",
        tags: ["DevOps", "Containers", "CI/CD"],
        icon: <SiDocker />,
    },
    {
        name: "Vercel",
        description: "Frontend cloud for static sites and Jamstack apps",
        tags: ["Hosting", "CI/CD", "Edge"],
        icon: <SiVercel />,
    },
    {
        name: "VPS",
        description: "Virtual Private Server for full control hosting",
        tags: ["Linux", "Hosting", "Deployment"],
        icon: <FaServer />,
    },
    {
        name: "Hostinger",
        description: "Managed cloud and shared hosting service",
        tags: ["cPanel", "Cloud", "Affordable"],
        icon: <MdOutlineCloud />,
    }
];

const toolsData = [
    {
        name: "Git",
        description: "Version control system for source code",
        tags: ["VCS", "CLI", "Collaboration"],
        icon: <FaGitAlt />,
    },
    {
        name: "GitHub",
        description: "Cloud platform to host and review code",
        tags: ["VCS", "Hosting", "CI/CD"],
        icon: <FaGithub />,
    },
    {
        name: "Postman",
        description: "API testing and collaboration platform",
        tags: ["API", "Testing", "Docs"],
        icon: <SiPostman />,
    },
    {
        name: "Cursor",
        description: "AI-powered code editor built on VSCode",
        tags: ["Editor", "AI", "Productivity"],
        icon: <MdExtension />,
    },
    {
        name: "Auth0 / Vercel Auth",
        description: "Authentication services for secure login flows",
        tags: ["Auth", "JWT", "OAuth"],
        icon: <SiVercel />, // or choose another if preferred
    },
];

const designToolsData = [
    {
        name: "Figma",
        description: "Collaborative interface design tool",
        tags: ["UI/UX", "Design", "Prototyping"],
        icon: <SiFigma />,
    },
    {
        name: "Canva",
        description: "Online tool for creating visual content",
        tags: ["Graphics", "Marketing", "Content"],
        icon: <SiCanva />,
    },
];



function StackPage() {




    return (

        <div className={styles.Stackpage}>


            <div className={styles.Stackintro}>
                <h1>Stack</h1>
                <p className={styles.greytext}>A curated list of my favorite tools, frameworks, and services that power my projects.

                </p>

            </div>

            <div className={styles.MyStack}>

                <div className={styles.skillcontainer}>
                    <div className={styles.skilltittle}><h3>Frontend</h3></div>
                    <div className={styles.skillbody}>
                        {stackData.map((skill, index) => (
                            <div key={index} className={styles.skillbox}>
                                <div className={styles.logo}>{skill.icon}</div>
                                <div className={styles.detail}>
                                    <h2>{skill.name}</h2>
                                    <p>{skill.description}</p>
                                    <div className={styles.tags}>
                                        {skill.tags.map((tag, idx) => (
                                            <span key={idx}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skillcontainer}>
                    <div className={styles.skilltittle}><h3>Backend</h3></div>
                    <div className={styles.skillbody}>
                        {backendData.map((skill, index) => (
                            <div key={index} className={styles.skillbox}>
                                <div className={styles.logo}>{skill.icon}</div>
                                <div className={styles.detail}>
                                    <h2>{skill.name}</h2>
                                    <p>{skill.description}</p>
                                    <div className={styles.tags}>
                                        {skill.tags.map((tag, idx) => (
                                            <span key={idx}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skillcontainer}>
                    <div className={styles.skilltittle}><h3>DevOps & Cloud</h3></div>
                    <div className={styles.skillbody}>
                        {devopsData.map((skill, index) => (
                            <div key={index} className={styles.skillbox}>
                                <div className={styles.logo}>{skill.icon}</div>
                                <div className={styles.detail}>
                                    <h2>{skill.name}</h2>
                                    <p>{skill.description}</p>
                                    <div className={styles.tags}>
                                        {skill.tags.map((tag, idx) => (
                                            <span key={idx}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skillcontainer}>
                    <div className={styles.skilltittle}><h3>Development Tools</h3></div>
                    <div className={styles.skillbody}>
                        {toolsData.map((tool, index) => (
                            <div key={index} className={styles.skillbox}>
                                <div className={styles.logo}>{tool.icon}</div>
                                <div className={styles.detail}>
                                    <h2>{tool.name}</h2>
                                    <p>{tool.description}</p>
                                    <div className={styles.tags}>
                                        {tool.tags.map((tag, idx) => (
                                            <span key={idx}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skillcontainer}>
                    <div className={styles.skilltittle}><h3>Design Tools</h3></div>
                    <div className={styles.skillbody}>
                        {designToolsData.map((tool, index) => (
                            <div key={index} className={styles.skillbox}>
                                <div className={styles.logo}>{tool.icon}</div>
                                <div className={styles.detail}>
                                    <h2>{tool.name}</h2>
                                    <p>{tool.description}</p>
                                    <div className={styles.tags}>
                                        {tool.tags.map((tag, idx) => (
                                            <span key={idx}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>



        </div>
    )

}

export default StackPage;