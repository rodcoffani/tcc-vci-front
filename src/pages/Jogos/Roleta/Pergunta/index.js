import React, { Component } from "react";
import "./styles.css";
import API from "../../../../api";
import { Button, Modal } from "react-bootstrap";
import socketIOClient from "socket.io-client";
import { connect, connection } from "react-redux";

function mapStateToProps(state) {
    return {
        ...state.playerCon,
    };
}

class Pergunta extends Component {
    handleRedirect = (newPath)=>{
        this.props.history.push(newPath);
    }
    constructor(props) {
        super(props);
        this.state = {
            questao: "",
            alternativas: [],
            selecionada: 0,
            correta: 0,
            time : 0,
            interval: null,
            view:true,
            message:"Clique \"Prosseguir\" para iniciar",
        };
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        const perguntas = [];
        API.get(`/perguntados/pergunta/${id}`).then((res) => {
            console.log(res.data.data[0].json_question);
            var flag = 1;
            for (var [key, value] of Object.entries(
                res.data.data[0].json_question.respostas
            )) {
                for (var [key1, value1] of Object.entries(value)) {
                    if (key1 != "certa") {
                        perguntas.push(value1);
                    }
                    if (key1 == "certa") {
                        if (value1 == "true") {
                            console.log("A flag vale " + flag);
                            this.setState({
                                correta: flag,
                            });
                        } else {
                            flag++;
                        }
                    }
                }
            }
            this.setState({
                questao: res.data.data[0].json_question,
                alternativas: perguntas,
            });
        });
        console.log(perguntas);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // const socket = socketIOClient("http://localhost:4000");
        if (this.state.selecionada == this.state.correta) {
            alert("acertou");
            this.handleRedirect("/jogos/roleta/");
        } else {
            this.props.conexao.emit("errou", this.props.conexao.id);
        }
    };

    startTime() {
        this.setState({
            interval: setInterval(() => {
                let novo = this.state.time + 0.1;
                this.setState({
                    time: Number(novo.toFixed(2)),
                });
            }, 1000),
        });
    }
    pauseTime() {
        clearInterval(this.state.interval);
    }
    handleModalAlt = async (alt) => {
        this.setState({
            selecionada: alt + 1
        }, () => {
            if(this.state.selecionada == this.state.correta){
                alert("acertou");
            }else{
                alert("errou");
                // this.state.conexao.emit("errou", this.state.conexao.id);
            }
        });
        
    };
    handleModal = (mostra) => {
        if (this.state.view) {
            this.setState({ view: false });
            this.startTime();
            // this.setState({
            //     question: this.state.questions.questions[this.state.indice],
            // }); // ta dando erro
        } else {
            this.setState({ view: true });
            this.pauseTime();
        }
    };
    render() {
        let ops = this.state.alternativas;
        return (
            <React.Fragment>
                <div className="container_jogo">
                    <div className="hud">
                        <div className="tempo">
                            <div className="campValor">Tempo</div>
                            <div className="cronometro">
                                {this.state.time} s
                            </div>
                        </div>
                        <div className="pontos">
                            <div className="campValor">Pontos</div>
                            <div className="points">
                                {/*this.state.points*/}
                            </div>
                        </div>
                    </div>
                    <div className="quiz">
                        <div className="enunciado">
                            {this.state.questao.enunciado}
                        </div>
                        <div className="alternativas">
                            <div className="groupAlt">
                                {ops.map((value, key) => {
                                    return (
                                        <div
                                            className="alt"
                                            onClick={() =>
                                                this.handleModalAlt(key)
                                            } // fazer para os outros
                                        >
                                            <div className="alternativa">
                                                {}
                                            </div>
                                            <div className="conteudo">
                                                {value}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Modal show={this.state.view}>
                        <Modal.Header>Quiz </Modal.Header>
                        <Modal.Body>{this.state.message}</Modal.Body>
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
                {/* <h2>{this.state.questao.enunciado}</h2>
                <form>
                    {ops.map((value, key) => {
                        return (
                            <div className="alternativas">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input
                                                value={key}
                                                name="op"
                                                type="radio"
                                                required
                                                aria-label="Radio button for following text input"
                                                onChange={(e) => {
                                                    this.setState({
                                                        selecionada:
                                                        parseInt(e.target.value)+1,
                                                    });
                                                    console.log(this.state.correta);
                                                    console.log(
                                                        this.state.selecionada
                                                    );
                                                }}
                                            />
                                            {value}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <button
                     className="btn btn-success"
                     onClick = {(e) => {
                        this.handleSubmit(e);
                    }}
                    >ENVIAR
                    </button>
                </form> */}
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(Pergunta);
