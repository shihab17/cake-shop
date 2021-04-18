import React from 'react';
import SimpleReactFooter from "simple-react-footer";
const Footer = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis vero facilis possimus. Nulla illum exercitationem quo doloribus rem iste magnam. Voluptatem eius totam corporis! Voluptatum a minima error ab?"
    const title = "Cake Shop";
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "About",
                    link: "/about"
                },
                {
                    name: "Careers",
                    link: "/careers"
                },
                {
                    name: "Contact",
                    link: "/contact"
                },
                {
                    name: "Admin",
                    link: "/admin"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Privacy",
                    link: "/privacy"
                },
                {
                    name: "Terms",
                    link: "/terms"
                }
            ]
        },
        {
            title: "Visit",
            resources: [
                {
                    name: "Locations",
                    link: "/locations"
                },
                {
                    name: "Culture",
                    link: "/culture"
                }
            ]
        }
    ];
    return (
        <SimpleReactFooter 
        description={description} 
        title={title}
        columns={columns}
        linkedin=""
        facebook=""
        twitter=""
        instagram=""
        youtube=""
        pinterest=""
        copyright="cake-shop"
        iconColor="black"
        backgroundColor='pink'
        fontColor="white"
        copyrightColor="darkgrey"
     />
    );
};

export default Footer;