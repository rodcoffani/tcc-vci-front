import React, { useEffect, useState } from "react";
import "./style.css";

import wheel from "../../assets/images/Wheel.png";
import marker from "../../assets/images/Button-Marker.png";

const Wheel = () => {
    // Constrói  o this.state com valores padrões
    const [wheelObj, setWheelObj] = useState({});
    const [vez, setVez] = useState(0);
    const [sorteados, setSorteados] = useState([]);

    //Quando o componente da mount (Carrega a classe)
    //Pega-se os elementos Wheel e Button para girar depois
    //Usando Javascript
    useEffect(() => {
        setWheelObj(document.querySelector(".wheel"));
        setVez(1);
        setSorteados([]);
    }, [])
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
    const validateSort = (val) => {
        var aux = false;
        
        sorteados.map((item) => {
            if (val === item) {
                aux = true;
            }
            return null;
        });

        return aux;
    };

    //funcao chamada quando clica no botao girar
    const handleButtonClick = () => {
        //Sorteia uma das categorias de 1 a 9 (inclusive)
        let sortedVal = 0;

        do {
            sortedVal = Math.floor(Math.random() * 9);
        } while (validateSort(sortedVal));
        
        
        //Deg representa a rotacao a ser aplicada a wheel. de 40 em 40
        //Pois 9 categorias / 360 graus = 40 graus
        let deg = Math.floor(3600 * vez + sortedVal * 40);
        deg = 20 + deg;
        console.log(sortedVal);
        //Aqui no Deg ele nao gira de forma constante pois Math.Randon retorna ponto flutuante
        //Para que gire de forma constante use Math.floor em sorted val.
        
        setVez(vez + 1);
        
        // Para regular o tempo que ele demora para parar troque o valor de segundos
        
        wheelObj.style.transition = 'all 6s ease-out';
        wheelObj.style.transform = `rotate(${deg}deg`

        //Guarda a categoria no State`
        console.log(sorteados);
        setSorteados([...sorteados, sortedVal]);
    };
    
    return (
        <div className="App" id="app">
            <img src={wheel} className="wheel" alt="Roleta"/>
            <img
                src={marker}
                className="marker"
                onClick={handleButtonClick}
                alt="Marcador da Roleta"
            />
        </div>
    );
}

export default Wheel;
