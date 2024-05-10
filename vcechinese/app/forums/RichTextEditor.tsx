"use client";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import ReactQuill from "react-quill";
import AutoLinks from "quill-auto-links";
import { renderToString } from "react-dom/server";
import * as Icons from "../_assets/Icons";
import { db, storage } from "@/firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { COLORS } from "../_assets/Constants";
import { hexToRgba } from "../_assets/Utility";
import { SpinnerLoader } from "./SpinningLoader";

export default function RichTextEditor(props: {
  toolbarId: string;
  isNewThreadPost: boolean;
  title?: string;
  topic?: string;
  threadId?: string;
  setOpen?: (arg0: boolean) => void;
  setLoading?: (arg0: boolean) => void;
}) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const title = props.title == null ? "" : props.title;
  const topic = props.topic == null ? "" : props.topic;

  function handleChange(
    content: any,
    delta: any,
    source: any,
    editor: { getContents: () => React.SetStateAction<string> }
  ) {
    setValue(editor.getContents());
  }

  const empty = '{"ops":[{"insert":"\\n"}]}';
  const disabled =
    (props.isNewThreadPost &&
      (title === "" ||
        topic === "" ||
        value === "" ||
        JSON.stringify(value) === empty)) ||
    (!props.isNewThreadPost &&
      (value === "" || JSON.stringify(value) === empty));

  return (
    <div className="border-none">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@350;700&display=swap"
        rel="stylesheet"
      />

      <TextEditor
        modules={getModules(props.toolbarId)}
        formats={toolbarFormats}
        placeholder={"Aa"}
        value={value}
        onChange={handleChange}
        className="min-h-[200px] w-[650px] border-[1px] border-black border-opacity-10 rounded-t-lg"
      />
      <EditorToolbar toolbarId={props.toolbarId} />
      <div className="flex flex-row gap-4 items-start">
        <button
          className={`flex flex-row w-[65px] my-6 items-center justify-center rounded-md ${
            disabled ? "cursor-not-allowed" : ""
          }`}
          style={{
            color: COLORS.BRIGHT_BLUE,
            borderColor: hexToRgba(COLORS.BRIGHT_BLUE, 0.9),
            borderWidth: "1px",
          }}
          disabled={disabled}
          onClick={() =>
            props.isNewThreadPost
              ? postNewThread(
                  title,
                  topic,
                  value,
                  props.setOpen!,
                  props.setLoading!
                )
              : postNewReply(props.threadId ?? "", value, setLoading)
          }
        >
          <div className="flex flex-row items-center text-[11px] gap-2 py-[3px] -translate-x-[1px]">
            <Icons.SendIcon className="w-[9.5px] h-[9.5px]" />
            <span>{props.isNewThreadPost ? "Post" : "Reply"}</span>
          </div>
        </button>
        {loading ? (
          <div className="translate-y-[19px]">
            <SpinnerLoader />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function TextEditor(params: any) {
  return <ReactQuillConfig {...params} />;
}

const ReactQuillConfig = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    function QuillJS({ ...props }: React.ComponentProps<typeof ReactQuill>) {
      const icons = RQ.Quill.import("ui/icons");
      icons["undo"] = renderToString(
        <Icons.UndoIcon className="scale-[90%]" />
      );
      icons["redo"] = renderToString(
        <Icons.RedoIcon className="scale-[90%]" />
      );
      icons["header"]["1"] = renderToString(<Icons.H1Icon />);
      icons["header"]["1"] = renderToString(<Icons.H1Icon />);
      icons["header"]["2"] = renderToString(<Icons.H2Icon />);
      icons["bold"] = renderToString(<Icons.BoldIcon />);
      icons["italic"] = renderToString(<Icons.ItalicsIcon />);
      icons["underline"] = renderToString(<Icons.UnderlineIcon />);
      icons["strike"] = renderToString(<Icons.StrikethroughIcon />);
      icons["list"]["bullet"] = renderToString(<Icons.BulletListIcon />);
      icons["list"]["ordered"] = renderToString(<Icons.NumberedListIcon />);
      icons["script"]["super"] = renderToString(<Icons.SuperscriptIcon />);
      icons["script"]["sub"] = renderToString(<Icons.SubscriptIcon />);
      icons["code-block"] = renderToString(<Icons.CodeblockIcon />);
      icons["blockquote"] = renderToString(<Icons.QuoteIcon />);
      icons["link"] = renderToString(<Icons.LinkIcon />);
      icons["align"][""] = renderToString(<Icons.LeftAlignIcon />);
      icons["align"]["center"] = renderToString(<Icons.CenterAlignIcon />);
      icons["align"]["right"] = renderToString(<Icons.RightAlignIcon />);
      icons["align"]["justify"] = renderToString(<Icons.JustifyAlignIcon />);

      const FontAttributor = RQ.Quill.import("attributors/class/font");
      FontAttributor.whitelist = ["inter"];
      RQ.Quill.register(FontAttributor, true);

      RQ.Quill.register("modules/autoLinks", AutoLinks);

      return <RQ {...props} />;
    }

    return QuillJS;
  },
  {
    ssr: false,
  }
);

export function EditorToolbar(props: { toolbarId: string }) {
  return (
    <div
      className="text-gray-700 text-opacity-80 w-[650px]"
      id={props.toolbarId}
    >
      <span className="ql-formats">
        <button className="ql-undo" />
        <button className="ql-redo" />
      </span>
      <span className="ql-formats">
        <button className="ql-header" value={1} />
        <button className="ql-header" value={2} />
      </span>
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
      </span>
      <span className="ql-formats">
        <button className="ql-script" value="super" />
        <button className="ql-script" value="sub" />
        <button className="ql-blockquote" />
      </span>
      <span className="ql-formats">
        <button className="ql-align" value="" />
        <button className="ql-align" value="center" />
        <button className="ql-align" value="right" />
        <button className="ql-align" value="justify" />
      </span>
      <span className="ql-formats">
        <button className="ql-link" />
        <button className="ql-code-block" />
      </span>
    </div>
  );
}

export const toolbarFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

export function getModules(toolbarId: string) {
  return {
    toolbar: {
      container: `#${toolbarId}`,
      handlers: {
        undo: undoChange,
        redo: redoChange,
      },
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    autoLinks: true,
  };
}

function undoChange(this: { quill: any; undo: () => void; redo: () => void }) {
  this.quill.history.undo();
}

function redoChange(this: { quill: any; undo: () => void; redo: () => void }) {
  this.quill.history.redo();
}

async function postNewThread(
  title: string,
  topic: string,
  value: string,
  setOpen: (arg0: boolean) => void,
  setLoading: (arg0: boolean) => void
) {
  try {
    setLoading(true);
    addImagesToStorage(title, value).then(async (val) => {
      const data = {
        title: title,
        topic: topic,
        value: JSON.stringify(val),
        poster: "Anonymous",
        originalThreadDate: Timestamp.now(),
        latestDate: Timestamp.now(),
        replies: [],
        interactors: [],
        admin: false,
        isPinned: false,
      };

      await addDoc(collection(db, "threads"), data);

      console.log("Thread posted successfully");

      setLoading(false);
      setOpen(false);

      window.location.reload();
    });
  } catch (error) {
    setLoading(false);
    console.error("Failed to post thread:", error);
  }
}

async function postNewReply(
  threadId: string,
  value: string,
  setLoading: (arg0: boolean) => void
) {
  try {
    setLoading(true);
    addImagesToStorage("Reply", value).then(async (val) => {
      const data = {
        replies: arrayUnion({
          value: JSON.stringify(val),
          poster: "Anonymous",
          date: Timestamp.now(),
          admin: false,
        }),
        latestDate: Timestamp.now(),
      };

      await updateDoc(doc(db, "threads", threadId), data);

      console.log("Reply posted successfully");

      setLoading(false);
      window.location.reload();
    });
  } catch (error) {
    setLoading(false);
    console.error("Failed to post reply:", error);
  }
}

async function addImagesToStorage(title: string, val: any) {
  const value = val;
  if (value.length != 0) {
    value.ops.map(async (block: any, index: number) => {
      if (block.insert.image != null) {
        const storageRef = ref(
          storage,
          title + index.toString() + Timestamp.now().toString()
        );

        uploadString(storageRef, block.insert.image, "data_url").then(
          (snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
              block.insert.image = downloadURL;
              console.log("File available at", downloadURL);
              return block;
            });
          }
        );
      }
    });
  }
  return value;
}
