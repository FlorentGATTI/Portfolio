import React, { useEffect, useState } from "react";
import me from "../../assets/images/Florentpro.jpg";
import "./Hero.scss";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = "Je suis Développeur Full-Stack";

  useEffect(() => {
    setIsVisible(true);
    let index = 0;

    const typeWriter = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typeWriter);
        setTypingComplete(true);
      }
    }, 50);

    return () => clearInterval(typeWriter);
  }, []);

  return (
    <section className="hero">
      <div className={`hero__content ${isVisible ? "visible" : ""}`}>
        <div className="hero__text fade-in">
          <p className="hero__text-greeting">
            <span>BONJOUR</span>, JE M'APPELLE FLORENT GATTI
          </p>

          <h1 className={`hero__text-title ${!typingComplete ? "typing" : ""}`}>
            {typedText}
            {typingComplete && <span>BIG DATA</span>}
          </h1>

          <p className="hero__text-description">Développeur Full-Stack spécialisé en Big Data, j'allie expertise technique et vision business pour transformer les données massives en solutions à forte valeur ajoutée. Master en Big Data et architectures distribuées.</p>

          <ul className="hero__text-skills">
            <li>JavaScript/TypeScript: React, Vue.js, Next.js</li>
            <li>Python/Backend: Django, FastAPI, Express</li>
            <li>Big Data: Hadoop, Spark, Pandas, TensorFlow</li>
            <li>Base de données: MySQL, PostgreSQL, MongoDB</li>
          </ul>
        </div>

        <div className="hero__image fade-in">
          <img src={me} alt="Portrait professionnel" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
