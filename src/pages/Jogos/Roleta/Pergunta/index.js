import React, { Component } from "react";
import "./styles.css";
import API from "../../../../api";
import { Button, Modal } from "react-bootstrap";
import socketIOClient from "socket.io-client";
import { connect, connection } from "react-redux";
import { Redirect } from "react-router-dom";

function mapStateToProps(state) {
    return {
        ...state.playerCon,
    };
}

// window.onbeforeunload = function (e) {
//     var e = e || window.event;

//     // For IE and Firefox
//     if (e) {
//         e.returnValue = 'Leaving the page';
//     }

//     // For Safari
//     return 'Leaving the page';
// };

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
            totem_fk : 0,
            interval: null,
            view:true,
            message:"Clique \"Prosseguir\" para iniciar - Você possui 20 segundos pra responder a questão",
            redirect: ""
        };
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        const perguntas = [];
        API.get(`/perguntados/pergunta/${id}`).then((res) => {
            this.setState({
                totem_fk : res.data.data[0].totem_fk
            });
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
    }

    componentDidUpdate(){

    }

    startTime() {
        this.setState({
            interval: setInterval(() => {
                let novo = this.state.time + 0.1;
                this.setState({
                    time: Number(novo.toFixed(2)),
                },
                () =>{
                    setTimeout(() => {
                        if(this.state.time == 20){
                            this.props.conexao.emit("errou",this.props.conexao.id);
                            this.pauseTime();
                            this.setState({
                                view : true,
                                message : "Tempo esgotado!"
                            });
                            //Aqui ficará checando até o tempo limite
                            //Quando exceder, redirecionar
                        }
                    }, 100);
                });
            }, 100),
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
                this.setState({
                    view : true,
                    message : "Alternativa correta!"
                });
                this.pauseTime();
            }else{
                this.setState({
                    view : true,
                    message : "Alternativa incorreta!"
                });
                this.pauseTime();
                this.props.conexao.emit("errou",this.props.conexao.id);
            }
        });
        
    };
    handleModal = (mostra) => {
        if (this.state.view) {
            this.setState({ view: false });
            this.startTime();
            if(this.state.selecionada != 0 || this.state.time == 20){
                this.handleRedirect("/jogos/roleta/");
                if(this.state.selecionada == this.state.correta){
                    this.props.conexao.emit("acertou", {id: this.props.conexao.id, totem : this.state.totem_fk});
                }
            }
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
