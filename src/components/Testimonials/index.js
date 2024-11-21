import React, { useState, useEffect } from "react";
import SocialConnect from "../UI/SocialConnect";
import SectionHeader from "../UI/SectionHeader";
import logo from "../../assets/images/logo.jpg"; // Ajustez le chemin selon votre structure
import "./Testimonials.scss";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("apropos");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const expertiseCards = [
    {
      title: "Innovation & Veille",
      description: "Veille technologique sur l'IA, le Big Data et le Cloud Computing. Passion pour les technologies émergentes.",
      icon: "🔍",
    },
    {
      title: "Pipeline Data",
      description: "ETL Python avec Pandas, NumPy et SQLAlchemy. Traitement des données massives via Hadoop et Spark.",
      icon: "⚡",
    },
    {
      title: "Architecture & DevOps",
      description: "Patterns de conception et pratiques DevOps. Expérience avec Docker et architectures distribuées.",
      icon: "🏗️",
    },
    {
      title: "Full-Stack Dev",
      description: "React, Vue.js, Django, FastAPI. Création d'interfaces utilisateur intuitives et performantes.",
      icon: "💻",
    },
  ];

  return (
    <div className={`testimonials-section ${isVisible ? "visible" : ""}`} id="apropos">
      <SectionHeader title="À propos de moi" className="testimonials-header" />

      <div className="profile-card">
        <div className={`logo-container ${logoLoaded ? "logo-loaded" : ""}`}>
          <img src={logo} alt="Logo personnel" onLoad={() => setLogoLoaded(true)} width="150" height="150" />
        </div>

        <div className="description">
          <p>
            Développeur Full-Stack spécialisé en Big Data avec plus de 3 ans d'expérience, je combine expertise technique et vision stratégique pour créer des solutions data-driven innovantes. Fort d'une expérience chez Sia Partners et d'un Master en Big Data et architectures distribuées, j'excelle dans la transformation de données massives en applications à forte valeur ajoutée. Ma passion pour
            l'innovation technologique et le développement durable guide mon approche dans la création de solutions performantes et écologiquement responsables.
          </p>
        </div>

        <div className="expertise-grid">
          {expertiseCards.map((item, index) => (
            <div key={index} className="expertise-card">
              <span className="icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <h2>Intéressé par mon profil ?</h2>
        <p>Discutons de vos projets et des solutions data-driven que nous pourrions créer ensemble</p>
        <a href="mailto:flogatti@orange.fr" className="contact-button">
          flogatti@orange.fr
        </a>
        <SocialConnect className="social-connect" />
      </div>
    </div>
  );
};

export default Testimonials;
