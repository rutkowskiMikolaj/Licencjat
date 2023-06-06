import "../styles/styles.scss";
import React, { useState } from "react";
import girl_1 from "../assets/girl_1.svg";
import man from "../assets/man.svg";

const Main = () => {
  return (
    <div className="home">
      <h2 className="home__main-text">learn languages with LangON</h2>
      <h3 className="home__text1">Your journey with languages starts here!</h3>
      <p className="home__text2">
        We made this site to make language learning easier than ever.
      </p>
      <p className="home__text3">We made it for you</p>
      <img className="home__girl" src={girl_1}></img>
      <img className="home__boy" src={man}></img>
    </div>
  );
};

export default Main;
