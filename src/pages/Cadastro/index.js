import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import { Helmet } from "react-helmet";
import { cpfMask } from "./mask";
import ead from "../../assets/images/ead-lab.png";
import backgroundParticle from '../../components/Background-particle'
export default class Saudacao extends Component {
    constructor(props) {
        super(props);
        this.state = { cpf: "" };
        this.handlechange = this.handlechange.bind(this);
    }

    handlechange(e) {
        this.setState({ cpf: cpfMask(e.target.value) });
    }
    state = {
        nome: this.props.nome,
    };
    setNome(e) {
        this.setState({ nome: e.target.value });
    }
    render() {
        const { cpf } = this.state;
        const { nome } = this.state;
        return (
            <React.Fragment>
                <Helmet title="Cadastro" />

                <Container fluid="xl">
                    <backgroundParticle></backgroundParticle>
                    <Container fluid="xl">
                        <Row className="TopShelf">
                            <h1 className="CadT">CADASTRO</h1>
                        </Row>
                        <Row>
                            <Col className="image">
                                <div className="imageBlue">
                                    <img src={ead} className="img-logo login" />
                                </div>
                            </Col>
                            <Col>
                                <div className="FormC">
                                    <form>
                                        <p className="FieldD">
                                            <b className="Presc">Nome:</b>
                                            <input
                                                type="text"
                                                placeholder="Nome"
                                                className="inputC"
                                                required
                                                onChange={(e) =>
                                                    this.setNome(e)
                                                }
                                                maxLength="45"
                                            ></input>
                                        </p>
                                        <p className="FieldD">
                                            <b className="Presc">Sobrenome:</b>
                                            <input
                                                type="text"
                                                placeholder="Sobrenome"
                                                className="inputCS"
                                                required
                                                maxLength="45"
                                            ></input>
                                        </p>
                                        <p className="FieldD">
                                            <b className="Presc">E-mail:</b>
                                            <input
                                                type="text"
                                                placeholder="E-mail"
                                                className="inputC"
                                                required
                                                maxLength="45"
                                            ></input>
                                        </p>
                                        <p className="FieldD">
                                            <b className="Presc">CPF:</b>
                                            <input
                                                type="text"
                                                placeholder="CPF"
                                                className="inputCC"
                                                required
                                                value={cpf}
                                                onChange={this.handlechange}
                                            ></input>
                                        </p>
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
                        <a href="https://ead-lab.coursify.me" className="linkC">
                            https://ead-lab.coursify.me/
                        </a>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
}
