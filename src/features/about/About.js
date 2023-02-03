import { useEffect } from "react";
import anime from "animejs";
import "./about.scss";

const About = () => {
  useEffect(() => {
    var textWrapper = document.querySelector(".ml11 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1)
    });
  });

  return (
    <div className="wrapper">
      <br />
      <br />
      <br />
      <br />
      <div className="ml11">
        <span className="text-wrapper">
          <div className="letters">
            <p>
              This is the most beautiful, sexy, smart woman ever lived on earth,
              stylish, designer, completely self-made, not only with style and
              class, but with glamour, and an innumerable number of attributes
              that any man will became crazy about them. Cannot avoid being
              super talented, intelectual, positive, with a great sense of
              humor, compassionate, good listener, supportive, motivating,
              amazingly pretty but over all humble.
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default About;
