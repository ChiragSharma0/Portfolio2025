import React from "react";
import styles from "../../styles/components/sidebar.module.css"
import { Link, useLocation } from "react-router-dom";



function MenuItem({ icon, itemname, to, itemnum = 1, collapse }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`${styles.menuItemContainer} ${isActive ? styles.active : ''}`}>
      <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <span className="material-symbols-outlined">{icon}</span>
          </div>
        {collapse && (

        <div className={styles.menuName}>
          {itemname}
          <div className={styles.itemno}>{itemnum}</div>
        </div>
        )
      }
      </div>
    </Link>
  );
}

export default MenuItem;
