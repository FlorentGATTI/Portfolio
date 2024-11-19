import React, { useState, useEffect } from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./Expertise.scss";

const expertiseData = [
  {
    title: "Full-Stack Development",
    percentage: 80,
    description: "Expertise en JavaScript/Node.js et Python/Django pour des solutions web complètes. Stack technique: React, Vue.js, Next.js, Express, FastAPI",
    icon: "💻",
    color: "#00b31a"
  },
  {
    title: "Big Data & Analytics",
    percentage: 75,
    description: "Maîtrise de Hadoop, Spark, Pandas et outils d'analyse pour le traitement de données massives",
    icon: "📊",
    color: "#00b31a"
  },
  {
    title: "Machine Learning",
    percentage: 70,
    description: "Développement avec TensorFlow, Keras et scikit-learn pour l'analyse prédictive et le deep learning",
    icon: "🧠",
    color: "#00b31a"
  },
  {
    title: "Architecture Cloud",
    percentage: 70,
    description: "Conception et déploiement d'architectures distribuées pour applications scalables",
    icon: "☁️",
    color: "#00b31a"
  }
];

const Expertise = () => {
  const [isInView, setIsInView] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState(
    expertiseData.map(() => 0)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const expertiseElement = document.querySelector('.expertise-container');
    if (expertiseElement) {
      observer.observe(expertiseElement);
    }

    return () => {
      if (expertiseElement) {
        observer.unobserve(expertiseElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const intervals = expertiseData.map((data, index) => {
        return setInterval(() => {
          setAnimatedPercentages(prev => {
            const newPercentages = [...prev];
            if (newPercentages[index] < data.percentage) {
              newPercentages[index] += 1;
            }
            return newPercentages;
          });
        }, 20);
      });

      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [isInView]);

  return (
    <div className="expertise-container">
      <div className="expertise-content">
        <div className="expertise-header" data-aos="fade-up">
          <SmallHeading text="Expertise" />
          <MediumHeading text="Compétences particulières" />
        </div>

        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <Card
              key={index}
              className="expertise-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
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
