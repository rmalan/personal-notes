import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function Body({ addNote, notes, querySearch, onDelete, onArchive, onActive }) {
  const activeNotes = notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));
  const archiveNotes = notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Arsip</h2>
      <NotesList notes={archiveNotes} onDelete={onDelete} onActive={onActive} />
    </div>
  );
}

export default Body;
