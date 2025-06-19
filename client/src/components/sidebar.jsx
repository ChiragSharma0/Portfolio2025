import React from "react";
import styles from "../styles/components/sidebar.module.css";
import MenuItem from "./Menuitem";

function SideBar() {
  return (
    <div className={styles.SideBar}>
       <div className={styles.sidebarprofile}>
          <div className={styles.profileimg}>
            <img src="/me.jpeg" alt="" /></div>
          <div className={styles.profiletext} >
            <h2>Chirag Sharma</h2>
            <p>Full Stack Developer</p>
          </div>
        </div>
      <div className={styles.sidebarSection}>

       


        <MenuItem icon="dashboard" itemname="Dashboard" />
        <MenuItem icon="work_history" itemname="Experience" />
        <MenuItem icon="folder_code" itemname="Projects" />
        <MenuItem icon="category" itemname="Services" />
        <MenuItem icon="person" itemname="About" />



        <h4 className={styles.menuItemhead}>Resources</h4>

        <MenuItem icon="mark_chat_unread" itemname="Feed" />
        <MenuItem icon="psychology" itemname="Thought" />
        <MenuItem icon="stacks" itemname="Stack" />




        <h4 className={styles.menuItemhead}>Extras</h4>

        <MenuItem icon="auto_stories" itemname="Guestbook" />
        <MenuItem icon="explore_off" itemname="Don't Click" />




        <h4 className={styles.menuItemhead}>Connect</h4>

        <MenuItem icon="photo_camera" itemname="Instagram" />
        <MenuItem icon="terminal" itemname="Github" />
        <MenuItem icon="business_center" itemname="LinkedIn" />
        <MenuItem icon="alternate_email" itemname="Contact Me" />


      </div>
    </div>
  );
}

export default SideBar;
