"use client";
import React from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import ReactQuill from "react-quill";
import { renderToString } from "react-dom/server";
import * as Icons from "../_assets/Icons";

export default function RichTextEditor() {
  return (
    <div className="text-editor border-none">
      <TextEditor modules={modules} formats={formats} placeholder="Aa" />
      <EditorToolbar />
    </div>
  );
}

function TextEditor(params: any) {
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
    <div className="text-gray-700 text-opacity-80" id="toolbar">
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

const modules = {
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
};

const formats = [
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
