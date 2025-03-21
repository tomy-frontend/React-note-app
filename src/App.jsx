import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  ); // 作成したnoteを保存する配列
  const [activeNote, setActiveNote] = useState(false); // noteのアクティブ状態を管理する配列

  // noteが更新される度にlocalstorageに保存する
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // デフォルトで一番上のノートが表示されるようにする
  useEffect(() => {
    setActiveNote(notes[0].id);
  }, []);

  // 新規note作成
  const onAddNote = () => {
    console.log("noteが作成されました。");
    const newNote = {
      id: uuid(), // これだけでランダムなidが発行される
      title: "新しいノート",
      content: "内容を記入",
      modDate: Date.now(),
    };

    setNotes([...notes, newNote]); // スプレッド構文で展開して、新しい要素を追加していく
    console.log(notes);
  };

  // 削除ボタンの処理
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    // filter関数は、このルールに合致したら"残す"、このルールに合致するものだけで新しい配列を作る。という考え方。
    // useStateで管理しているnotes配列をフィルタリング、条件note.id !== idは一致するidを持つnote以外の全てに対して
    // trueを返す。つまり配列の中に残るのは、押されなかったノート以外が配列に残る
    // つまり、クリックされたノート以外で新しい配列を作成して、それをsetNotesで更新する処理。
    setNotes(filterNotes);
  };

  // アクティブになっているノートを取得する関数
  const getActiveNote = () => {
    // notes配列から、note.idがactiveNoteと一致するものだけを１つだけ見つけて、オブジェクトを取り出す
    // returnでそれを返す
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    // 修正された新しいノートの配列を返す
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        console.log("updatedNote", updatedNote);
        return updatedNote;
      } else {
        return note;
      }
    });

    console.log("updatedNotesArray", updatedNotesArray);
    setNotes(updatedNotesArray);
    console.log("notes", notes);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
