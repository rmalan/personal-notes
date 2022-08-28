import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function Body({ addNote, activeNotes, archived, onDelete, onArchive, onActive }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Arsip</h2>
      <NotesList notes={archived} onDelete={onDelete} onActive={onActive} />
    </div>
  );
}

export default Body;
