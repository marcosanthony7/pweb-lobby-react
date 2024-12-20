import React from "react";
import topGame01 from "../assets/images/top-game-01.png";

const DetalhesComunidades = () => {
    return (
        <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>League Of Legends</h3>
                            <span className="breadcrumb">
                                <a href="#">Home</a> / <a href="#">Comunidades</a> / League Of Legends
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-product section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img src={topGame01} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <h4>League Of Legends</h4>
                            <span className="price">5.000.000 de participantes</span>
                            <p>Comunidade de League Of Legends.</p>
                            <form id="qty" action="#">
                                <button type="submit">SEGUIR</button>
                            </form>
                            <ul>
                                <li><span>Nome do Jogo:</span> League Of Legends</li>
                                <li><span>Participantes:</span> <a href="#">5.000.000</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <div className="sep"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tabs-content">
                                <div className="row">
                                    <div className="nav-wrapper">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Descrição</button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                            <p>Comunidade de League Of Legends.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalhesComunidades;
