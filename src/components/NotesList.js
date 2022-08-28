import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils/index";

function NotesList({ notes, onDelete, onArchive, onActive }) {
  if (notes.length !== 0) {
    return (
      <div className="notes-list">
        {
          notes.map((note) => (
            <NoteItem key={note.id} {...note} date={showFormattedDate(note.createdAt)} onDelete={onDelete} onArchive={onArchive} onActive={onActive} />
          ))
        }
      </div>
    );
  } else {
    return (
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    );
  }
}

export default NotesList;
