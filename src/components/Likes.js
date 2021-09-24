import React, { Component } from "react";
import "./styles-overlay.css";

class Likes extends Component {
  render() {
    const { likes } = this.props;
    return <div className="far fa-heart attributes">{likes}</div>;
  }
}

export default Likes;
