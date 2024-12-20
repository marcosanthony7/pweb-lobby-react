import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link to="/" className="logo">
                                <img src={logo} alt="Logo" style={{ width: "158px" }} />
                            </Link>
                            <ul className="nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/comunidades">Comunidades</Link></li>
                                <li><Link to="/detalhes-comunidades">Detalhes Comunidades</Link></li>
                                <li><Link to="/grupos">Grupos</Link></li>
                                <li><Link to="/detalhes-grupos">Detalhes Grupos</Link></li>
                                <li><Link to="/contato">Contato</Link></li>
                                <li><Link to="#">Login</Link></li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
