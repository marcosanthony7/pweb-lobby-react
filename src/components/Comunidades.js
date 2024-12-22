import React from "react";
import topGame01 from "../assets/images/top-game-01.png";
import topGame02 from "../assets/images/top-game-02.png";
import topGame03 from "../assets/images/top-game-03.jpg";
import topGame04 from "../assets/images/top-game-04.jpg";
import topGame05 from "../assets/images/top-game-05.png";
import topGame06 from "../assets/images/top-game-06.jpg";

const Comunidades = () => {
    return (
        <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Comunidades</h3>
                            <span className="breadcrumb">
                                <a href="/">Home</a> / Comunidades
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section trending">
                <div className="container">
                    <ul className="trending-filter">
                        <li>
                            <a className="is_active" href="#!" data-filter="*">Ver Todas</a>
                        </li>
                    </ul>

                    <div className="row trending-box">
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items adv">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame01} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">5.000.000 de participantes</span>
                                    <h4>League Of Legends</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items str">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame02} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">4.000.000 de participantes</span>
                                    <h4>Valorant</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items adv rac">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame03} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">3.000.000 de participantes</span>
                                    <h4>Fortnite</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items str">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame04} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">2.000.000 de participantes</span>
                                    <h4>PUBG</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items rac str">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame05} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">1.000.000 de participantes</span>
                                    <h4>CS:GO</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items rac adv">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame06} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">500.000 de participantes</span>
                                    <h4>Rocket League</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items rac str">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame01} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">5.000.000 de participantes</span>
                                    <h4>League Of Legends</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items rac adv">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame02} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">4.000.000 de participantes</span>
                                    <h4>Valorant</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items adv rac">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame03} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">3.000.000 de participantes</span>
                                    <h4>Fortnite</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items str">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame04} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">2.000.000 de participantes</span>
                                    <h4>PUBG</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items adv">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame05} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">1.000.000 de participantes</span>
                                    <h4>CS:GO</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items str">
                            <div className="item">
                                <div className="thumb">
                                    <a href="/detalhes-comunidades">
                                        <img src={topGame06} alt="" />
                                    </a>
                                </div>
                                <div className="down-content">
                                    <span className="category">500.000 de participantes</span>
                                    <h4>Rocket League</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li><a href="#"> &lt; </a></li>
                                <li><a className="is_active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"> &gt; </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comunidades;
