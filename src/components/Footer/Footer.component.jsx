import React from "react";
import "./Footer.styles.scss";

const Footer = () => {

    return (

        <div className="footer_container">
            <ul>
                <li>
                    <a href="https://www.facebook.com/" target="_blank"  rel="noreferrer">Facebook</a>
                </li>
                <li>
                    <a href="https://www.google.com/search?q=blogs"  rel="noreferrer">Blog</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank"  rel="noreferrer">Instagram</a>
                </li>
                <li>
                    <a href="#">Newsfeed</a>
                </li>
                <li>
                    <a href="#">Upcoming Products</a>
                </li>
                <li>
                    <a href="#">Affiliates</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
                <li>
                    <a href="#">Refund</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;