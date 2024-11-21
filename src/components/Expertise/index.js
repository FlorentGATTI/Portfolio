import React, { useState, useEffect } from "react";
import SectionHeader from "../UI/SectionHeader";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./Expertise.scss";

const expertiseData = [
  {
    title: "Full-Stack Development",
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
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [animatedPercentages, setAnimatedPercentages] = useState(expertiseData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 1 }
    );

    const cards = document.querySelectorAll(".expertise-card");
    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  useEffect(() => {
    visibleCards.forEach((index) => {
      if (animatedPercentages[index] === 0) {
        const interval = setInterval(() => {
          setAnimatedPercentages((prev) => {
            const newPercentages = [...prev];
            if (newPercentages[index] < expertiseData[index].percentage) {
              newPercentages[index] += 1;
            } else {
              clearInterval(interval);
            }
            return newPercentages;
          });
        }, 20);

        return () => clearInterval(interval);
      }
    });
  }, [visibleCards, animatedPercentages]);

  return (
    <div className="expertise-container" id="expertise">
      <div className="expertise-content">
        <SectionHeader subtitle="Expertise" title="Compétences particulières" className="expertise-header" />
        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <Card key={index} className="expertise-card" data-aos="zoom-in" data-aos-delay={index * 100} data-index={index}>
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
