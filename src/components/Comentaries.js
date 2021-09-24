import React, { Component } from "react";
import "./styles-overlay.css";

class Comentaries extends Component {
  render() {
    const { comentaries } = this.props;
    return <div className="far fa-comment attributes">{comentaries}</div>;
  }
}

export default Comentaries;
