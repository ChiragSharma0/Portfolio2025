import React from "react";

import styles from "../styles/pages/Page.module.css"
import SideBar from "../components/sidebar";
import Dashboard from "./dashboard";

function Page() {





    return (
        <div className={styles.Page}>
            <SideBar />
            <div className={styles.content}>
                <Dashboard/>
                
            </div>
        </div>
    )
}


export default Page;