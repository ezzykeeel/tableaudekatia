import React, { useState } from "react";
import useSound from "use-sound";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import clickSound from "../../sounds/click.mp3";

const Header = () => {
  const navigate = useNavigate();
  const [playSound] = useSound(clickSound);
  const url = window.location.pathname;
  const [aAbout, setaAbout] = useState(
    url.indexOf("about") !== -1 ? true : false
  );
  const [aHome, setaHome] = useState(
    url.indexOf("about") !== -1 || url.indexOf("portafolio") !== -1
      ? false
      : true
  );
  const [aPortafolio, setaPortafolio] = useState(
    url.indexOf("portafolio") !== -1 ? true : false
  );

  const activationStateHandler = (aboutF, homeF, portafolioF) => {
    setaAbout(aboutF);
    setaHome(homeF);
    setaPortafolio(portafolioF);
  };

  return (
    <div className="app-header" onClick={() => playSound()}>
      <div
        data-active={aAbout}
        onClick={() => {
          navigate("/about");
          activationStateHandler(true, false, false);
        }}
      >
        <span>About</span>
      </div>
      <div
        data-active={aHome}
        onClick={() => {
          navigate("/");
          activationStateHandler(false, true, false);
        }}
      >
        <span>Home</span>
      </div>
      <div
        data-active={aPortafolio}
        onClick={() => {
          navigate("/portafolio");
          activationStateHandler(false, false, true);
        }}
      >
        <span>Portafolio</span>
      </div>
    </div>
  );
};

export default Header;
