import React from "react";

const GradientSquare = ({
  icon,
  square,
}: {
  icon: JSX.Element;
  square: JSX.Element;
}) => {
  return (
    <div className="inline-flex items-center justify-center p-3">
      <div className="rounded-lg overflow-hidden scale-[96%]">{square}</div>
      <div className="absolute text-white text-xl">{icon}</div>
    </div>
  );
};

export default GradientSquare;
