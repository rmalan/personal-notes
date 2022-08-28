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
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
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
    const activeNotes = this.state.activeNotes.filter((note) => note.id !== id);
    const archived = this.state.archived.filter((note) => note.id !== id);

    this.setState({ activeNotes, archived });
  }

  onArchiveHandler(id) {
    const notes = this.state.activeNotes.map((note) => note.id === id ? { ...note, archived: true } : note);
    const activeNotes = notes.filter((note) => note.archived === false);
    const archiveNotes = notes.filter((note) => note.archived === true);

    this.setState((prevState) => {
      return {
        activeNotes: activeNotes,
        archived: [
          ...prevState.archived,
          archiveNotes[0]
        ]
      }
    });
  }

  onActiveHandler(id) {
    const notes = this.state.archived.map((note) => note.id === id ? { ...note, archived: false } : note);
    const activeNotes = notes.filter((note) => note.archived === false);
    const archiveNotes = notes.filter((note) => note.archived === true);

    this.setState((prevState) => {
      return {
        activeNotes: [
          ...prevState.activeNotes,
          activeNotes[0]
        ],
        archived: archiveNotes
      }
    });
  }

  render() {
    return (
      <>
        <Header />
        <Body addNote={this.onAddNoteEventHandler} activeNotes={this.state.activeNotes} archived={this.state.archived} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onActive={this.onActiveHandler} />
      </>
    );
  }
}

export default NotesApp;
