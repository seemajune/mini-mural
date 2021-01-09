import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

class FontAwesomeButton extends React.Component {
  static propTypes = {
    faClass: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func
  };

  render() {
    const { faClass, handleOnClick } = this.props;
    return (
      <button className="icon" onClick={handleOnClick}>
        <i className={faClass} aria-hidden="true" />
        <div className="sr-only">Delete note</div>
      </button>
    );
  }
}

export default FontAwesomeButton;
