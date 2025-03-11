import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState([]); // 作成したnoteを保存する配列

  // 新規note作成
  const onAddNote = () => {
    console.log("noteが作成されました。");
    const newNote = {
      id: 1,
      title: "新しいノート",
      content:
        "「吾輩は今日も縁側で昼寝をしながら、主人の苦々しい顔で論文を書いている様子を冷ややかに観察していた。書生は相変わらず無骨な様子で庭を掃いている。どうやら主人は近頃珍しく研究に没頭しているようだが、いかにも自惚れが強く見苦しい。その癖何も新しいことは書いていない。まったく人間というものは不可思議な生き物である。」",
      modDate: Date.now(),
    };

    setNotes([...notes, newNote]); // スプレッド構文で展開して、新しい要素を追加していく
    console.log(notes);
  };

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
