import React, { useEffect } from "react";
import anime from "animejs";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: ".ml15 .word",
      scale: [14, 1],
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    });
  });
  return (
    <div className="home-navigator">
      <div className="wrapper">
        <h1 className="ml15">
          <span className="word">Katia</span>
          <span className="word">Adame</span>
        </h1>
        <div className="mandala blur"></div>
      </div>
    </div>
  );
};

export default Home;
