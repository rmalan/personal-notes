import React from "react";

class NoteSearch extends React.Component {
  render() {
    return (
      <div className="note-search">
        <input type="text" placeholder="Cari catatan ..." value="" />
      </div>
    );
  }
}

export default NoteSearch;
