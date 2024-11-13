import React from "react";
import me from "../../assets/images/Gattipro.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text" data-aos="fade-right">
          <p className="hero__text-greeting">
            <span>BONJOUR</span>, JE M'APPELLE FLORENT GATTI
          </p>

          <h1 className="hero__text-title">
            Je suis Développeur Full-Stack
            <span>BIG DATA</span>
          </h1>

          <p className="hero__text-description">
            Développeur passionné, alliant expertise technique et vision business.
            Maîtrise des technologies web modernes et des outils Big Data.
          </p>

          <ul className="hero__text-skills">
            <li>JavaScript, TypeScript, Python, PHP</li>
            <li>React, Vue.js, Django, Express</li>
            <li>Hadoop, Spark, analyse de données massives</li>
          </ul>
        </div>

        <div className="hero__image" data-aos="fade-left">
          <img src={me} alt="Florent GATTI" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
