import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill";
import { colors } from "../../style";

const Specializing = (props) => {
  const skills = [
    {
      skillName: `HTML/CSS`,
      desc: `Expérience pratique dans HTML/CSS`,
      value: 80,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `JavaScript`,
      desc: `Expérience pratique dans JavaScript`,
      value: 65,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `ReactJS`,
      desc: `Expérience pratique dans ReactJS`,
      value: 70,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `jQuery`,
      desc: `Expérience pratique dans jQuery`,
      value: 55,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `Bootstrap`,
      desc: `Expérience pratique dans Boostrap`,
      value: 70,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `NodeJS`,
      desc: `Expérience pratique dans NodeJS`,
      value: 65,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `PHP`,
      desc: `Expérience pratique dans PHP`,
      value: 60,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `Mysql`,
      desc: `Expérience pratique dans Mysql`,
      value: 65,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
  ];

  return (
    <div className="container">
      <Card style={{ padding: "50px" }}>
        <SmallHeading text="Ce que je fais" />
        <MediumHeading text="Spécialisation" />
        <div
          data-aos="fade-up"
          className="flexRow wrap justify-sb"
          style={{ padding: "30px" }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              text-color={colors.primaryColors}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};
export default Specializing;
