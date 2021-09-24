import React, { Component } from "react";
import User from "./User";
import Comentaries from "./Comentaries";
import Likes from "./Likes";
import CreatedAt from "./CreatedAt";
import "./styles-overlay.css";

class InfluencerCard extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
    this.handleLeave = this.handleLeave.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.setModal = this.setModal.bind(this);
    this.timeout = null;
  }

  setModal(bool) {
    this.setState({ showModal: bool });
  }

  handleLeave() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setModal(false), 100);
  }

  handleMouseOver() {
    clearTimeout(this.timeout);
    if (this.state.showModal !== true) {
      this.setModal(true);
    }
  }
  render() {
    const {
      link,
      thumbnail,
      criadoEm,
      comentarios,
      upvotes,
      usuario,
    } = this.props;
    return (
      <div
        className="item"
        onMouseLeave={this.handleLeave}
        onMouseOver={this.handleMouseOver}
      >
        <a href={link} target="_blank" rel="noreferrer">
          <div className="wrapper">
            <img className="" src={thumbnail} alt={`post dx usuarix ${usuario}`} />
            {this.state.showModal && (
              <>
                <div className="overlay">
                  <div className="text">
                    <Likes className="attributes" likes={upvotes} />
                    <Comentaries
                      className="attributes"
                      comentaries={comentarios}
                    />
                    <CreatedAt className="attributes" createdAt={criadoEm} />
                    <User className="attributes" user={usuario} />
                  </div>
                </div>
              </>
            )}
          </div>
        </a>
      </div>
    );
  }
}

export default InfluencerCard;
