import React from "react";

const Login = () => {
    return (
        <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Login</h3>
                            <span className="breadcrumb">
                                <a href="/">Home</a> / Login
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="login-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="form-container">
                                <h4>Faça seu Login</h4>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Nome de Usuário / Email</label>
                                        <input
                                            type="text"
                                            id="email"
                                            className="form-control"
                                            placeholder="Digite seu nome de usuário ou email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Senha</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            placeholder="Digite sua senha"
                                            required
                                        />
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-primary">
                                            Entrar
                                        </button>
                                    </div>
                                </form>
                                <p className="text-center">
                                    Não tem uma conta? <a href="/registrar">Registre-se aqui</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
