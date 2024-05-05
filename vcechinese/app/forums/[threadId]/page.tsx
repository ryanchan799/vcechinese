import { PAGE } from "@/app/_assets/Constants";
import HeaderBar from "@/app/_components/HeaderBar";
import NavigationBar from "@/app/_components/NavigationBar";
import { UserAuthContextProvider } from "../authentication/UserAuthContext";
import { Rhs } from "../HeaderRhs";
import Sidebar from "../Sidebar";
import ThreadPage from "../ThreadPage";
import ThreadsList from "../ThreadsListQuery";
import "../forums.css";

export default function page({ params }: { params: { threadId: string } }) {
  return (
    <UserAuthContextProvider>
      <Forums threadId={params.threadId} />
    </UserAuthContextProvider>
  );
}

function Forums(props: { threadId: string }) {
  return (
    <div className="scrollbar-none overflow-y-auto h-screen">
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
              rhs={<Rhs />}
              threads={<ThreadsList threadId={props.threadId} />}
            />
          </div>
          <ThreadPage threadId={props.threadId} />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
