import React, { Component } from "react";
import "./style.css";

import wheel from "../../assets/images/Wheel.png";
import marker from "../../assets/images/Button-Marker.png";

class Wheel extends Component {
    //Quando o componente da mount (Carrega a classe)
    //Pega-se os elementos Wheel e Button para girar depois
    //Usando Javascript
    componentDidMount() {
        this.state = {
            wheel: document.querySelector(".wheel"),
            startButton: document.querySelector(".button"),
            numeroJogo: 0,
        };
    }
    /*

    =============== CATEGORIAS DE ACORDO COM O NUMERO ===============
        1 - Ordem de Producao e Preparacao de maquina
        2 - Politica de Qualidade
        3 - Indicadores de Qualidade
        4 - Identificacao de Rastreabilidade
        5 - Controle de Qualidade
        6 - Acao corretiva
        7 - Instrucao operacional
        8 - Procedimentos de Qualidade
        9 - Desperdicio e sobra de Processo 

    */

    //funcao chamada quando clica no botao girar
    handleButtonClick = () => {
        //Sorteia uma das categorias de 1 a 9 (inclusive)
        let sortedVal = Math.random() * 9 + 1;

        //Deg representa a rotacao a ser aplicada a wheel. de 40 em 40
        //Pois 9 categorias / 360 graus = 40 graus
        let deg = Math.floor(3600 + (sortedVal - 1) * 40);
        //Aqui no Deg ele nao gira de forma constante pois Math.Randon retorna ponto flutuante
        //Para que gire de forma constante use Math.floor em sorted val.

        let newWheel = this.state.wheel;

        //Para regular o tempo que ele demora para parar troque o valor de segundos
        newWheel.style.transition = "all 5s ease-out";
        newWheel.style.transform = `rotate(${deg}deg)`;

        //Guarda a categoria no State
        this.setState({
            numeroJogo: Math.floor(sortedVal),
        });

        //console.log(Math.floor(sortedVal));
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

export default Wheel;
