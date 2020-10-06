import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/employee';
import Foto from '../../assets/images/nn.jpg';
import { Container, FormControl, Form, Col, Row, Image} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../components/Background-particle'

class employee extends Component{
    render() {
        return(
            <div>
            <Sidebar pageSelected="reports"/>
            <Header headerTitle="Funcionario"/>
            <React.Fragment>
            <Container fluid="xl">
                <BackgroundParticle />
            </Container>
            <center>
                <div className="mother">
                    <br />
                    <div className="ranking">
                        <div className="ranking-title">
                            <div className="ranking-title-combo">
                                <div className="ranking-title-combo-title">Filtrar por jogo: <br /></div>
                                <Form>
                                    <FormControl as="select">
                                        <option value="a" className = "select-jogos">Perguntados</option>
                                        <option value="b" className = "select-jogos">Quiz</option>
                                    </FormControl>
                                </Form>
                            </div> 
                            <div className="ranking-title-title">
                                <p className="ranking-text">Ranking</p>
                            </div>
                        </div>
                        <br /><br /><br /><br />
                        <div className="ranking-body">
                            <table class="table table-striped header-fixed">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Jogo</th>
                                    <th scope="col">Tempo</th>
                                    <th scope="col">Pontos</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                <tr>
                                    <td>1</td>
                                    <td>Quiz</td>
                                    <td>21s</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Perguntados</td>
                                    <td>20s</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Quiz</td>
                                    <td>14s</td>
                                    <td>18</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="employee">
                        <div className="employee-title">
                            <p className="employee-text"> Seu Perfil</p>
                        </div>
                        <div className="employee-body">
                            <table class="table table-striped header-fixed-employee">
                                <thead>
                                    <div className="profile-picf">
                                        <Col xs={6} md={4}>
                                            <Image src={Foto} roundedCircle />
                                        </Col>
                                    </div>
                                    <div className="nome-profilef"> 
                                        Funcionaria 1
                                    </div>
                                </thead>
                                <br></br><br></br><br></br><br></br><br></br><br></br>
                                <tbody>
                                    <div className="profile-func">
                                        <tr>
                                            <td><b>Usuário</b></td>
                                            <td>funcionaria_1</td>
                                        </tr>
                                        <tr>
                                            <td><b>Departamento</b></td>
                                            <td>Produção</td>
                                        </tr>
                                        <tr>
                                            <td><b>CPF</b></td>
                                            <td>147.154.126-47</td>
                                        </tr>
                                        <tr>
                                            <td><b>Acertos</b></td>
                                            <td><b>Erros</b></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>9</td>
                                        </tr>
                                    </div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </center>
            </React.Fragment>
        </div>
        );
    };
};

export default employee;