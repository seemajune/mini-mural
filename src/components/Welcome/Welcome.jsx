import React from "react";
import { isEmpty } from "lodash";
import logo from "./logo.svg";
import "./styles.css";

class Welcome extends React.Component {
  render() {
    const { notes } = this.props;

    if (!isEmpty(notes)) return null;

    return (
      <div className="Welcome">
        <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
}

export default Welcome;
