import React from "react";
import "../assets/css/fontawesome.css";
import "../assets/css/templatemo-lugx-gaming.css";
import "../assets/css/owl.css";
import "../assets/css/animate.css";
import ComunidadeService from "../services/ComunidadeService";

const Home = () => {
  const comunidades = ComunidadeService.getComunidades();

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
                    />
                    <button>BUSCAR</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="row">
            {["Mensagens", "Perfil", "Postagens", "Configurações"].map(
              (item, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <a href="#">
                    <div className="item">
                      <div className="image">
                        <img
                          src={require(`../assets/images/featured-0${index + 1}.png`)}
                          alt=""
                          style={{ maxWidth: "44px" }}
                        />
                      </div>
                      <h4>{item}</h4>
                    </div>
                  </a>
                </div>
              )
            )}
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
                <a href="/comunidades">Ver Todas</a>
              </div>
            </div>
            {comunidades.map((comunidade, index) => (
              <div
                key={index}
                className="col-lg-2 col-md-6 col-sm-6"
              >
                <div className="item">
                  <div className="thumb">
                    <a href="/detalhes-comunidades">
                      <img src={comunidade.img} alt="" />
                    </a>
                  </div>
                  <div className="down-content">
                    <span className="category">{comunidade.participantes}</span>
                    <h4>{comunidade.nome}</h4>
                    <a href="/detalhes-comunidades">Seguir</a>
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
