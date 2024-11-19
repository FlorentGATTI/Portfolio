import React from "react";
import socialIcons from "../../../assets/social-icons";
import "./SocialConnect.scss";

const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-12"> Suivez-moi sur: </span>
      <a className="socialLink" href="https://www.linkedin.com/in/florent-gatti">
        <img src={socialIcons.linkledin} alt="" />
      </a>
      <a className="socialLink" href="https://github.com/FlorentGATTI">
        <img src={socialIcons.github} alt="" />
      </a>
    </div>
  );
};

export default SocialConnect;
