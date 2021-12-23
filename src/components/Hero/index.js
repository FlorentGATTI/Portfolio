import React from "react";
import me from "../../assets/images/resizeMe.png";
import Button from "../UI/Button";
import "./style.css";

/**
 * @author
 * @function Hero
 */

const Hero = (props) => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="fade-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Bonjour,</span> Je m'appelle Florent
            GATTI
          </p>
          <h1 className="textColor ls-1 mtb-10">
            Je suis Développeur Web
          </h1>
          <p className="font-12 grey mtb-10">
          Développeur Web Junior Full Stack utilisant JS et PHP
          </p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button label="Engagez-moi" />
            </div>
            <div className="mlr-10">
              <Button label="Télécharger CV" inverse={true} />
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="meRightImgContainer">
            <img src={me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
