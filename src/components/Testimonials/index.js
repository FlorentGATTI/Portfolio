import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import profil from "../../assets/images/logo.jpg";

import "./style.css";

const Testimonials = (props) => {
  return (
    <div className="container">
      <div data-aos="fade-down">
        <SmallHeading text="Témoignages" />
        <MediumHeading text="A propos de moi" />
      </div>
      <div
        className="flexRow align-center justify-sb"
        style={{ padding: "50px 0" }}
      >
        <div
          data-aos="fade-left"
          className="testimonialImgContainer mlr-10"
        ></div>
        <Card data-aos="zoom-in" className="myCard">
          <div className="flexRow align-center">
            <div className="profileImgContainer">
              <img src={profil} alt="" />
            </div>
            <div className="mlr-10">
              <p className="primaryColor font-16">Florent GATTI</p>
              <p className="textColor font-14 bold-600">Developpeur Web</p>
            </div>
          </div>
          <p className="mtb-10 grey" style={{ padding: "45px 0" }}>
            Je pratique le développement web depuis 2019, période durant
            laquelle j'ai travaillé dans différents environnements à l'école,
            comme en entreprise. Je suis professionnel motivé et curieux qui
            aime résoudre les problemes. Je me passionne pour la convivialité et
            l'expérience utilisateur avec des connaissances techniques pour
            créer des expériences numériques responsives. Mon répertoire
            comprend des languages de programmations et des outils tels que
            ReactJS, Wordpress, Bootstrap, jQuery, la configuration des serveurs
            MySQL et Apache etc ...
          </p>
        </Card>
        <div
          data-aos="fade-right"
          className="testimonialImgContainer mlr-10"
        ></div>
      </div>

      <Card className="m-auto contactCard">
        <p className="text-center font-12 mtb-10">
          Vous avez un projet en tête ?{" "}
          <span className="primaryColor">
            N'hésiter pas à me contacter par mail !
          </span>
        </p>
        <p className="text-center font-25">flogatti@orange.fr</p>
      </Card>
    </div>
  );
};

export default Testimonials;
