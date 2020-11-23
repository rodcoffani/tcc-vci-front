import React, { Component, useState } from "react";
import "./style.css";
import { Container, Row, Col, Button, Modal, Alert } from "react-bootstrap";
import { Helmet } from "react-helmet";
import API from "../../api";
import ead from "../../assets/images/ead-lab.png";
import { Redirect } from "react-router-dom";
import $ from "jquery";
import BackgroundParticle from "../../components/Background-particle";
import "font-awesome/css/font-awesome.min.css";
const loginRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    //Valida o form vazio
    Object.values(formErrors).forEach((val) => {
        val.length > 0 && (valid = false);
    });
    //Valida o form que foi preenchido
    /*Object.values(rest).forEach((val) => {
        val === null && (valid = false);
    });*/

    return valid;
};
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            password: null,
            redirect: "",
            formErrors: {
                login: "",
                password: "",
            },
            email: null,
            sucess: false,
            error: false,
            view: false,
        };
    }
    handleModal = () => {
        var a = this.state.view;
        if (a) {
            this.setState({ view: false });
            this.setState({ sucess: false });
            this.setState({ error: false });
        } else {
            this.setState({ view: true });
        }
    };
    handleModalValidacao = () => {
        API.post("/users/forgot-password", {
            email: this.state.email,
        })
            .then((response) => {
                if (response) {
                    this.setState({
                        error: false,
                        sucess: true,
                    });
                } else {
                    this.setState({
                        error: true,
                        sucess: false,
                    });
                }
                this.setState({
                    message: `(${response.status}) - ${response.data.message}`,
                });
            })
            .catch((err) => {
                this.setState({
                    error: true,
                    message: `(${err.response.status}) - ${err.response.data.message}`,
                });
            });
    };
    handleClick = (e) => {
        var texto = $("#pass").attr("type");
        if (texto === "password") {
            $("#pass").attr("type", "text");
        } else {
            $("#pass").attr("type", "password");
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`
                --Enviando--
                Email ${this.state.login}
                Senha ${this.state.password}
            `);
            const user = {
                login: this.state.login,
                password: this.state.password,
            };
            API.post("/login", user).then((res) => {
                console.log(res);
                console.log(res.data);
                // console.log(res.data.success === "true" && res.data.admin === true && res.data.checked_user === true);
                if (
                    res.data.success === "true" &&
                    res.data.admin === false &&
                    res.data.checked_user === true
                ) {
                    localStorage.setItem("authTk", res.data.token);
                    this.setState({ redirect: "/funcionario" });
                } else if (
                    res.data.success === "true" &&
                    res.data.admin === true &&
                    res.data.checked_user === true
                ) {
                    localStorage.setItem("authTk", res.data.token);
                    this.setState({ redirect: "/administrador" });
                } else {
                    alert(
                        "Talvez sua conta ainda não esteja verificada. Aguarde o recebimento de verificação em seu email para realizar o login!"
                    );
                }
            });
            API.post(
                "/login/teste-token",
                localStorage.getItem("authTk")
            ).then((res) => {});
        } else {
            console.error("Form invalid");
        }
    };
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
        switch (name) {
            case "login":
                formErrors.login = loginRegex.test(value)
                    ? ""
                    : "Login inválido";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "Senha precisa ter 6 caracteres" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () =>
            console.log(this.state)
        );
    };
    componentWillMount() {
        let tk = {
            token: localStorage.getItem("authTk"),
        };
        if (tk !== null) {
            API.post("/login/teste-token", tk)
                .then((res) => {
                    if (res.data.success === "true") {
                        this.setState({ redirect: "/" });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    goToCadastro() {
        /* eslint-disable no-restricted-globals */
        open("/cadastro");
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        }
        return (
            <React.Fragment>
                <Helmet title="Login" />
                <Container fluid="xl">
                    <BackgroundParticle></BackgroundParticle>
                    <Container fluid="xl login">
                        <Row className="TopShelf">
                            <h1 className="CadT">LOGIN</h1>
                        </Row>
                        <Row className="inputs">
                            <Col className="image">
                                <div className="imageBlue">
                                    <img
                                        src={ead}
                                        className="img-logo login"
                                        alt="Logotipo EAD-LAB"
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="FormC">
                                    <form
                                        onSubmit={this.handleSubmit}
                                        noValidate
                                        className="cad"
                                    >
                                        <p className="FieldD">
                                            <b className="Presc">Login:</b>
                                            <input
                                                type="text"
                                                name="login"
                                                placeholder="Login"
                                                className="inputV"
                                                required
                                                onChange={this.handleChange}
                                                noValidate
                                                maxLength="85"
                                            />
                                        </p>

                                        <p className="FieldD">
                                            <b className="Presc">
                                                Senha:{" "}
                                                <a
                                                    href="#"
                                                    className="btn"
                                                    onClick={this.handleClick}
                                                >
                                                    <div class="olhinho"></div>
                                                </a>{" "}
                                            </b>

                                            <input
                                                id="pass"
                                                type="password"
                                                name="password"
                                                placeholder="Senha"
                                                className="inputV"
                                                required
                                                onChange={this.handleChange}
                                                noValidate
                                            />
                                        </p>

                                        <div className="oneAcess">
                                            {" "}
                                            <button
                                                className="btn btn-link one"
                                                onClick={() => {
                                                    this.goToCadastro();
                                                }}
                                            >
                                                1º Acesso{" "}
                                            </button>{" "}
                                            <button
                                                className="btn btn-link oneTwo"
                                                onClick={() => {
                                                    this.handleModal();
                                                }}
                                            >
                                                Esqueci a senha{" "}
                                            </button>
                                            <input
                                                type="submit"
                                                value="Entrar"
                                                className="CadBtn"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className="footer">
                            <a
                                href="https://ead-lab.coursify.me"
                                className="linkC"
                            >
                                https://ead-lab.coursify.me/
                            </a>
                        </div>
                    </Container>
                </Container>
                <div>
                    <Modal
                        show={this.state.view}
                        onHide={() => this.handleModal()}
                    >
                        <Modal.Header>RECUPERAÇÃO DE SENHA </Modal.Header>
                        <Modal.Body>
                            <b className="">Email:</b>
                            <input
                                type="text"
                                placeholder="Email"
                                className="recuperaEmail"
                                onChange={(e) =>
                                    (this.state.email = e.target.value)
                                }
                                maxLength="85"
                            ></input>
                            <Alert
                                show={this.state.sucess}
                                id="AlertSucess"
                                variant="success"
                            >
                                {this.state.message}
                            </Alert>
                            <Alert
                                show={this.state.error}
                                id="AlertDanger"
                                variant="danger"
                            >
                                {this.state.message}
                            </Alert>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={() => {
                                    this.handleModalValidacao();
                                }}
                            >
                                Enviar
                            </Button>
                            <Button
                                onClick={() => {
                                    this.handleModal();
                                }}
                            >
                                Cancelar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </React.Fragment>
        );
    }
}

export default login;
