import React from "react";

const GradientSquare = (props: { icon: JSX.Element; square: JSX.Element }) => {
  return (
    <div className="relative flex items-center justify-center p-3">
      <div className="absolute inset-0 rounded-lg overflow-hidden scale-[96%]">
        {props.square}
      </div>
      <div className="relative text-white text-xl transition ease-in-out hover:scale-[115%] hover:drop-shadow-2xl duration-200">
        {props.icon}
      </div>
    </div>
  );
};

export default GradientSquare;
