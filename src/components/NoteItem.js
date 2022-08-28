import React from "react";
import DeleteButton from "./DeleteButton";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ id, title, date, body, onDelete }) {
  return (
    <div className="note-item">

      <NoteItemContent title={title} date={date} body={body} />

      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <button className="note-item__archive-button">Arsipkan</button>
      </div>
    </div>
  );
}

export default NoteItem;
