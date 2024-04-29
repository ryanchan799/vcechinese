import { FORUMS_TOOLBAR_NEW_THREAD } from "../_assets/Constants";
import { XMarkIcon } from "@heroicons/react/20/solid";
import RichTextEditor from "./RichTextEditor";

export default function NewThreadOverlay(props: {
  setOpen: (value: boolean) => void;
}) {
  return (
    <div className="fixed top-0 left-0">
      hello
      {/* <button onClick={() => props.setOpen(false)}>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <RichTextEditor toolbarId={FORUMS_TOOLBAR_NEW_THREAD} /> */}
    </div>
  );
}
