import React from "react";

class NoteInput extends React.Component {
  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form>
          <p className="note-input__title__char-limit">Sisa karakter: 50</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." required="" value="" />
          <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." required=""></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
