import React from "react";

const BackgroundTint = (props) => {
  return (
    <div
      className="z-0 top-0 left-0 w-full h-full fixed bg-black bg-opacity-40"
      onClick={props.clickHandler}
    ></div>
  );
};

export default BackgroundTint;
