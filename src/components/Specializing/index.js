import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill";
import { colors } from "../../style";

const Specializing = () => {
  const skills = [
    {
      skillName: `HTML/Emailling`,
      desc: `Expérience dans HTML/Emailling`,
      value: 80,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `CSS/Bootstrap`,
      desc: `Expérience dans CSS/Boostrap`,
      value: 70,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `JavaScript/jQuery`,
      desc: `Expérience dans JavaScript/jQuery/ReactJS`,
      value: 65,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `ThreeJS/VueJS/ReactJS, Native`,
      desc: `Expérience dans ThreeJS/VueJS/ReactJS,Native`,
      value: 50,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `Suite Adobe`,
      desc: `Expérience dans Adobe`,
      value: 50,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },

    {
      skillName: `NodeJS/Mysql`,
      desc: `Expérience dans NodeJS/Mysql`,
      value: 60,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `PHP`,
      desc: `Expérience dans PHP/Laravel/Symphony`,
      value: 60,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
    {
      skillName: `Cinema 4d`,
      desc: `Expérience dans Cinema 4d`,
      value: 70,
      textColor: colors.primaryColor,
      pathColor: `#4AA96C`,
    },
  ];

  return (
    <div className="container">
      <Card style={{ padding: "60px" }}>
        <SmallHeading style={{ padding: "0px 0px 20px 0px" }} text="Ce que je vous propose" />
        <MediumHeading style={{ padding: "0px 0px 40px 0px" }} text="Compétences" />
        <div data-aos="fade-up" className="flexRow wrap justify-sb flex-gap">
          {skills.map((skill, index) => (
            <Skill key={index} skillName={skill.skillName} desc={skill.desc} value={skill.value} text-color={colors.primaryColor} pathColor={skill.pathColor} />
          ))}
        </div>
      </Card>
    </div>
  );
};
export default Specializing;
