"use client";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import ReactQuill from "react-quill";
import AutoLinks from "quill-auto-links";
import { renderToString } from "react-dom/server";
import * as Icons from "../_assets/Icons";
import { db, storage } from "@/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { loggedInCurrentUser } from "./HeaderRhs";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";

export default function RichTextEditor() {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [value, setValue] = useState("");

  function handleChange(
    content: any,
    delta: any,
    source: any,
    editor: { getContents: () => React.SetStateAction<string> }
  ) {
    setValue(editor.getContents());
  }

  return (
    <div className="text-editor border-none">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@350;700&display=swap"
        rel="stylesheet"
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(event) => setTopic(event.target.value)}
      />
      <TextEditor
        modules={modules}
        formats={formats}
        placeholder={"Aa"}
        value={value}
        onChange={handleChange}
        className="min-h-[200px] w-[650px] border-[1px] border-black border-opacity-10 rounded-t-lg"
      />
      <EditorToolbar />
      <button
        className="px-3 py-1 my-2 bg-green-500 text-white font-semibold text-sm rounded-md"
        onClick={() => postNewThread(title, topic, value)}
      >
        Post
      </button>
    </div>
  );
}

async function postNewThread(title: string, topic: string, value: string) {
  try {
    addImagesToStorage(title, value).then(async (val) => {
      const data = {
        title: title,
        topic: topic,
        value: JSON.stringify(val),
        poster: loggedInCurrentUser?.displayName,
        date: Timestamp.now(),
        replies: [],
        interactors: [loggedInCurrentUser?.photoURL],
      };

      await addDoc(collection(db, "threads"), data);

      console.log(val);
      console.log("Thread posted successfully");
    });
  } catch (error) {
    console.error("Failed to post thread:", error);
  }
}

async function addImagesToStorage(title: string, val: string) {
  var value = val;
  if (value.length != 0) {
    value.ops.map(async (block, index: number) => {
      if (block.insert.image != null) {
        const storageRef = ref(
          storage,
          loggedInCurrentUser!.displayName +
            title +
            index.toString() +
            Timestamp.now().toString()
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

function EditorToolbar() {
  return (
    <div className="text-gray-700 text-opacity-80 w-[650px]" id="toolbar">
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

export const modules = {
  toolbar: {
    container: "#toolbar",
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

export const formats = [
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

function undoChange(this: { quill: any; undo: () => void; redo: () => void }) {
  this.quill.history.undo();
}

function redoChange(this: { quill: any; undo: () => void; redo: () => void }) {
  this.quill.history.redo();
}
