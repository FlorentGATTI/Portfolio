import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import em from "../../assets/images/logoem.png";

import "./Qualification.scss";
const Qualification = () => {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <SmallHeading text="education" />
      <MediumHeading text={"Mes Qualifications"} />
      <div className="flexRow flexCol align-center justify-sb" style={{ margin: "50px 0" }}>
        <div data-aos="fade-up-right">
          <img src={em} alt="" style={{ width: "400px" }} />
          <div
            style={{
              background: "#fff",
              padding: "10px 10px",
              borderRaduis: "20px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="mlr-10">
              <Button label="Engagez-moi" />
            </div>
            <div className="mlr-10">
              <Button label="Télécharger CV" inverse={true} />
            </div>
          </div>
        </div>
        <div>
          <Tile title="GARAC, Argenteuil" mediumTitle="Bac pro Carrosserie" desc="Construction des carrosseries" />
          <Tile title="Ecole Multimédia, Paris" mediumTitle="Bachelor Developpeur Web" desc="Certification Front-end" />
          <Tile title="Ecole Multimédia, Paris" mediumTitle="Master Developpeur Multimedia" desc="Certification Full-Stack" />
        </div>
      </div>
    </div>
  );
};

export default Qualification;
