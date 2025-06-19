import React from "react";
import styles from "../styles/components/Projectbox.module.css"

function Projectbox({image, heading, info, type}) {


    return (

        <div className={styles.projectbox}>
            <div className={styles.Projectimg}><img src={image} alt="project" /></div>
            <div className={styles.Projectinfo}>
                <div className={styles.projectdetails}>
                    <h3>{heading}</h3>
                    <p>{info}</p>
                </div>
                <div className={styles.projecttype}><span>{type}</span></div>
            </div>
        </div>

    )
}

export default Projectbox;