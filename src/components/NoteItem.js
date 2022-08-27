import React from "react";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ title, date, body }) {
  return (
    <div className="note-item">

      <NoteItemContent title={title} date={date} body={body} />

      <div className="note-item__action">
        <button className="note-item__delete-button">Delete</button>
        <button className="note-item__archive-button">Arsipkan</button>
      </div>
    </div>
  );
}

export default NoteItem;
