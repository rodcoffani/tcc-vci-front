import React, { Component } from "react";
import "./style.css";
import wheel from "../../assets/images/Wheel.png";
import API from "../../api";
import marker from "../../assets/images/Button-Marker.png";
import {withRouter } from "react-router-dom";

class Wheel extends Component {
    //Quando o componente da mount (Carrega a classe)
    //Pega-se os elementos Wheel e Button para girar depois
    //Usando Javascript
    componentDidMount() {
        this.state = {
            wheel: document.querySelector(".wheel"),
            startButton: document.querySelector(".button"),
            numeroJogo: 0,
            vez: 1,
            sorteados: [],
        };
    }
    /*

    =============== CATEGORIAS DE ACORDO COM O NUMERO ===============
        0 - Ordem de Producao e Preparacao de maquina
        1 - Politica de Qualidade
        2 - Indicadores de Qualidade
        3 - Identificacao de Rastreabilidade
        4 - Controle de Qualidade
        5 - Acao corretiva
        6 - Instrucao operacional
        7 - Procedimentos de Qualidade
        8 - Desperdicio e sobra de Processo 

    */
    
    //funcao para validar
    validate = (val) => {
        var aux = false;

        this.state.sorteados.map((item) => {
            if (val == item) {
                aux = true;
            }
        });

        return aux;
    };

    handleRedirect = (newPath)=>{
        this.props.history.push(newPath);
    }

    //funcao chamada quando clica no botao girar
    handleButtonClick = () => {
        //Sorteia uma das categorias de 1 a 9 (inclusive)
        let sortedVal = 0;
        do {
            sortedVal = Math.floor(Math.random() * 9);
        } while (this.validate(sortedVal));

        //Deg representa a rotacao a ser aplicada a wheel. de 40 em 40
        //Pois 9 categorias / 360 graus = 40 graus
        let deg = Math.floor(3600 * this.state.vez + sortedVal * 40);
        deg = 20 + deg;
        console.log(sortedVal);
        //Aqui no Deg ele nao gira de forma constante pois Math.Randon retorna ponto flutuante
        //Para que gire de forma constante use Math.floor em sorted val.

        this.setState({
            wheel: document.querySelector(".wheel"),
            startButton: document.querySelector(".button"),
            vez: this.state.vez + 1,
        });

        //Para regular o tempo que ele demora para parar troque o valor de segundos
        this.state.wheel.style.transition = "all 6s ease-out";
        this.state.wheel.style.transform = `rotate(${deg}deg)`;

        //Guarda a categoria no State
        this.setState({
            numeroJogo: sortedVal,
            sorteados: [sortedVal].concat(this.state.sorteados),
        });

        
        setTimeout(()=>{
            API.get(`/perguntados/${sortedVal}`).then((res)=>{
                this.handleRedirect(`/jogos/roleta/pergunta/${res.data.data.idquestion}`);
            })
        }, 7000)
    };

    render() {
        return (
            <div className="App" id="app">
                <img src={wheel} className="wheel" />
                <img
                    src={marker}
                    className="marker"
                    onClick={this.handleButtonClick}
                />
            </div>
        );
    }
}

export default withRouter(Wheel);
