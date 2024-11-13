import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../../style";
import me from "../../assets/images/Florentpro-sansfond.png";
import SocialConnect from "../UI/SocialConnect";
import "./Expertise.scss";

const percentage = 70;

const Expertise = (props) => {
  return (
    <div className="container" style={{ padding: "50px 0px 20px 0px" }}>
      <div data-aos="fade-right" className="rightImgMeContainer">
        <img style={{ width: "250px", paddingTop: "100px" }} src={me} alt="" />
        <SocialConnect style={{ position: "absolute", bottom: "-40px" }} />
      </div>
      <div>
        <SmallHeading text="Expertise" />
        <MediumHeading text="Compétences particulières" />
      </div>
      <div className="cardmobile">
        <Card
          style={{
            padding: "30px",
            width: "350px",
            margin: "100px 500px",
            position: "relative",
            zIndex: 1,
          }}
          data-aos="flip-up"
        >
          <div className="flexRow align-center">
            <div style={{ width: "80px", height: "80px" }}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: colors.primaryColor,
                  pathColor: colors.primaryColor,
                })}
              />
            </div>
            <h2 className="textColor mlr-10" style={{ margin: "30px 10px" }}>
              Spécialisations
            </h2>
          </div>
          <p className="grey mtb-10 font-12">Je suis Full-Stack grace aux JS/Node.js et PHP/MySQL.</p>
        </Card>
      </div>
    </div>
  );
};

export default Expertise;
