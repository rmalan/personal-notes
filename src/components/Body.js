import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/index";

function Body() {
  const notes = getInitialData();
  const activeNotes = notes.filter((note) => note.archived === false);
  const archived = notes.filter((note) => note.archived === true);

  return (
    <div className="note-app__body">
      <NoteInput />
      <h2>Catatan Aktif</h2>
      <NotesList notes={activeNotes} />
      <h2>Arsip</h2>
      <NotesList notes={archived} />
    </div>
  );
}

export default Body;
