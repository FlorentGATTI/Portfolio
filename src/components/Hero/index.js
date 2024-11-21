import React, { useEffect, useState } from "react";
import me from "../../assets/images/Florentpro.jpg";
import "./Hero.scss";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    let text = "Je suis Développeur Full-Stack";

    const typeWriter = setInterval(() => {
      if (index < text.length) {
        setTypedText(prev => text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeWriter);
        setTypingComplete(true);
      }
    }, 100); // Augmentons légèrement le délai

    return () => clearInterval(typeWriter);
  }, []);

  const skillsets = ["JavaScript/TypeScript: React, Vue.js, Next.js", "Python/Backend: Django, FastAPI, Express", "Big Data: Hadoop, Spark, Pandas, TensorFlow", "Base de données: MySQL, PostgreSQL, MongoDB"];

  return (
    <section className="hero" id="accueil">
      <div className={`hero__content ${isVisible ? "visible" : ""}`}>
        <div className="hero__text fade-in">
          <p className="hero__text-greeting">
            <span>BONJOUR</span>, JE M'APPELLE <span>FLORENT GATTI</span>
          </p>

          <h1 className={`hero__text-title ${!typingComplete ? "typing" : ""}`}>
            {typedText}
            {typingComplete && <span>BIG DATA</span>}
          </h1>

          <p className="hero__text-description">Expert en développement Full-Stack avec une spécialisation en Big Data, je combine maîtrise technique et approche business pour créer des solutions data-driven innovantes. Titulaire d'un Master en Big Data et architectures distribuées, je transforme les données complexes en applications à forte valeur ajoutée.</p>

          <ul className="hero__text-skills">
            {skillsets.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
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
