import React, { useState } from "react";
import { colors } from "../../style";

/**
 * @param {*} props
 * @function Button
 * @returns
 */
const Button = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:c4ffa201-a907-4b1a-84a7-ea1c6ee07b9b"
      style={{
        boxSizing: "border-box",
        padding: "13px 28px",
        background: props.inverse ? "transparent" : `linear-gradient(45deg, ${colors.primaryColor}, #00cc1e)`,
        color: props.inverse ? colors.primaryColor : "#fff",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        borderRadius: "99px",
        boxShadow: props.inverse ? "none" : isHovered ? "0 8px 25px rgba(109, 186, 109, 0.3)" : "0 4px 15px rgba(109, 186, 109, 0.2)",
        border: "1px solid",
        borderColor: props.inverse ? colors.primaryColor : isHovered ? "rgba(255, 255, 255, 0.2)" : "transparent",
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: "1px",
        textAlign: "center",
        textDecoration: "none",
        width: "fit-content",
        margin: "0 auto",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {props.label}
      </span>
      <span
        style={{
          display: "inline-block",
          transform: isHovered ? "translateY(3px)" : "translateY(0)",
          transition: "transform 0.3s ease",
        }}
      >
        ↓
      </span>
      <span
        style={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
          transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
          transition: "transform 0.6s ease",
        }}
      />
    </a>
  );
};

export default Button;
