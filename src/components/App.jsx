import React from "react";
import EmojiCard from "./EmojiCard";
import emojipedia from "../emojipedia";

function CreateCard(listItem) {
  return (
    <EmojiCard
      key={listItem.id}
      emoji={listItem.emoji}
      name={listItem.name}
      meaning={listItem.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
