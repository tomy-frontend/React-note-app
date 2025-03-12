import React from "react";
import "./Main.css";

const Main = ({ activeNote }) => {
  // activeNoteがfalseの時
  if (!activeNote) {
    return <p className="no-active-note">ノートが選択されていません</p>;
  }

  return (
    <div className="app-main">
      <div className="app-main-edit">
        <input type="text" name="" id="" />
        <textarea id="" placeholder="ノート内容を記入"></textarea>
      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
