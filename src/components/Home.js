import React from "react";
import "../assets/css/fontawesome.css";
import "../assets/css/templatemo-lugx-gaming.css";
import "../assets/css/owl.css";
import "../assets/css/animate.css";

const Home = () => {
  return (
    <div>
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="caption header-text">
                <h6>Bem-vindo ao Lobby</h6>
                <h2>MELHOR COMUNICAÇÃO PARA JOGOS!</h2>
                <p>
                  Lobby é um site focado na comunicação entre jogadores de
                  diferentes jogos on-line, com uma comunidade que possui
                  diversidade de grupos para cada jogo.
                </p>
                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Comunidade"
                      id="searchText"
                      name="searchKeyword"
                      onKeyPress="handle"
                    />
                    <button>BUSCAR</button>
                  </form>
                </div>
              </div>
            </div>
            {/* Imagem comentada */}
            {/* <div className="col-lg-4 offset-lg-2">
              <div className="right-image">
                <img src="assets/images/banner-image.jpg" alt="" />
                <span className="price">$22</span>
                <span className="offer">-40%</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img
                      src="../images/featured-01.png"
                      alt=""
                      style={{ maxWidth: "44px" }}
                    />
                  </div>
                  <h4>Mensagens</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img
                      src="../images/featured-02.png"
                      alt=""
                      style={{ maxWidth: "44px" }}
                    />
                  </div>
                  <h4>Perfil</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img
                      src="../images/featured-03.png"
                      alt=""
                      style={{ maxWidth: "44px" }}
                    />
                  </div>
                  <h4>Postagens</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img
                      src="../images/featured-04.png"
                      alt=""
                      style={{ maxWidth: "44px" }}
                    />
                  </div>
                  <h4>Configurações</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section most-played">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>COMUNIDADES</h6>
                <h2>MAIS SEGUIDAS</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-button">
                <a href="comunidades.html">Ver Todas</a>
              </div>
            </div>
            {/* Comunidades */}
            {[
              {
                img: "../images/top-game-01.png",
                participantes: "5.000.000 de participantes",
                nome: "League Of Legends",
              },
              {
                img: "../images/top-game-02.png",
                participantes: "4.000.000 de participantes",
                nome: "Valorant",
              },
              {
                img: "../images/top-game-03.jpg",
                participantes: "3.000.000 de participantes",
                nome: "Fortnite",
              },
              {
                img: "../images/top-game-04.jpg",
                participantes: "2.000.000 de participantes",
                nome: "COD: WARZONE",
              },
              {
                img: "../images/top-game-05.png",
                participantes: "1.000.000 de participantes",
                nome: "CS:GO",
              },
              {
                img: "../images/top-game-06.jpg",
                participantes: "500.000 de participantes",
                nome: "Rocket League",
              },
            ].map((comunidade, index) => (
              <div
                key={index}
                className="col-lg-2 col-md-6 col-sm-6"
              >
                <div className="item">
                  <div className="thumb">
                    <a href="detalhes-comunidades.html">
                      <img src={comunidade.img} alt="" />
                    </a>
                  </div>
                  <div className="down-content">
                    <span className="category">{comunidade.participantes}</span>
                    <h4>{comunidade.nome}</h4>
                    <a href="detalhes-comunidades.html">Seguir</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
