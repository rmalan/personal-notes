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

  render() {
    return (
      <>
        <Header />
        <Body addNote={this.onAddNoteEventHandler} activeNotes={this.state.activeNotes} archived={this.state.archived} />
      </>
    );
  }
}

export default NotesApp;
