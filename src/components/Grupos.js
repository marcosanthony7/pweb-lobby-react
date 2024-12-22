import React from "react";
import topGame01 from "../assets/images/top-game-01.png";

const Grupos = () => {
    return (
        <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Grupos</h3>
                            <span className="breadcrumb"><a href="/">Home</a> / Grupos</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section trending">
                <div className="container">
                    <ul className="trending-filter">
                        <li><a className="is_active" href="#!" data-filter="*">Ver Todos</a></li>
                    </ul>
                    <div className="row trending-box">
                        {["Lolzinho", "Zueira", "Carregados", "ProPlayers", "TryHards", "Lolzinho", "Zueira", "Carregados", "ProPlayers", "TryHards", "Lolzinho", "Zueira"].map((group, index) => (
                            <div key={index} className="col-lg-3 col-md-6 align-self-center mb-30 trending-items">
                                <div className="item">
                                    <div className="thumb">
                                        <a href="detalhes-grupos"><img src={topGame01} alt="" /></a>
                                    </div>
                                    <div className="down-content">
                                        <span className="category">1.000.000 de participantes</span>
                                        <h4>{group}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
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

export default Grupos;
