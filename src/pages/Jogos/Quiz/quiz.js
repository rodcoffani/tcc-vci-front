import React, { Component } from "react";
import "../Quiz/style.css";
import Header from "../../../components/Header";
import { Helmet } from "react-helmet";
import "font-awesome/css/font-awesome.min.css";
import { Container } from "react-bootstrap";
import {faFlag} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Helmet title="Jogo 1" />
                <Header headerTitle="Jogo de Perguntas"/>

                    <h1 className="titulo_quiz">Objetivos:</h1>

                    <Container className="container_descricao">
                        <ul className="ul_quiz" style={{textAlign:"justify", paddingRight:"18%", paddingTop:"2%"}}>
                        <li><FontAwesomeIcon icon={faFlag}/> O participante deverá responder a questão escolhendo uma das quatro alternativas;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Para cada resposta correta, o participante pontuará
                        positivamente e para cada resposta errada, pontuará negativamente;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Após dada a resposta o participante será informado se
                        acertou ou errou, mas não irá visualizar qual a resposta correta no caso de errar. O sistema irá pular automaticamente para a próxima pergunta;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> O contador de tempo irá iniciar assim que o participante clicar no botão "jogar";</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Não existe um tempo mínimo para terminar o jogo, mas ao
                        final serão mostrados os melhores tempos dos jogadores cadastrados.</li>
                        </ul>
                    </Container>

                    <br></br>

                    <Container className="quiz_play">
                        <a style={{color:"white"}} href="quiz">Jogar</a>
                    </Container>

            </React.Fragment>
        );
    }
}