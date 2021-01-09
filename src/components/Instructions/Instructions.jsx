import React from "react";
import "./styles.css";

class Instructions extends React.Component {
  render() {
    return (
      <ul className="instructions-list">
        <li>
          Add Note: <span className="key">Double Click</span>
        </li>
        <li>
          Edit Note: <span className="key">Click or Tab</span>
        </li>
        <li>
          Multiple Selection: <span className="key">Shift + V</span>
        </li>
        <li>
          Copy Notes: <span className="key">Ctrl + C</span>
        </li>
        <li>
          Paste Notes: <span className="key">Ctrl + V</span>
        </li>
      </ul>
    );
  }
}

export default Instructions;
