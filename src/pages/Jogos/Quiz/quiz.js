import React, { Component } from "react";
import "../Quiz/style.css";
import Header from "../../../components/Header";
import { Helmet } from "react-helmet";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col, Button, Modal, Alert } from "react-bootstrap";
import Cronometro from "../../../components/Cronometro/cron"
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
            question:{},
            alternativas:{},
            interval: null,
            view:true,
            message:"Clique \"Prosseguir\" para iniciar",
            indice:0
        };
        API.get(`/quiz/get-questions`).then((res) => {
            this.state.questions = res.data;
        });
    }
   
    startTime() {
        this.setState({
            interval: setInterval(() => {
                let novo = this.state.time + 0.1;
                this.setState({
                    time: Number(novo.toFixed(2)),
                    points: this.state.points,
                });
            }, 100),
        });
    }
    pauseTime() {
        clearInterval(this.state.interval);
    }
    handleModalAlt = async (alt) =>{
        this.setState({indice: this.state.indice+1})

        
        API.post(`/quiz/check-question/`, {idquestion: this.state.question.idquestion,resposta: alt})
        .then((res) => {
            this.setState({message: res.data.resultado})
            if(this.state.message.includes("certa")){
                this.setState({points: this.state.points+20});
            }
            this.handleModal();
        })
        .catch((err)=> {console.log(err)});
        
        // if(
        //     this.state.message.includes("certa")
        //     // true
        // ){
        //     this.setState({points: this.state.points+20});
        // }
        // this.handleModal();
    }
    handleModal = (mostra) => {
        
        if (this.state.view) {
            this.setState({ view: false });
            this.startTime();
            this.setState({ question: this.state.questions.questions[this.state.indice]}); // ta dando erro

        } else {
            this.setState({ view: true });
            this.pauseTime();
        }
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
                        <div className='points'>{this.state.points}</div>
                    </div>
                </div>
                <div className='quiz'>
                    <div className='enunciado'>{this.state.question.enunciado}</div>
                        <div className='alternativas'>
                            <div className='groupAlt'>
                                
                                <div className="altA"
                                    onClick={() => this.handleModalAlt(this.state.question.q1)} // fazer para os outros
                                >
                                    <div className="alternativa">A)</div>
                                    <div className="conteudo">{this.state.question.q1}</div>
                                </div>
                                <div className="altB"
                                   onClick={() => this.handleModalAlt(this.state.question.q2)}
                                >
                                    <div className="alternativa">B)</div>
                                    <div className="conteudo">{this.state.question.q2}</div>
                                </div>
                                <div className="altC"
                                    onClick={() => this.handleModalAlt(this.state.question.q3)}
                                >
                                    <div className="alternativa">C)</div>
                                    <div className="conteudo">{this.state.question.q3}</div>
                                </div>
                                <div className="altD"
                                    onClick={() => this.handleModalAlt(this.state.question.q4)}
                                >
                                    <div className="alternativa">D)</div>
                                    <div className="conteudo">{this.state.question.q4}</div>
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