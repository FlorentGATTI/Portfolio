import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import SectionHeader from "../UI/SectionHeader";
import "./Specializing.scss";

const Specializing = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [animatedValues, setAnimatedValues] = useState([]);

  const skills = [
    {
      skillName: "Frontend Core",
      desc: "HTML5, CSS3, JavaScript, TypeScript",
      value: 85,
      category: "frontend",
      icon: "🌐",
    },
    {
      skillName: "Frontend Frameworks",
      desc: "React, Vue.js, Next.js",
      value: 75,
      category: "frontend",
      icon: "⚛️",
    },
    {
      skillName: "Backend Core",
      desc: "Python, PHP, Node.js",
      value: 75,
      category: "backend",
      icon: "⚙️",
    },
    {
      skillName: "Backend Frameworks",
      desc: "Django, Express, FastAPI, Laravel",
      value: 70,
      category: "backend",
      icon: "🔧",
    },
    {
      skillName: "Big Data Technologies",
      desc: "Hadoop, Spark, Data Engineering",
      value: 70,
      category: "data",
      icon: "📊",
    },
    {
      skillName: "Data Analysis",
      desc: "Pandas, NumPy, Matplotlib, Scikit-learn",
      value: 70,
      category: "data",
      icon: "📈",
    },
    {
      skillName: "Machine Learning",
      desc: "TensorFlow, Keras, Deep Learning",
      value: 65,
      category: "data",
      icon: "🧠",
    },
    {
      skillName: "Databases",
      desc: "MySQL, PostgreSQL, MongoDB",
      value: 75,
      category: "backend",
      icon: "🗄️",
    },
    {
      skillName: "DevOps & Tools",
      desc: "Git, Docker, Cloud Computing",
      value: 70,
      category: "tools",
      icon: "🛠️",
    },
    {
      skillName: "Design Tools",
      desc: "Suite Adobe, Figma",
      value: 65,
      category: "tools",
      icon: "🎨",
    },
  ];

  const filters = [
    { name: "all", label: "Tous" },
    { name: "frontend", label: "Frontend" },
    { name: "backend", label: "Backend" },
    { name: "data", label: "Data" },
    { name: "tools", label: "Tools" },
  ];

  const visibleSkills = activeFilter === "all" ? skills : skills.filter((skill) => skill.category === activeFilter);

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
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".skill-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [activeFilter]);

  useEffect(() => {
    setAnimatedValues(new Array(visibleSkills.length).fill(0));
    setVisibleCards(new Set());
  }, [activeFilter, visibleSkills.length]);

  useEffect(() => {
    visibleCards.forEach((index) => {
      if (animatedValues[index] === 0) {
        const interval = setInterval(() => {
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            if (newValues[index] < visibleSkills[index].value) {
              newValues[index] += 1;
            } else {
              clearInterval(interval);
            }
            return newValues;
          });
        }, 20);

        return () => clearInterval(interval);
      }
    });
  }, [visibleCards, animatedValues, visibleSkills]);

  return (
    <div className="specializing" id="competences">
      <Card>
        <SectionHeader subtitle="Ce que je vous propose" title="Compétences" />

        <div className="filters">
          {filters.map((filter) => (
            <button key={filter.name} onClick={() => setActiveFilter(filter.name)} className={`filter-btn ${activeFilter === filter.name ? "active" : ""}`}>
              {filter.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {visibleSkills.map((skill, index) => (
            <div key={`${skill.skillName}-${index}`} className="skill-card" data-index={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.skillName}</h3>
              <p className="skill-desc">{skill.desc}</p>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${animatedValues[index] || 0}%` }} />
              </div>
              <div className="skill-value">{animatedValues[index] || 0}%</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Specializing;
