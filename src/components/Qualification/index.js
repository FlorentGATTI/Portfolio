import React, { useState, useEffect, useRef } from "react";
import SectionHeader from "../UI/SectionHeader";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import em from "../../assets/images/logoem.png";

const QualificationItem = ({ data, isVisible }) => (
  <div className={`qualification-item ${isVisible ? "visible" : ""}`} style={{ animationDelay: `${data.delay}s` }}>
    <div className="year-badge">{data.year}</div>
    <Tile title={data.title} mediumTitle={data.mediumTitle} desc={data.desc} />
  </div>
);

const Qualification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const sectionRef = useRef(null);
  const schoolInfoRef = useRef(null);

  // Effet pour l'animation initiale
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;

      // Point où l'effet commence (quand le haut de la section atteint le bas de la fenêtre)
      const startPoint = -sectionHeight;
      // Point où l'effet se termine (quand le bas de la section atteint le haut de la fenêtre)
      const endPoint = windowHeight;

      // Calcul plus précis avec des limites
      if (sectionRect.top <= windowHeight && sectionRect.bottom >= 0) {
        const totalDistance = endPoint - startPoint;
        const currentPosition = windowHeight - sectionRect.top;
        const scrollProgress = currentPosition / totalDistance;

        // Limiter la progression entre 0 et 1
        const boundedProgress = Math.min(Math.max(scrollProgress, 0), 1);

        // Calcul de la position avec une courbe d'accélération
        const easedProgress = easeInOutQuad(boundedProgress);
        const maxScroll = 695; // Distance maximale de défilement

        setScrollProgress(easedProgress * maxScroll);
      } else if (sectionRect.top > windowHeight) {
        // Reset quand la section est en dessous de la fenêtre
        setScrollProgress(0);
      } else if (sectionRect.bottom < 0) {
        // Maintenir la position finale quand la section est au-dessus
        setScrollProgress(500);
      }
    };

    // Fonction d'accélération pour un mouvement plus naturel
    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const qualifications = [
    {
      year: "2024",
      title: "École Multimédia, Paris",
      mediumTitle: "Master 2 Développeur Full Stack BIG DATA",
      desc: "Spécialisation Big Data, Cloud Computing, Architectures distribuées",
      delay: 0.2,
    },
    {
      year: "2023",
      title: "École Multimédia, Paris",
      mediumTitle: "Master 1 Développeur Multimédia",
      desc: "Certification Full-Stack, Architecture backend, API REST",
      delay: 0.4,
    },
    {
      year: "2022",
      title: "École Multimédia, Paris",
      mediumTitle: "Bachelor Développeur Web",
      desc: "Développement web moderne, UI/UX, Méthodologies agiles",
      delay: 0.6,
    },
  ];

  const handleSchoolClick = () => {
    window.open("https://www.ecole-multimedia.com/", "_blank");
  };

  return (
    <div className={`qualification-section ${isVisible ? "visible" : ""}`} id="formation" ref={sectionRef}>
      <SectionHeader subtitle="Formation" title="Mon Parcours Académique" className="qualification-header" />
      <div className="education-container">
        <div
          ref={schoolInfoRef}
          className={`school-info ${isMobile ? "mobile" : ""}`}
          style={{
            transform: !isMobile ? `translateY(${scrollProgress}px)` : "none",
          }}
        >
          <img src={em} alt="École Multimédia Logo" onClick={handleSchoolClick} className="school-logo" title="Visiter le site de l'École Multimédia" />
          <div className="button-container">
            <div onMouseEnter={() => setHoveredButton(true)} onMouseLeave={() => setHoveredButton(false)} className="button-wrapper">
              <Button label="Télécharger CV" inverse={true} className={hoveredButton ? "hovered" : ""} />
            </div>
          </div>
        </div>
        <div className="qualifications-timeline">
          {qualifications.map((qual, index) => (
            <QualificationItem key={index} data={qual} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
