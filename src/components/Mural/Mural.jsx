import React from "react";
import PropTypes from "prop-types";
import Toolbar from "../Toolbar";
import StickyNote from "../StickyNote";

import {
  NOTE_DEFAULT_HEIGHT,
  NOTE_DEFAULT_WIDTH,
  MIN_X,
  MIN_Y
} from "../../constants";
import { pixelsToInt } from "../../utils";
import "./styles.css";
import Welcome from "../Welcome";
import Instructions from "../Instructions";

class Mural extends React.Component {
  static propTypes = {
    notes: PropTypes.object,
    selectedNotes: PropTypes.object,
    currentColor: PropTypes.string,
    addNote: PropTypes.func,
    enableMultipleSelection: PropTypes.func,
    disableMultipleSelection: PropTypes.func,
    clearSelectedNotes: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.mural = React.createRef();
  }

  componentDidMount() {
    this.mural.current.addEventListener("click", this.clearSelectedNotes);
    this.mural.current.addEventListener("dblclick", this.addNoteToMural);
    this.mural.current.addEventListener("keydown", this.handleKeyDown);
    this.mural.current.addEventListener("keyup", this.handleKeyUp);
  }

  clearSelectedNotes = e => {
    if (e.target.isEqualNode(this.mural.current)) {
      this.props.clearSelectedNotes();
    }
  };

  getRandomPosition() {
    return {
      x:
        Math.random() * (window.innerWidth - NOTE_DEFAULT_WIDTH - MIN_X) +
        MIN_X,
      y:
        Math.random() * (window.innerHeight - NOTE_DEFAULT_HEIGHT - MIN_Y) +
        MIN_Y
    };
  }

  addNoteToMural = e => {
    if (e.target.classList.contains("sticky-note-content")) {
      return;
    }
    if (!e.x || !e.y) {
      const random = this.getRandomPosition();
      e = {
        ...e,
        x: random.x,
        y: random.y
      };
    }

    const { x, y } = e;
    const { currentColor, addNote } = this.props;
    const width = NOTE_DEFAULT_WIDTH + "px";
    const height = NOTE_DEFAULT_HEIGHT + "px";

    const noteToAdd = {
      text: "",
      color: currentColor,
      width,
      height,
      x: x - pixelsToInt(width) / 2,
      y: y - pixelsToInt(height) / 2
    };

    addNote(noteToAdd);
  };

  handleKeyDown = e => {
    if (e.key === "Shift") {
      this.props.enableMultipleSelection();
    }
  };

  handleKeyUp = e => {
    if (e.key === "Shift") {
      this.props.disableMultipleSelection();
    }
  };

  render() {
    const { notes, selectedNotes } = this.props;
    const StickyNotes = Object.values(notes).map(
      ({ id, text, color, width, height, x, y }) => {
        const selected = selectedNotes.hasOwnProperty(id);

        return (
          <StickyNote
            id={id}
            text={text}
            color={color}
            width={width}
            height={height}
            x={x}
            y={y}
            selected={selected}
            key={id}
          />
        );
      }
    );

    return (
      <main id="Mural" className="Mural" ref={this.mural}>
        <Toolbar addNoteToMural={this.addNoteToMural} />
        <Welcome />
        <Instructions />
        {StickyNotes}
      </main>
    );
  }
}

export default Mural;
