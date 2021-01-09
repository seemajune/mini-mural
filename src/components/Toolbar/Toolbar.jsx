import React from "react";
import ClipboardManager from "../ClipboardManager";
import AddNoteButton from "./AddNoteButton";
import ColorPicker from "./ColorPicker";
import "./styles.css";

class Toolbar extends React.Component {
  render() {
    return (
      <div className="Toolbar">
        <ColorPicker />
        <AddNoteButton addNoteToMural={this.props.addNoteToMural} />
        <ClipboardManager />
      </div>
    );
  }
}

export default Toolbar;
