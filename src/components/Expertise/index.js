import React, { useState, useEffect } from "react";
import SectionHeader from "../UI/SectionHeader";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./Expertise.scss";

const expertiseData = [
  {
    title: "Full Stack Development",
    percentage: 80,
    description: "Expertise en JavaScript/Node.js et Python/Django pour des solutions web complètes. Stack technique: React, Vue.js, Next.js, Express, FastAPI",
    icon: "💻",
    color: "#00b31a",
  },
  {
    title: "Big Data & Analytics",
    percentage: 75,
    description: "Maîtrise de Hadoop, Spark, Pandas et outils d'analyse pour le traitement de données massives",
    icon: "📊",
    color: "#00b31a",
  },
  {
    title: "Machine Learning",
    percentage: 70,
    description: "Développement avec TensorFlow, Keras et scikit-learn pour l'analyse prédictive et le deep learning",
    icon: "🧠",
    color: "#00b31a",
  },
  {
    title: "Architecture Cloud",
    percentage: 70,
    description: "Conception et déploiement d'architectures distribuées pour applications scalables",
    icon: "☁️",
    color: "#00b31a",
  },
];

const Expertise = () => {
  const [animatedPercentages, setAnimatedPercentages] = useState(() => expertiseData.map(() => 0));
  const [animatedCards] = useState(() => new Set());
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !cardsVisible) {
          setCardsVisible(true);
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            if (!animatedCards.has(cardIndex)) {
              animatedCards.add(cardIndex);
              let count = 0;
              const interval = setInterval(() => {
                if (count < expertiseData[cardIndex].percentage) {
                  count++;
                  setAnimatedPercentages((prev) => {
                    const newPercentages = [...prev];
                    newPercentages[cardIndex] = count;
                    return newPercentages;
                  });
                } else {
                  clearInterval(interval);
                }
              }, 20);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const cards = document.querySelectorAll(".expertise-card");
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [animatedCards, cardsVisible]);

  return (
    <div className="expertise-container" id="expertise">
      <div className="expertise-content">
        <SectionHeader subtitle="Expertise" title="Compétences particulières" className="expertise-header" />
        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <Card key={index} className={`expertise-card ${cardsVisible ? "visible" : ""}`} data-index={index}>
              {" "}
              <div className="card-content">
                <div className="progress-container">
                  <CircularProgressbar
                    value={animatedPercentages[index]}
                    text={`${animatedPercentages[index]}%`}
                    styles={buildStyles({
                      textColor: item.color,
                      pathColor: item.color,
                      trailColor: "rgba(0,211,31,0.1)",
                      pathTransition: "stroke-dashoffset 0.5s ease",
                      textSize: "22px",
                      fontWeight: 600,
                    })}
                  />
                </div>
                <div className="card-header">
                  <span className="card-icon">{item.icon}</span>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <p className="card-description">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
