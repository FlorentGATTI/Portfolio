import React from "react";
import "./Footer.scss";

const Footer = ({ onOpenModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // Increased duration
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smooth deceleration
        const ease = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

        window.scrollTo(0, startPosition + distance * ease(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          targetElement.classList.add("section-highlight");
          setTimeout(() => targetElement.classList.remove("section-highlight"), 1500);
        }
      }

      requestAnimationFrame(animation);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h3 className="footer__brand">Florent GATTI</h3>
          <p className="footer__subtitle">Développeur Full Stack Big Data</p>
          <p className="footer__copyright">© {currentYear} Tous droits réservés</p>
        </div>

        <nav className="footer__nav">
          <a href="#accueil" onClick={handleNavClick}>
            Accueil
          </a>
          <a href="#competences" onClick={handleNavClick}>
            Compétences
          </a>
          <a href="#expertise" onClick={handleNavClick}>
            Expertise
          </a>
          <a href="#portfolio" onClick={handleNavClick}>
            Portfolio
          </a>
          <a href="#formation" onClick={handleNavClick}>
            Formation
          </a>
          <a href="#apropos" onClick={handleNavClick}>
            À propos
          </a>
        </nav>

        <div className="footer__legal">
          <button className="footer__legal-btn" onClick={() => onOpenModal("mentions")}>
            Mentions légales
          </button>
          <button className="footer__legal-btn" onClick={() => onOpenModal("politique")}>
            Politique de confidentialité
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
