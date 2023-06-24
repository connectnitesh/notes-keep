import React, { useState } from "react";
import Header from "./Header";
<<<<<<< HEAD
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./styles.css";
=======
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
>>>>>>> efd236931db00b5982e6884bc28145af6b4ca1ac

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
