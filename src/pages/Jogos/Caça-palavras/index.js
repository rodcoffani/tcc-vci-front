import React, { Component } from "react";
import "../Quiz/style.css";
import Header from "../../../components/Header";
import { Helmet } from "react-helmet";
import "font-awesome/css/font-awesome.min.css";
import { Container, Col, Row } from "react-bootstrap";
import {faFlag} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class Caca_palavras_rules extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Helmet title="Jogo 2" />
                <Header headerTitle="Jogo de Caça-palavras"/>

                    <h1 className="titulo_objetivo">Objetivos:</h1>

                    <Container className="container_descricao">
                        <ul className="ul_objetivo" style={{textAlign:"justify", paddingRight:"18%", paddingTop:"2%"}}>
                        <li><FontAwesomeIcon icon={faFlag}/> Encontrar a palavra ou conceito utilizando o mínimo de tentativas;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Para cada vez que o participante clicar e arrastar para selecionar as letras e formar a palavra é contada uma tentativa;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Para cada palavra selecionada corretamente o participante irá pontuar positivamente e para cada tentativa mal sucedida será pontuado negativamente;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> O contador de tempo irá iniciar assim que o participante clicar no botão "jogar";</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Não existe um tempo mínimo para terminar o jogo, mas ao
                        final serão mostrados os melhores tempos dos jogadores cadastrados.</li>
                        </ul>

                        <Row style={{paddingRight:"35%"}}>
                            <Container className="play">
                                <a style={{color:"white", textDecoration:"none"}} href="/jogos/caça_palavras">Jogar</a>
                            </Container>

                            <Container className="play">
                                <a style={{color:"white", textDecoration:"none"}} href="/">Voltar</a>
                            </Container>
                        </Row>
                    </Container>

                    <br></br>

                    
            </React.Fragment>
        );
    }
}