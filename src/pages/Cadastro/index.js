import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import { Helmet } from "react-helmet";
import { cpfMask } from "./mask";
import ead from "../../assets/images/ead-lab.png";
import { Redirect } from "react-router-dom";
import API from "../../api";
import BackgroundParticle from '../../components/Background-particle'
export default class Saudacao extends Component {
    constructor(props) {
        super(props);
        this.state = {cpf: "", nome: "", sobrenome: "", email: "", redirect: ''};
        this.handlechange = this.handlechange.bind(this);
    }

    handlechange(e) {
        this.setState({ cpf: cpfMask(e.target.value) });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        API.post("/users/",this.state).then((res) => {
            console.log(res.data.success);
            if(res.data.success === true) {
                this.setState({ redirect: "/login" })
            }
        })
        
    }
    state = {
        nome: this.props.nome,
    };
    setNome(e) {
        this.setState({ nome: e.target.value });
    }
    goToLogin() {
        /* eslint-disable no-restricted-globals */
        open("/login");
    }
    render() {
        const { cpf } = this.state;
        const { nome } = this.state;
        if(this.state.redirect.length > 0) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <React.Fragment>
                <Helmet title="Cadastro" />

                <Container fluid="xl">
                    <BackgroundParticle></BackgroundParticle>
                    <Container fluid="xl cadastro">
                        <Row className="TopShelf">
                            <h1 className="CadT">CADASTRO</h1>
                        </Row>
                        <Row>
                            <Col className="image">
                                <div className="imageBlue">
                                    <img src={ead} className="img-logo cad" alt="Logotipo do EAD-LAB"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="FormC">
                                    <form
                                        onSubmit={this.handleSubmit}
                                        className="cad"
                                    >
                                        <p className="FieldD">
                                            <b className="Presc">Nome:                  </b>
                                            <input
                                                type="text"
                                                placeholder="Nome"
                                                className="inputV"
                                                value={nome}
                                                required
                                                onChange={(e) => // pega o valor do input e adiciona na variavel this.state
                                                    this.setState({
                                                        nome : e.target.value
                                                    })
                                                }
                                                maxLength="45"
                                            ></input>
                                        </p>
                                        <p className="FieldD">
                                            <b className="Presc">Sobrenome:     </b>
                                            <input
                                                type="text"
                                                placeholder="Sobrenome"
                                                className="inputCS"
                                                onChange={(e) =>
                                                    this.setState({
                                                        sobrenome : e.target.value
                                                    })
                                                }
                                                required
                                                maxLength="45"
                                            ></input>
                                        </p>
                                        <p className="FieldD">
                                            <b className="Presc">E-mail:     </b>
                                            <input
                                                type="text"
                                                placeholder="E-mail"
                                                className="inputV"
                                                required
                                                maxLength="45"
                                                onChange={(e) =>
                                                    this.setState({
                                                        email : e.target.value
                                                    })
                                                }
                                            ></input>
                                        </p>
                                        <p className="FieldD">
                                            <b className="Presc">CPF:        </b>
                                            <input
                                                type="text"
                                                placeholder="CPF"
                                                className="inputCC"
                                                required
                                                value={cpf}
                                                onChange={this.handlechange}
                                            ></input>
                                        </p>
                                        <div class="possuiConta">Já possui uma conta? <a class="redirectLogin" href="#" onClick={() => {this.goToLogin();}}>Entrar</a></div>
                                        <input
                                            type="submit"
                                            value="Cadastrar"
                                            className="CadBtn"
                                        ></input>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className="footer"> 
                            <a href="https://ead-lab.coursify.me" className="linkC">
                                https://ead-lab.coursify.me/
                            </a>
                        </div>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
}
