import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils/index";

function NotesList({ notes }) {
  if (notes.length !== 0) {
    return (
      <div className="notes-list">
        {
          notes.map((note) => (
            <NoteItem {...note} date={showFormattedDate(note.createdAt)} />
          ))
        }
      </div>
    );
  } else {
    return (
      <p class="notes-list__empty-message">Tidak ada catatan</p>
    );
  }
}

export default NotesList;
