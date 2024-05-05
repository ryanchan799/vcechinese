import MobileVersion from "../_components/MobileVersion";
import Lhs from "./Lhs";
import Rhs from "./Rhs";

export const metadata = {
  title: "AskAI",
};

export default function page() {
  return (
    <div>
      <MobileVersion />
      <div className="flex-col items-center w-full hidden md:flex">
        <div className="flex flex-row w-[1000px] h-screen -translate-x-[35px]">
          <Lhs />
          <Rhs />
        </div>
      </div>
    </div>
  );
}
