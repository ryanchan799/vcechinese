"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TextEditorToolbar, { modules, formats } from "./TextEditorToolbar";

export const TextEditor = () => {
  const [value, setValue] = useState("");
  return (
    <div className="text-editor border-none">
      <TextEditorToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="Aa"
      />
    </div>
  );
};

// export default function TextEditor() {
//   const [value, setValue] = useState("");

//   const modules = {
//     toolbar: [
//       ["bold", "italic", "underline", "strike", { header: 1 }, { header: 2 }],
//       [{ align: [] }, "blockquote", "code-block"],
//       [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
//       [{ script: "sub" }, { script: "super" }], // superscript/subscript
//       [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//       ["link", "image", "video", "formula"],
//       ["clean"],
//     ],
//   };

//   return (
//     <div>
//       <ReactQuill
//         theme="snow"
//         value={value}
//         onChange={setValue}
//         modules={modules}
//         // className="w-[711px]"
//         placeholder="Aa"
//       />
//     </div>
//   );
// }
