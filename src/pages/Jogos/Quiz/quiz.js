import React, { Component } from "react";
import "../Quiz/style.css";
import Header from "../../../components/Header";
import { Helmet } from "react-helmet";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col, Button, Modal, Alert } from "react-bootstrap";
import Cronometro from "../../../components/Cronometro/cron"
import { Container } from "react-bootstrap";
import { faFlag } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import API from "../../../api";

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            points: 0,
            questions: {},
            interval: null,
            view:true,
            message:"Clique \"Prosseguir\" para iniciar",
        };
        API.get(`/get-questions`).then((res) => {
            console.log(res);
        });
    }
    startTime() {
        this.setState({
            interval: setInterval(() => {
                let novo = this.state.time + 0.1;
                this.setState({
                    time: Number(novo.toFixed(2)),
                });
            }, 100),
        });
    }
    pauseTime() {
        clearInterval(this.state.interval);
    }
    handleModal = () => {
        var a = this.state.view;
        if (a) {
            this.setState({ view: false });
            this.startTime();
        } else {
            this.setState({ view: true });
            this.pauseTime();
        }
    };
    exitGame = () => {

    };
    render() {
        return ( 
            <React.Fragment>
            <Helmet title = "Jogo 1" />
            <Header headerTitle = "Jogo de Perguntas" />
            <div className='container_jogo'>
                <div className='hud'>
                    <div className="tempo">
                        <div className='campValor'>Tempo</div>
                        <div className='cronometro'>{this.state.time}</div>
                    </div>
                    <div className="pontos">
                        <div className='campValor'>Pontos</div>
                        <div className='points'>points</div>
                    </div>
                </div>
                <div className='quiz'>
                        <div className='enunciado'>enunciado</div>
                        <div className='alternativas'>
                            <div className='groupAlt'>
                                
                                <div className="altA"
                                    onClick={() => this.handleModal()}
                                >
                                    <div className="alternativa">A)</div>
                                    <div className="conteudo">Fala oi</div>
                                </div>
                                <div className="altB"
                                    onClick={() => this.handleModal()}
                                >
                                    <div className="alternativa">B)</div>
                                    <div className="conteudo">Fala oi</div>
                                </div>
                                <div className="altC"
                                    onClick={() => this.handleModal()}
                                >
                                    <div className="alternativa">C)</div>
                                    <div className="conteudo">Fala oi</div>
                                </div>
                                <div className="altD"
                                    onClick={() => this.handleModal()}
                                >
                                    <div className="alternativa">D)</div>
                                    <div className="conteudo">Fala oi</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div>
            <Modal
                show={this.state.view}
            >
                <Modal.Header>Quiz </Modal.Header>
                <Modal.Body>
                    {this.state.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            this.exitGame();
                        }}
                    >
                        Cancelar Rodada
                    </Button>
                    <Button
                        onClick={() => {
                            this.handleModal();
                        }}
                    >
                        Prosseguir
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
            </React.Fragment>
        );
    }
}