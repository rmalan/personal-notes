import React from "react";
import Body from "./Body";
import Header from "./Header";
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();

    this.state = {
      activeNotes: notes.filter((note) => note.archived === false),
      archived: notes.filter((note) => note.archived === true),
    }

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        activeNotes: [
          ...prevState.activeNotes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    });
  }

  onDeleteHandler(id) {
    const activeNotes = this.state.activeNotes.filter((note) => note.archived === false && note.id !== id);
    const archived = this.state.archived.filter((note) => note.archived === true && note.id !== id);

    this.setState({ activeNotes, archived });
  }

  render() {
    return (
      <>
        <Header />
        <Body addNote={this.onAddNoteEventHandler} activeNotes={this.state.activeNotes} archived={this.state.archived} onDelete={this.onDeleteHandler} />
      </>
    );
  }
}

export default NotesApp;
