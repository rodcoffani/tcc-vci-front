import React, { Component } from "react";
import "../Quiz/style.css";
import Header from "../../../components/Header";
import { Helmet } from "react-helmet";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row } from "react-bootstrap";
import {faFlag} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import API from "../../../api";
export default class Quiz_rules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log: localStorage.getItem('authTk'),
        };
    }
    handleClick = (caminho) => {
        if(!this.state.log){
            alert("Por favor, entre na sua conta para jogar.");
            this.props.history.push("/Login");
        }else{
            this.props.history.push(caminho);
        }
    };

    render() {
        return (
            <React.Fragment>
                <Helmet title="Jogo 1" />
                <Header headerTitle="Jogo Quiz"/>

                    <h1 className="titulo_objetivo">Objetivos:</h1>

                    <Container className="container_descricao">
                        <ul className="ul_objetivo" style={{textAlign:"justify", paddingRight:"18%", paddingTop:"2%"}}>
                        <li><FontAwesomeIcon icon={faFlag}/> O participante deverá responder a questão escolhendo uma das quatro alternativas;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Para cada resposta correta, o participante pontuará
                        positivamente;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Após dada a resposta o participante será informado se
                        acertou ou errou, mas não irá visualizar qual a resposta correta no caso de errar. O sistema irá pular automaticamente para a próxima pergunta;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> O contador de tempo irá iniciar assim que o participante clicar no botão "jogar";</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Não existe um tempo mínimo para terminar o jogo, mas ao
                        final serão mostrados os melhores tempos dos jogadores cadastrados.</li>
                        </ul>

                        <Row style={{paddingRight:"35%"}}>
                            <Container className="play">
                                <a style={{color:"white", textDecoration:"none"}} href="/">Voltar</a>
                            </Container>

                            <Container className="play">
                                <a style={{color:"white", textDecoration:"none"}} href="#" onClick={() => this.handleClick("/jogos/quiz")}>Jogar</a>
                                
                            </Container>
                        </Row>
                    </Container>

                    <br></br>

            </React.Fragment>
        );
    }
}
