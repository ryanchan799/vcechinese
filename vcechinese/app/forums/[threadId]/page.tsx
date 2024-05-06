import { PAGE } from "@/app/_assets/Constants";
import HeaderBar from "@/app/_components/HeaderBar";
import NavigationBar from "@/app/_components/NavigationBar";
import Sidebar from "../Sidebar";
import ThreadPage from "../ThreadPage";
import ThreadsList from "../ThreadsListQuery";
import "../forums.css";
import MobileVersion from "@/app/_components/MobileVersion";

export default function page({ params }: { params: { threadId: string } }) {
  return (
    <div className="scrollbar-none overflow-y-auto h-screen invisible md:visible">
      <MobileVersion />
      <div>
        <div>
          <div className="sticky top-0 z-50">
            <NavigationBar tab={PAGE.FORUMS} />
          </div>
        </div>
        <div>
          <div className="sticky top-0 z-40">
            <HeaderBar
              page={PAGE.FORUMS}
              caption="快快交流探讨起来 迅速解决一切难题"
              rhs={<HeaderRhs />}
              threads={<ThreadsList threadId={params.threadId} />}
            />
          </div>
          <ThreadPage threadId={params.threadId} />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

function HeaderRhs() {
  return (
    <div className="flex flex-grow items-center">
      <div className="grow"></div>
      <div className="flex flex-row items-end gap-2">
        <div className="flex flex-col items-end -space-y-0.5">
          <span className="text-[9px] text-gray-400">加我微信</span>
          <span className="text-[10px]">ryan03austrump</span>
        </div>
        <img src="/images/Wechat.jpg" alt="wechat" className="w-14 h-14" />
      </div>
    </div>
  );
}
