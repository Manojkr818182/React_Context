import React from 'react'
import { BsFacebook, BsWhatsapp, BsTwitter, BsLinkedin, BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import brand_logo from '../../../assets/mnj.png';
import stylesheet from './footer.module.css';

const Footer = () => {
    return (
        <footer className={stylesheet.footer_distributed}>
            <div className={stylesheet.footer_left}>
                <span> <img src={brand_logo} width="150px" /></span>
                {/* <p className={stylesheet.footer_links}>
                    <a href="#" className={stylesheet.link_1}>Home</a>
                    <a href="#">Blog</a>
                    <a href="#">Pricing</a>
                    <a href="#">About</a>
                    <a href="#">Faq</a>
                    <a href="#">Contact</a>
                </p>
                <p className={stylesheet.footer_company_name}>CDU © 2023</p> */}
            </div>
            <div className={stylesheet.footer_center}>
                <div>
                    <FaMapMarkerAlt />
                    <p><span>#23 CG road Ahmedabad</span></p>
                </div>

                <div>
                    <BsFillTelephoneForwardFill />
                    <p>+91 8181820106</p>
                </div>

                <div>
                    <AiFillMail />
                    <p><a href="mailto:support@company.com">support@company.com</a></p>
                </div>

            </div>
            <div className={stylesheet.footer_right}>
                {/* <p className={stylesheet.footer_company_about}>
                    <span>Manoj</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p> */}
                <div className={stylesheet.footer_icons}>
                    <a href="#"><BsFacebook /></a>
                    <a href="#"><BsWhatsapp /></a>
                    <a href="#"><BsTwitter /></a>
                    <a href="#"><BsLinkedin /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer