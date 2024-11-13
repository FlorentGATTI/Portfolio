import React from "react";
import Card from "../UI/Card";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/Button";
import latestProject from "../../assets/projects/Intranet.png";

import "./LatestProjects.scss";

const LatestProjects = (props) => {
  return (
    <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }} data-aos="zoom-in-up">
      <Card className="flexRow flexCol align-center justify-sb">
        <div className="projectPortfolioContainer">
          <SmallHeading text="Portfolios" />
          <MediumHeading style={{ textTransform: "uppercase" }} text="Derniers projets" />
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
            <Button label="Portfolios" />
          </div>
        </div>
        <div className="projectImgContainer">
          <img src={latestProject} alt="" />
        </div>
      </Card>
    </div>
  );
};
export default LatestProjects;
