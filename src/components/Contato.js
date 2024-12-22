import React from "react";

const Contato = () => {
    return (
        <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Contato</h3>
                            <span className="breadcrumb"><a href="/">Home</a> / Contato</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-page section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="left-text">
                                <div className="section-heading">
                                    <h6>Contato</h6>
                                    <h2>Diga Oi!</h2>
                                </div>
                                <p>Lobby é um site focado na comunicação entre jogadores de diferentes jogos on-line, com uma comunidade que possui diversidade de grupos para cada jogo.</p>
                                <ul>
                                    <li><span>Endereço</span> Rio Largo, Alagoas, Brasil</li>
                                    <li><span>Telefone</span> +55 82 99409-6742</li>
                                    <li><span>Email</span> lobby@contato.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div id="map">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.971082476679!2d-35.80655222412927!3d-9.511241799889053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701379310b71523%3A0x9139c72273c11ec6!2sInstituto%20Federal%20de%20Alagoas%20-%20Campus%20Rio%20Largo!5e0!3m2!1spt-BR!2sbr!4v1731689666132!5m2!1spt-BR!2sbr"
                                                width="100%"
                                                height="325px"
                                                style={{ border: 0, borderRadius: "23px" }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <form id="contact-form" action="" method="post">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input type="text" name="name" id="name" placeholder="Nome..." autoComplete="on" required />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input type="text" name="surname" id="surname" placeholder="Sobrenome..." autoComplete="on" required />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            pattern="[^ @]*@[^ @]*"
                                                            placeholder="E-mail..."
                                                            required
                                                        />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input type="text" name="subject" id="subject" placeholder="Assunto..." autoComplete="on" />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <textarea name="message" id="message" placeholder="Mensagem"></textarea>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <button type="submit" id="form-submit" className="orange-button">
                                                            Enviar
                                                        </button>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </form>
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

export default Contato;
