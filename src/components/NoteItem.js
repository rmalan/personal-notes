import React from "react";
import ActiveButton from "./ActiveButton";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ id, title, date, body, archived, onDelete, onArchive, onActive }) {
  return (
    <div className="note-item">

      <NoteItemContent title={title} date={date} body={body} />

      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {
          archived ?
            <ActiveButton id={id} onActive={onActive} />
            :
            <ArchiveButton id={id} onArchive={onArchive} />
        }
      </div>
    </div>
  );
}

export default NoteItem;
