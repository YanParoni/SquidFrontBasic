import React, { Component } from "react";
import "./styles-overlay.css";

class User extends Component {
  render() {
    const { user } = this.props;
    return <div className="fas fa-at attributes">{user}</div>;
  }
}

export default User;
