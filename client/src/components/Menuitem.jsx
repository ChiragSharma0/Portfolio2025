import React from "react";
import styles from "../styles/components/sidebar.module.css"
function MenuItem({icon,itemname,itemnum=1}){

    return(
          <label className={styles.menuItemContainer}>
                  <input type="radio" name="Menu" />
                  <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div className={styles.menuName}>{itemname}
                      <div className={styles.itemno}>{itemnum}</div>
                    </div>
                  </div>
                </label>
    )
}

export default MenuItem;