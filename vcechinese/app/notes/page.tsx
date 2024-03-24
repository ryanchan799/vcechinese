import { NotesIcon, Green } from "../_assets/Icons";
import GradientSquare from "../_assets/GradientSquare";

export default function Notes() {
  return (
    <main>
      <div className="flex items-center">
        <GradientSquare icon={<NotesIcon />} square={<Green />} />
        <Text />
      </div>
    </main>
  );
}

const Text = () => {
  return (
    <div className="inline-flex flex-col -space-y-[3.5px] -translate-y-[1px]">
      <h1 className="text-[22px] font-bold">Notes</h1>
      <h2 className="text-[8px] font-light tracking-[3.5px]">
        帮你轻松搞定最不擅长的一科
      </h2>
    </div>
  );
};
