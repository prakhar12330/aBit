import React from "react";
import "./Card.css";
import CardImg from "../../assets/cardImage.png";

const Card = () => {
    return (
        <div className="card">
            <img src={CardImg} alt="card image" />
            <div className="right-content">
                <div className="card-header">
                    <div className="name">DAN MACE</div>
                    <div className="username">/Jhony_Films/</div>
                </div>
                <div>
                    <div className="bio-title">Bio</div>
                    <div className="bio">
                        Simply a film fan creating original content for YouTube. Let’s
                        Collaborate.
                    </div>
                </div>
                <div className="tag">
                    <div className="inner-text">Creator</div>
                </div>
            </div>
        </div>
    );
};

export default Card;