import React, { Component } from "react";
import { getApi } from "../services/api";
import InfluencerCard from "./InfluencerCard";
import "./styles-overlay.css";

class List extends Component {
  constructor() {
    super();
    this.getResponse = this.getResponse.bind(this);
    this.state = {
      data: [],
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
    this.timeout = setTimeout(() => this.setModal(false), 500);
  }

  handleMouseOver() {
    clearTimeout(this.timeout);
    if (this.state.showModal !== true) {
      this.setModal(true);
    }
  }

  componentDidMount() {
    this.getResponse();
  }

  async getResponse() {
    const data = await getApi();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="list ">
          {data &&
            data.map(
              ({ imagens, comentarios, link,_id, upvotes, criadoEm, usuario }) => {
                return (
                  <InfluencerCard
                    key={_id}
                    thumbnail={imagens.resolucaoPadrao.url}
                    height={imagens.resolucaoMedia.height}
                    width={imagens.resolucaoMedia.width}
                    link={link}
                    upvotes={upvotes}
                    criadoEm={criadoEm}
                    comentarios={comentarios}
                    usuario={usuario.username}
                  />
                );
              }
            )}
        </div>
      </div>
    );
  }
}

export default List;
