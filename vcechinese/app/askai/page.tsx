import Lhs from "./Lhs";
import Rhs from "./Rhs";

export const metadata = {
  title: "AskAI",
};

export default function page() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row w-[1000px] h-screen">
        <Lhs />
        <Rhs />
        {/* <TogetherApi /> */}
      </div>
    </div>
  );
}
