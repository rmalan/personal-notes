import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function Body({ addNote, activeNotes, archived }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NotesList notes={activeNotes} />
      <h2>Arsip</h2>
      <NotesList notes={archived} />
    </div>
  );
}

export default Body;
