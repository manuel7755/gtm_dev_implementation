import React, {useEffect} from "react";
import "./contact_page.styles.scss";
import ContactForm from "../../components/ContactForm/ContactForm.component";

import TagManager from "react-gtm-module";


const ContactPage = () => {

    useEffect(() => {

        TagManager.dataLayer({
            dataLayer: {
                event: "pageview",
                page: {
                    path:"/contact_page",
                    pageType: "contactPage"
                },  
            }
        })
    }, [])

    return (
        <div className="page_section contact_page_container">
            <ContactForm />
        </div>
    )
}


export default ContactPage;

