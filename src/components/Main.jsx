import React from "react";
import "./Main.css";

const Main = ({ activeNote, onUpdateNote }) => {
  // 入力された情報で更新する
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value, // 動的key...引数で取ってきた値がkeyとなる。titleを第一引数にすると、下記のようになる
      // title: value
      modDate: Date.now(),
    });
  };

  // activeNoteがfalseの時
  if (!activeNote) {
    return <p className="no-active-note">ノートが選択されていません</p>;
  }

  return (
    <div className="app-main">
      <div className="app-main-edit">
        <input
          type="text"
          name=""
          id=""
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id=""
          placeholder="ノート内容を記入"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
