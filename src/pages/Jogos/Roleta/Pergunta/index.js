import React, { Component } from 'react';
import './styles.css';
import API from "../../../../api";
import { useParams } from "react-router";



class Pergunta extends Component{
    constructor(props) {
        super(props);
        this.state = {
            questao : '',
            alternativas : []
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        const perguntas = [];
        API.get(`/perguntados/pergunta/${id}`).then((res) =>{
            console.log(res.data.data[0].json_question);
            for(var [key, value] of Object.entries(res.data.data[0].json_question.respostas)){
                for(var [key1, value1] of Object.entries(value)){
                    if(key1 != 'certa'){
                        perguntas.push(value1);
                    }
                }
            }
            this.setState({
                questao : res.data.data[0].json_question,
                alternativas : perguntas
            });
        });
        console.log(perguntas);
    }
    render(){
        let ops = this.state.alternativas;
        return(
            <React.Fragment>
                <h2>{this.state.questao.enunciado}</h2>
                <form>
                    {
                        ops.map((value) =>{
                            return(
                                <div className="alternativas">
                                    <div>
                                        {value}
                                    </div><hr/>
                                </div>
                            );
                        })
                    }                    
                </form>
            </React.Fragment>
        );
    }
    

}


export default Pergunta;