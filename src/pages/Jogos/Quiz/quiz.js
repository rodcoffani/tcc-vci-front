import React, { Component } from "react";
import "../Quiz/style.css";
import Header from "../../../components/Header";
import { Helmet } from "react-helmet";
import "font-awesome/css/font-awesome.min.css";
import {Button, Modal} from "react-bootstrap";
import API from "../../../api";
import { withRouter } from "react-router-dom";

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
            view2:false,
            message:"Clique \"Prosseguir\" para iniciar",
            indice:0,
            token:localStorage.getItem('authTk'),
            idUser:0,
        };
        API.get(`/quiz/get-questions`).then((res) => {
            this.state.questions = res.data;
        });
        API.post(`/login/teste-token`, {token: localStorage.getItem('authTk') }).then((res) => {
            this.setState({idUser: res.data.decoded.iduser});
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
    handleRedirect = (newPath) => {
        this.props.history.push(newPath);
    };
    handleModalAlt = async (alt) =>{
        API.post(`/quiz/check-question/`, {idquestion: this.state.question.idquestion,resposta: alt})
        .then((res) => {
            this.setState({message: res.data.resultado})
            if(this.state.message.includes("Correta")){
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
    GameAgain(){
        this.handleRedirect("/quiz_rules");
        
    }
    Encerra(){
         this.handleRedirect("/profile-employee");
    }
    handleModal = (mostra) => {
        if(this.state.indice==5){
            let ranking = {
                points: this.state.points,
                tempo: this.state.time,
                user: this.state.idUser,
            }
            API.put(`/quiz/insert-ranking`, { points: this.state.points, tempo: this.state.time, user: this.state.idUser,});
            this.setState({ view2: true });
            this.pauseTime();
            return;
        }
        if (this.state.view) {
            this.setState({ view: false });
            this.startTime();
            this.setState({indice: this.state.indice+1}) 
            this.setState({ question: this.state.questions.questions[this.state.indice]}); // ta dando erro

        } else {
            this.setState({ view: true });
            this.pauseTime();
        }
    };
    render() {
        return ( 
            <React.Fragment>
            <Helmet title = "Quiz" />
            <Header headerTitle = "Jogo Quiz" />
            <div className='container_jogo'>
                <div className='hud'>
                    <div className="tempo">
                        <div className='campValor'>Tempo</div>
                        <div className='cronometro'>{this.state.time} s</div>
                    </div>
                    <div className="indice">{this.state.indice} / 5</div>
                    <div className="pontos">
                        <div className='campValor'>Pontos</div>
                        <div className='points'>{this.state.points}</div>
                    </div>
                </div>
                <div className='quiz'>
                    <div className='enunciado'>{this.state.question.enunciado}</div>
                        <div className='alternativas'>
                            <div className='groupAlt'>
                                
                                <div className="alt"
                                    onClick={() => this.handleModalAlt(this.state.question.q1)} // fazer para os outros
                                >
                                    <div className="alternativa">A)</div>
                                    <div className="conteudo">{this.state.question.q1}</div>
                                </div>
                                <div className="alt"
                                   onClick={() => this.handleModalAlt(this.state.question.q2)}
                                >
                                    <div className="alternativa">B)</div>
                                    <div className="conteudo">{this.state.question.q2}</div>
                                </div>
                                <div className="alt"
                                    onClick={() => this.handleModalAlt(this.state.question.q3)}
                                >
                                    <div className="alternativa">C)</div>
                                    <div className="conteudo">{this.state.question.q3}</div>
                                </div>
                                <div className="alt"
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
                {this.state.button}
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
            <Modal
                show={this.state.view2}
            >
                <Modal.Header>Fim de Jogo</Modal.Header>
                <Modal.Body>
                    Você fez {this.state.points} pontos!!
                </Modal.Body>
                
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            this.GameAgain();
                        }}
                    >
                        Jogar Novamente
                    </Button>
                    <Button
                        onClick={() => {
                            this.Encerra();
                        }}
                    >
                        Encerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
            </React.Fragment>
        );
    }
}