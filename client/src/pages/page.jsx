import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styles from "../styles/pages/Page.module.css"

import SideBar from "../components/sidebar/sidebar";
import Dashboard from "./dashboard";
import Timeline from "../components/Timeline/Timeline";
import ExperiencePage from "./Experience";
import { FaReact } from "react-icons/fa";
import MeteorParticles from "../components/common/meteor";
import MeteorCanvas from "../components/common/meteor";
import StarCanvas from "../components/common/stars";
import ProjectPage from "./projectPage";
import ServicePagePage from "./Services";
import AboutPage from "./Aboutpage";
import StackPage from "./Stackpage";
import WINSCREEN from "../components/windowos/screen";

function Page() {





    return (
        <div className={styles.Page}>

            <Router>

                <SideBar />
                <div className={styles.content}>
                    <div className={styles.backdrop}>
                        <StarCanvas count={50} />
                    </div>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/home" element={<Dashboard />} />

                        <Route path="/experience" element={<ExperiencePage />} />
                        <Route path="/Projects" element={<ProjectPage />} />
                        <Route path="/services" element={<ServicePagePage />} />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path="/stack" element={<StackPage/>} />
                        <Route path="/dont-click" element={<WINSCREEN/>} />



                    </Routes>

                    <footer>

                        <div>© 2025 Portfolio. All rights reserved.</div>
                        <div>Made with <FaReact color="#61DAFB" /> By Chirag Sharma</div>

                    </footer>
                </div>
            </Router>

        </div>
    )
}


export default Page;



