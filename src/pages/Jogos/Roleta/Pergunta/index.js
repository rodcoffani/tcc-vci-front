import React, { Component } from "react";
import "./styles.css";
import API from "../../../../api";
import { useParams } from "react-router";

class Pergunta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questao: "",
            alternativas: [],
            selecionada : 0
        };
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        const perguntas = [];
        API.get(`/perguntados/pergunta/${id}`).then((res) => {
            console.log(res.data.data[0].json_question);
            for (var [key, value] of Object.entries(
                res.data.data[0].json_question.respostas
            )) {
                for (var [key1, value1] of Object.entries(value)) {
                    if (key1 != "certa") {
                        perguntas.push(value1);
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
    handleChange = (e) => {

    }

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
                                                value = {key}
                                                name = "op"
                                                type="radio"
                                                aria-label="Radio button for following text input"
                                                onChange = {(e)=>{
                                                    this.setState({
                                                        selecionada : e.target.value
                                                    });
                                                    console.log(this.state.selecionada);
                                                }}
                                            />
                                            {value}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <button className="btn btn-success">ENVIAR</button>
                </form>
            </React.Fragment>
        );
    }
}

export default Pergunta;
