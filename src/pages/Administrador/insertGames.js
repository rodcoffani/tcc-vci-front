import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/admin';
import { Container, Row, Col, Form} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../components/Background-particle'
import addQuestion from '../../assets/images/mais.PNG'
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormLabel } from 'react-bootstrap';

class insertGames extends Component {
    render() {
        return(
            <div>
                <Sidebar pageSelected="insertGames" />
                <Header headerTitle="Administrador"/>
                <React.Fragment>
                <Container fluid="xl">
                    <BackgroundParticle></BackgroundParticle>
                </Container>
                <center>
                    <div className="mother">
                        <br />
                        <div className="insert-games">
                            <div className="labels-insert">
                                <Form>
                                    <FormLabel>Selecionar tipo de jogo:</FormLabel><br />
                                    <FormLabel>Nome do jogo:</FormLabel>
                                    <FormLabel>Perguntas:</FormLabel>
                                </Form>
                            </div>
                            <div className="inputs-insert">
                                <Form>
                                    <FormControl as="select">
                                        <option value="a" className = "select-jogos">Perguntados</option>
                                        <option value="b" className = "select-jogos">Quiz</option>
                                    </FormControl>
                                    <FormControl type="text" placeholder="Digite o nome do jogo" className = "input"/>
                                    <FormControl type="text" placeholder="Digite o enunciado da pergunta" className = "input"/>
                                  
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Radio aria-label="Radio button for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl type="text" placeholder="Digite uma alternativa de resposta" className = "input"/>
                                    </InputGroup>
                         
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Radio aria-label="Radio button for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl type="text" placeholder="Digite uma alternativa de resposta" className = "input"/>
                                    </InputGroup>

                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Radio aria-label="Radio button for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl type="text" placeholder="Digite uma alternativa de resposta" className = "input"/>
                                    </InputGroup>

                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Radio aria-label="Radio button for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl type="text" placeholder="Digite uma alternativa de resposta" className = "input"/>
                                    </InputGroup>

                                    
                                    <img src={addQuestion} className="add-question"></img>
                                 </Form>
                            </div>
                        </div>

                        <br />
                    </div>
                </center>
                </React.Fragment>
            </div>
        );
    }
};

export default insertGames;