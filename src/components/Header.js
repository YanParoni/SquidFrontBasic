import React, { Component } from "react";
import { ReactComponent as SquidLogo } from "../assets/logo.svg";
class Header extends Component {
  render() {
    return (
      <div className='logo-container'>
      <a href='https://squidit.com.br/'>
        <SquidLogo />
        </a>

      </div>
    );
  }
}

export default Header;
