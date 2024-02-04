import React from "react";
import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/Card.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CoverImg from "./assets/coverImage.png";
import Band from "./assets/Band.png";
import Line from "./assets/Line.png";
import Plus from "./assets/Plus.png";
import Token from "./assets/Token.png";
import "./app.css";

function App() {
  return (
    <div>
      <Header />
      <img src={CoverImg} alt="cover image" className="cover-img" />
      <img src={Band} alt="band" className="band" />
      <Card />
      <div className="content">
        {/**content header */}
        <div className="content-header">
          <div className="release-text">
            <div className="release-title">Releases</div>
            <div className="sub-text">
              Videos that you upload in collaboration with aBit appear
              here.
            </div>
          </div>
          <div className="info">
            <div className="unit">
              <img src={Line} alt="line" className="line-img" />
              <div className="info-unit">
                <div className="info-value">1</div>
                <div className="info-param">Shared</div>
                <div className="info-param">Videos</div>
              </div>
            </div>
            <div className="unit">
              <img src={Line} alt="line" className="line-img" />
              <div className="info-unit">
                <div className="info-value">$9510</div>
                <div className="info-param">Funds</div>
                <div className="info-param">Raised</div>
              </div>
            </div>
            <div className="unit">
              <img src={Line} alt="line" className="line-img" />
              <div className="info-unit">
                <div className="info-value">317</div>
                <div className="info-param">Co-owner</div>
                <div className="info-param">Community</div>
              </div>
            </div>
            <div className="unit">
              <img src={Line} alt="line" className="line-img" />
              <div className="info-unit">
                <div className="info-value">$9304</div>
                <div className="info-param">Co-owner</div>
                <div className="info-param">Earnings</div>
              </div>
            </div>
          </div>
        </div>

        {/** content cards*/}
        <div className="content-card">
          <div className="empty-content-card">
            <img src={Plus} alt="plus" className="plus" />
            <div className="text-card">
              <div className="text-card">You haven’t uploaded any</div>
              <div className="text-card">
                videos with aBit yet. Add now!
              </div>
            </div>
          </div>

          <div className="token-card">
            <img src={Token} alt="card image" className="token-img" />
            <div className="token-text">The Sound of Silence</div>
            <div className="data">
              <div className="data-unit">
                <div className="data-param">Shares</div>
                <div className="data-value">317</div>
              </div>
              <div className="data-unit">
                <div className="data-param">Offered</div>
                <div className="data-value">75%</div>
              </div>
              <div className="data-unit">
                <div className="data-param">Raised</div>
                <div className="data-value">$9510</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { App };