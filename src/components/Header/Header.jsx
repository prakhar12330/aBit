import React from "react";
import arrow from "../../assets/Arrow.png";
import notif from "../../assets/notification.png";
import profile from "../../assets/Profile.png";
import wallet from "../../assets/Wallet.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">aBit</div>
            <div className="icons-wrapper">
                <button className="share-btn">Share new video</button>
                <img src={wallet} alt="wallet" />
                <img src={notif} alt="notification" />
                <img src={profile} alt="profile" />
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    );
};

export default Header;