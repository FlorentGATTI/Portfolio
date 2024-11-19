import React, { useState, useEffect, useMemo } from "react";
import Card from "../UI/Card";
import "./Specializing.scss";

const Specializing = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const skills = useMemo(() => [
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
      category: "database",
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
    }
   ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const component = document.querySelector('.specializing');
    if (component) observer.observe(component);

    return () => {
      if (component) observer.unobserve(component);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setAnimatedSkills([]);  // Reset animated skills when filter changes
      const currentSkills = activeFilter === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeFilter);

      let delay = 0;
      const interval = setInterval(() => {
        if (delay >= currentSkills.length) {
          clearInterval(interval);
          return;
        }
        setAnimatedSkills(prev => [...prev, currentSkills[delay]]);
        delay++;
      }, 100);

      return () => clearInterval(interval);
    }
  }, [activeFilter, isVisible, skills]);

  const filters = [
    { name: 'all', label: 'Tous' },
    { name: 'frontend', label: 'Frontend' },
    { name: 'backend', label: 'Backend' },
    { name: 'data', label: 'Data' },
    { name: 'tools', label: 'Tools' }
  ];

  return (
    <div className="specializing">
      <Card>
        <div className="header">
          <div className="title-container">
            <h3 className="subtitle">Ce que je vous propose</h3>
            <h2 className="title">Compétences</h2>
            <div className="title-decoration"></div>
          </div>
        </div>

        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`filter-btn ${activeFilter === filter.name ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {animatedSkills.map((skill, index) => (
            <div
              key={`${skill.skillName}-${index}`}
              className="skill-card"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.skillName}</h3>
              <p className="skill-desc">{skill.desc}</p>
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
              <div className="skill-value">{skill.value}%</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Specializing;
