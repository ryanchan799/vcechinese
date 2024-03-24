import React from "react";

const GradientSquare = (props: { icon: JSX.Element; square: JSX.Element }) => {
  return (
    <div className="inline-flex items-center justify-center p-3">
      <div className="rounded-lg overflow-hidden scale-[96%]">
        {props.square}
      </div>
      <div className="absolute text-white text-xl transition ease-in-out hover:scale-[115%] hover:drop-shadow-2xl duration-200">
        {props.icon}
      </div>
    </div>
  );
};

export default GradientSquare;
