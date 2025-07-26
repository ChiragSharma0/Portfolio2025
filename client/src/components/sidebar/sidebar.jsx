// components/SideBar.jsx
import React, { useState } from "react";
import styles from "../../styles/components/sidebar.module.css";
import MenuItem from "./Menuitem";

function SideBar() {

  const [collapse, setCollapse] = useState(true);

  return (
    <div className={styles.SideBar} style={{ width: collapse ? "230px" : "70px" }}   >

      <div
        className={styles.collapser}
        onClick={() => setCollapse(!collapse)}
      >
        <span className="material-symbols-outlined">
          {collapse ? "chevron_left" : "chevron_right"}
        </span>
      </div>

      <div className={styles.sidebarprofile} style={{ padding: collapse ? "" : "10px" }}>

        <div className={styles.profileimg}>
          <img src="/me.jpeg" alt="profile" />
        </div>
        {collapse && (

          <div className={styles.profiletext}>
            <h2>Chirag Sharma</h2>
            <p>Full Stack Developer</p>
          </div>)}
      </div>

      <div className={styles.sidebarSection} >

        <div className={styles.sidebarScroll} >

          <MenuItem collapse={collapse} icon="dashboard" itemname="Dashboard" to="/" />
          <MenuItem collapse={collapse} icon="work_history" itemname="Experience" to="/experience" />
          <MenuItem collapse={collapse} icon="folder_code" itemname="Projects" to="/projects" />
          <MenuItem collapse={collapse} icon="category" itemname="Services" to="/services" />
          <MenuItem collapse={collapse} icon="person" itemname="About" to="/about" />
          {collapse && (

            <h4 className={styles.menuItemhead}>Resources</h4>
          )}
          <MenuItem collapse={collapse} icon="mark_chat_unread" itemname="Feed" to="/feed" />
          <MenuItem collapse={collapse} icon="psychology" itemname="Thought" to="/thoughts" />
          <MenuItem collapse={collapse} icon="stacks" itemname="Stack" to="/stack" />
          {collapse && (

            <h4 className={styles.menuItemhead}>Extras</h4>)}
          <MenuItem collapse={collapse} icon="auto_stories" itemname="Guestbook" to="/guestbook" />
          <MenuItem collapse={collapse} icon="explore_off" itemname="Don't Click" to="/dont-click" />
          {collapse && (

            <h4 className={styles.menuItemhead}>Connect</h4>)}
          <MenuItem collapse={collapse} icon="photo_camera" itemname="Instagram" to="https://www.instagram.com/chirag_sharma_0000/" />
          <MenuItem collapse={collapse} icon="terminal" itemname="Github" to="https://github.com/ChiragSharma0/" />
          <MenuItem collapse={collapse} icon="business_center" itemname="LinkedIn" to="https://www.linkedin.com/in/chirag-sharma-work/"/>
          <MenuItem collapse={collapse} icon="alternate_email" itemname="Contact Me" to="/contact" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
