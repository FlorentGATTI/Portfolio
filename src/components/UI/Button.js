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
      href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:536f7d9c-7657-4c04-a133-d1b56256b64f"
      style={{
        boxSizing: "border-box",
        padding: "10px 20px",
        background: props.inverse ? "transparent" : colors.primaryColor,
        color: props.inverse ? colors.primaryColor : "#fff",
        display: "inline-block",
        borderRadius: "20px",
        boxShadow: props.inverse ? "none" : "#6dba6d 0px 0px 10px 0px",
        border: "1px solid",
        borderColor: props.inverse ? colors.primaryColors : "transparent",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: "1px",
      }}
    >
      {props.label}
    </a>
  );
};

export default Button;
