import React from "react";
import { colors } from "../../style";

/**
 *
 * @param {*} props
 * @function Button
 * @returns
 */

const Button = (props) => {
  return (
    <a
      href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:55263c1b-a3e0-42d6-93bd-245267c1a547"
      style={{
        boxSizing: "border-box",
        padding: "13px 15px",
        background: props.inverse ? "transparent" : colors.primaryColor,
        color: props.inverse ? colors.primaryColor : "#fff",
        display: "inline-block",
        borderRadius: "20px",
        boxShadow: props.inverse ? "none" : "#6dba6d 0px 0px 10px 0px",
        border: "1px solid",
        borderColor: props.inverse ? colors.primaryColor : "transparent",
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: "1px",
      }}
    >
      {props.label}
    </a>
  );
};

export default Button;
