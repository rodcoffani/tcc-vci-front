import React, { Component } from "react";
import "./style.css";
import Header from "../../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import axios from "axios";
import API from "../../../api";
import ead from "../../../assets/images/ead-lab.png";
import $ from "jquery";
import BackgroundParticle from "../../../components/Background-particle";
import "font-awesome/css/font-awesome.min.css";
import { Redirect } from "react-router-dom";
import { BsFillEyeSlashFill } from "react-icons/bs";

export default class Roleta extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <Container fluid="xl">
                    <BackgroundParticle></BackgroundParticle>
                    <Container fluid="xl">
                        <Row className="TopShelf">
                            <h1 className="CadT">LOGIN</h1>
                        </Row>
                        <Row>
                            <Col className="image">
                                <div className="TituloC">
                                    <p className="CadS">
                                        Seja bem-vindo ao game
                                        <b className="Flick">_</b>! ;)
                                    </p>
                                </div>
                                <div className="imageBlue">
                                    <img src={ead} className="img-logo login" />
                                </div>
                            </Col>
                            <Col>
                                <div className="FormC">
                                    <form
                                        onSubmit={this.handleSubmit}
                                        noValidate
                                    >
                                        <p className="FieldD">
                                            <b className="Presc">Login:</b>
                                            <input
                                                type="text"
                                                name="login"
                                                placeholder="Login"
                                                //  className={formErrors.email.length > 0 ? "Erro" : null}
                                                className="inputC"
                                                required
                                                onChange={this.handleChange}
                                                noValidate
                                                maxLength="85"
                                            ></input>
                                        </p>

                                        <p className="FieldD senha">
                                            <b className="Presc">
                                                Senha:{" "}
                                                <a
                                                    href="#"
                                                    className="icone"
                                                    onClick={this.handleClick}
                                                >
                                                    {" "}
                                                    <i class="fa fa-cog fa-spin"></i>
                                                </a>{" "}
                                            </b>

                                            <input
                                                id="pass"
                                                type="password"
                                                name="password"
                                                placeholder="Senha"
                                                className="inputC"
                                                required
                                                onChange={this.handleChange}
                                                noValidate
                                            ></input>
                                        </p>

                                        <div className="oneAcess">
                                            {" "}
                                            <a className="one" href="#">
                                                1º Acesso{" "}
                                            </a>
                                        </div>
                                        <div className="oneAcess">
                                            {" "}
                                            <a className="one" href="#">
                                                Esqueci a senha{" "}
                                            </a>
                                        </div>
                                        <input
                                            type="submit"
                                            value="Entrar"
                                            className="CadBtn"
                                        ></input>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <a href="https://ead-lab.coursify.me" className="linkC">
                            https://ead-lab.coursify.me/
                        </a>
                    </Container>
                    {}
                </Container>
            </React.Fragment>
        );
    }
}
