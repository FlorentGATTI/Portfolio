import React, { useState, useEffect } from "react";
import resizeMe from "../../assets/images/resizeMe.png";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`testimonials-section ${isVisible ? "visible" : ""}`}>
      <div className="heading-container">
        <h1 className="title">À propos de moi</h1>
      </div>

      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">
            <img src={resizeMe} alt="Florent GATTI" />
          </div>
          <div className="profile-info">
            <h2 className="name">Florent GATTI</h2>
          </div>
        </div>

        <div className="description">
          <p>Passionné par l'innovation technologique et spécialisé en Big Data, j'associe expertise technique et vision stratégique pour transformer des volumes massifs de données en solutions à forte valeur ajoutée.</p>
        </div>

        <div className="expertise-grid">
          {[
            {
              title: "Innovation & Veille",
              description: "Veille active sur l'IA, le Big Data et le Cloud Computing",
              icon: "🔍",
            },
            {
              title: "Architecture",
              description: "Patterns de conception et bonnes pratiques DevOps",
              icon: "🏗️",
            },
            {
              title: "Open Source",
              description: "Contribution et suivi des projets innovants dans l'écosystème data",
              icon: "🌐",
            },
          ].map((item, index) => (
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
        <p>N'hésitez pas à me contacter pour discuter de vos projets</p>
        <a href="mailto:flogatti@orange.fr" className="contact-button">
          flogatti@orange.fr
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
