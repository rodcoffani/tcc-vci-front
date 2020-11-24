import React, { Component } from "react";
import "../Quiz/style.css";
import Header from "../../../components/Header";
import API from "../../../api";
import Sidebar from "../../../components/Sidebar/employee";
import SidebarADM from "../../../components/Sidebar/admin";
import { Helmet } from "react-helmet";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row } from "react-bootstrap";
import {faFlag} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class Roleta_rules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin : null,
            flagAdm : null
        };
    }
    
    componentDidMount(){
        let tk = {
            token: localStorage.getItem("authTk"),
        };
        API.post(
            "login/teste-token", 
            tk
        ).then((res) => {
            console.log(res.data.decoded.admin)
            if(res.data.decoded.admin){
                console.log("é ademir")
                this.setState({
                    admin: <SidebarADM/>,
                    flagAdm : <a style={{color:"white", textDecoration:"none"}} href="/administrador">Voltar</a>
                });
            }else{
                this.setState({
                    admin: <Sidebar/>,
                    flagAdm : <a style={{color:"white", textDecoration:"none"}} href="/funcionario">Voltar</a>
                });
            }
        })
    }


    render() {
        return (
            <React.Fragment>
                <Helmet title="Roleta" />
                {this.state.admin}
                <Header headerTitle="Jogo da Roleta"/>
                    
                    <h1 className="titulo_objetivo">Objetivos:</h1>

                    <Container className="container_descricao">
                        <ul className="ul_objetivo" style={{textAlign:"justify", paddingRight:"18%", paddingTop:"2%"}}>
                        <li><FontAwesomeIcon icon={faFlag}/> Primeiramente o participante deve escolher entre jogar com o aplicativo ou com um oponente pré cadastrado;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> O participante irá clicar no botão para sortear uma questão e conforme o tema da pergunta deverá clicar na alternativa que julgar correta, se acertar você continua, caso erre é a vez do seu oponente;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Para cada 3 respostas corretas o participante será premiado com um toten referente ao tema escolhido;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Após dada a resposta o participante será informado se acertou ou errou, mas não irá visualizar qual a resposta correta no caso de errar, o sistema passará a vez para o oponente;</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> O contador de tempo irá iniciar assim que o participante clicar no botão "jogar";</li>
                        <br></br>
                        <li><FontAwesomeIcon icon={faFlag}/> Vence o participante que conquistar todos os totens.</li>
                        </ul>

                        <Row style={{paddingRight:"35%"}}>
                            <Container className="play">
                                {
                                    this.state.flagAdm
                                }
                                
                            </Container>
                            <Container className="play">
                                <a style={{color:"white", textDecoration:"none"}} href="/jogos/roleta/queue">Jogar</a>
                            </Container>
                        </Row>
                    </Container>

                    <br></br>

            </React.Fragment>
        );
    }
}