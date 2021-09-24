import React, { Component } from "react";
import { ReactComponent as SquidLogo } from "../assets/logo.svg";
class Header extends Component {
  render() {
    return (
      <div className='logo-container'>
        <SquidLogo />
      </div>
    );
  }
}

export default Header;
