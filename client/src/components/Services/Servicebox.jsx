import React from "react";
import Style from "../../styles/pages/Servicepage.module.css"
function ServiceBox({ icon, description, Tittle, stackIndex }) {

    return (

        <div
            className={Style.stackingCard}
            style={{
                top: `${10 + stackIndex * 6}px`,
                zIndex: 10 + stackIndex,
                
            }}
        >
            <div className={Style.serviceContainer}>

                <div className={Style.ServiceTittle}> <h2>{Tittle}</h2> </div>
                <div className={Style.ServiceBody}>
                    <div className={Style.ServiceIcon}>
                        <span className="material-symbols-outlined" style={{ fontSize: "30px" }}>{icon}</span>
                    </div>
                    <div className={Style.ServiceDis}>{description} </div>

                </div>

            </div >
        </div>
    )

}

export default ServiceBox;