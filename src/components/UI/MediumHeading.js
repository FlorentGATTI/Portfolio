import React from "react";

const MediumHeading = ({ text, style }) => {
  return (
    <p style={style} className="text-center font-25 capitalize ls-1 textColor bold-600 ">
      {text}
    </p>
  );
};

export default MediumHeading;
