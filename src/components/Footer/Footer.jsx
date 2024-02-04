import React from "react";
import Line from "../../assets/Line.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo-wrapper">
                <div className="logo-footer">aBit</div>
                <div>Changing the way in which</div>
                <div>Creators and Fans Interact</div>
            </div>
            <div className="link-container">
                <img src={Line} alt="line" className="line-footer" />
                <div className="link-wrapper">
                    <div className="link-footer">Home</div>
                    <div className="link-footer">Are you a creator?</div>
                    <div className="link-footer">Support</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;