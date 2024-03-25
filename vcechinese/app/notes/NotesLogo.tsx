import React from "react";
import * as Icons from "../_assets/Icons";
import GradientSquare from "../_assets/GradientSquare";

const NotesLogo = () => {
  return (
    <div className="flex items-center w-[270px] bg-white h-[75px]">
      <GradientSquare icon={<Icons.NotesIcon />} square={<Icons.Red />} />
      <Text />
    </div>
  );
};

function Text() {
  return (
    <div className="inline-flex flex-col -space-y-[4px] -translate-y-[1px] px-2">
      <p className="text-[22px] font-bold">Notes</p>
      <p className="text-[8px] font-light tracking-[3.5px]">
        帮你轻松搞定最不擅长的一科
      </p>
    </div>
  );
}

export default NotesLogo;
