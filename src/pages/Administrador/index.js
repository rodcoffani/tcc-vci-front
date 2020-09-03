import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Row, Col} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import backgroundParticle from '../../components/Background-particle'

class admin extends Component {
    render() {
        return(
            <div>
                <Sidebar 
                    item1 = "Perfil"
                    rotaItem1 = "perfil"
                    item2 = "Cadastro de Jogos" 
                    rotaItem2 = "cadastro"
                    item3 = "Validar funcionários"
                    rotaItem3 = "validacao"
                    item4 = "Relatórios"
                    rotaItem4 = "relatorio"
                    
                />
                <Header headerTitle="Administrador"/>
                <React.Fragment>
                <Container fluid="xl">
                    <backgroundParticle></backgroundParticle>
                </Container>
                <center>
                    <div className="mother">
                        <div className="ranking">
                            <div className="ranking-title">
                                <div className="ranking-title-combo">
                                    Filtrar por jogo: <br />
                                    <select>
                                        <option value="a">Quiz</option>
                                        <option value="b">Perguntados</option>
                                    </select>
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
                                        <th scope="col">Nome</th>
                                        <th scope="col">Pontos</th>
                                        <th scope="col">Tempo</th>
                                        <th scope="col">Jogo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* a fazer: colocar infos na tabela por "for" ? puxando do banco */}
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>20</td>
                                        <td>20s</td>
                                        <td>Quiz</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mark</td>
                                        <td>20</td>
                                        <td>20s</td>
                                        <td>Quiz</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Mark</td>
                                        <td>20</td>
                                        <td>20s</td>
                                        <td>Quiz</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="employee">
                            <div className="employee-title">
                                <p className="employee-text">Funcionários</p>
                            </div>
                            <div className="employee-body">
                                <table class="table table-striped header-fixed-employee">
                                <thead>
                                    <tr>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Validação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* a fazer: colocar infos na tabela por "for" ? puxando do banco --> link do validar mandar pra pag de validação que ainda n foi feita */}
                                    <tr>
                                        <td>Mark</td>
                                        <td>validado</td>
                                    </tr>
                                    <tr>
                                        <td>Mark</td>
                                        <td><a href="">VALIDAR</a></td>
                                    </tr>
                                    <tr>
                                        <td>Mark</td>
                                        <td>validado</td>
                                    </tr>
                                    <tr>
                                        <td>Mark</td>
                                        <td>validado</td>
                                    </tr>
                                    <tr>
                                        <td>Mark</td>
                                        <td>validado</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </center>
                </React.Fragment>
            </div>
        );
    }
};

export default admin;