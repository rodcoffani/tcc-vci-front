import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/admin';
import { Container, Row, Col, Form} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../components/Background-particle'

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
                            <div className="game-type-combo">
                                    Selecionar tipo do jogo: <br />
                                    <select className = "select-game-type">
                                        <option value="a">Quiz</option>
                                        <option value="b">Perguntados</option>
                                    </select>
                            </div> 
                            <div className = "form-insert-questions">
                                <Form>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" className = "input"/>
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