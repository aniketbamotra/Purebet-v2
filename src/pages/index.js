import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import bgImg from "../images/Ellipse.png";
import "./index.scss";

const IndexPage = () => {
  const handleLinks = (linkNo) => {
    if (linkNo === 0) {
      window.open("https://twitter.com/Purebet_io", "_blank").focus();
    }
    if (linkNo === 1) {
      window.open("https://discord.com/invite/3UWkCEQGka", "_blank").focus();
    }
  };
  return (
    <main>
      <header>
        <StaticImage
          src="../assets/Logo/Group 37.png"
          className="logo"
        ></StaticImage>
      </header>
      <img src={bgImg} className="bg-img"></img>
      <div className="hero-text serif">
        A decentralised, non-custodial sports betting exchange and decentralised
        gaming (DeGam) ecosystem.
      </div>
      <div className="btn-container">
        <button className="btn sans" onClick={() => handleLinks(0)}>
          Follow us on Twitter
        </button>
        <button className="btn sans" onClick={() => handleLinks(1)}>
          Join our Discord Server
        </button>
      </div>
      <footer>
        <div
          className="ft-text
        "
        >
          &#169; Copyright 2022 | Purebet.
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;
