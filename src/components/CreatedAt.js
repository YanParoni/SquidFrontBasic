import React, { Component } from "react";
import moment from "moment";
import "./styles-overlay.css";

class CreatedAt extends Component {
  render() {
    const { createdAt } = this.props;
    var date = moment(createdAt).format("DD-MM-YYYY hh:mm");
    return <div className="fas fa-calendar-alt attributes">{date}</div>;
  }
}

export default CreatedAt;
