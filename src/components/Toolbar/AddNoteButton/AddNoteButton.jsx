import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

class AddNoteButton extends React.Component {
  static propTypes = {
    addNoteToMural: PropTypes.func
  };

  handleClick = e => {
    this.props.addNoteToMural(e);
  };

  render() {
    return (
      <button onClick={this.handleClick} className="add-note-button">
        Add note
      </button>
    );
  }
}

export default AddNoteButton;
