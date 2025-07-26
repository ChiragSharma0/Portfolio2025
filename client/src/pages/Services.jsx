import React from "react";
import Style from "../styles/pages/Servicepage.module.css"
import ServiceBox from "../components/Services/Servicebox";

function ServicePagePage() {


    const services = [
        {
            Tittle: "Frontend Development",
            icon: "code",
            description: "Creating responsive, fast and interactive user interfaces using React, HTML, CSS, and JavaScript."
        },
        {
            Tittle: "Backend Development",
            icon: "dns",
            description: "Building scalable APIs, databases, and server logic using Node.js, Express, and MongoDB."
        },
        {
            Tittle: "Search Engine Optimization",
            icon: "search",
            description: "Improving website ranking and visibility through optimized content and structure."
        },
        {
            Tittle: "UI/UX Design",
            icon: "design_services",
            description: "Designing clean, user-friendly interfaces that provide great user experience."
        },
        {
            Tittle: "Deployment & Hosting",
            icon: "cloud_upload",
            description: "Deploying applications to platforms like Vercel, Netlify, or custom servers with CI/CD pipelines."
        },
    ];

    return (

        <div className={Style.Servicepage}>

            <div className={Style.Serviceintro}>
                <h1>Services</h1>
                <p className={Style.greytext}> Some of the things you can hire me for - </p>

            </div>
            <div className={Style.servicesGrid}>
                {services.map((service, index) => (
                    <ServiceBox
                        key={index}
                        stackIndex={index}
                        Tittle={service.Tittle}
                        icon={service.icon}
                        description={service.description}
                    />
                ))}
            </div>

        </div>

    )

}

export default ServicePagePage;