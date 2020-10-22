import React, { Component } from "react";
import "./styles.css";
import API from "../../../../api";
import { useParams } from "react-router";
import { Alert } from "react-bootstrap";

class Pergunta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questao: "",
            alternativas: [],
            selecionada: 0,
            correta : 0
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
                    if(key1 == "certa"){
                        if(value1 == "true"){
                            console.log("A flag vale "+  flag);
                            this.setState({
                                correta : flag
                            });
                        }else{
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
        if(this.state.selecionada == this.state.correta){
            alert("acertou");
        }
    };

    render() {
        let ops = this.state.alternativas;
        return (
            <React.Fragment>
                <h2>{this.state.questao.enunciado}</h2>
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
                </form>
            </React.Fragment>
        );
    }
}

export default Pergunta;
