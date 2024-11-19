import React, { useState, useEffect } from "react";
import SmallHeading from "../UI/SmallHeading";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import em from "../../assets/images/logoem.png";

const AnimatedTitle = ({ text }) => (
  <div className="animated-title">
    <h2 className="main-title">{text}</h2>
    <div className="underline" />
  </div>
);

const QualificationItem = ({ data, isVisible }) => (
  <div className={`qualification-item ${isVisible ? "visible" : ""}`} style={{ animationDelay: `${data.delay}s` }}>
    <div className="year-badge">{data.year}</div>
    <Tile title={data.title} mediumTitle={data.mediumTitle} desc={data.desc} />
  </div>
);

const Qualification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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
    <div className={`qualification-section ${isVisible ? "visible" : ""}`}>
      <SmallHeading text="formation" />
      <AnimatedTitle text="Mon Parcours Académique" />
      <div className="education-container">
        <div className="school-info">
          <img src={em} alt="École Multimédia Logo" onClick={handleSchoolClick} className="school-logo" title="Visiter le site de l'École Multimédia" />
          <div className="button-group">
            {["hire", "cv"].map((btn, index) => (
              <div key={btn} onMouseEnter={() => setHoveredButton(btn)} onMouseLeave={() => setHoveredButton(null)} className="button-wrapper">
                <Button label={btn === "hire" ? "Engagez-moi" : "Télécharger CV"} inverse={btn === "cv"} className={hoveredButton === btn ? "hovered" : ""} />
              </div>
            ))}
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
