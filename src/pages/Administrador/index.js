import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Row, Col} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import Particles from 'react-particles-js'; 

class admin extends Component {
    render() {
        return(
            <div>
                <Header headerTitle="Administrador"/>
                <Sidebar />
                <React.Fragment>
                <Container fluid="xl">
                    <Particles className="Part"
                        params={{ 
                        "particles": {
                            "number": {
                                "value": 60,
                                    "density": {
                                        "enable": true,
                                        "value_area": 1000
                                    }
                                },
                                "color": {
                                    "value": "#f00080"
                                },
                                "shape": {
                                    "type": "circle",
                                    "stroke": {
                                        "width": 2,
                                        "color": "#3030ff"
                                    },
                                    "polygon": {
                                        "nb_sides": 3
                                    },
                                },
                                "opacity": {
                                    "value": 0.4008530152163807,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "color": "#ffffff",
                                    "width": 0.6413648243462091
                                },
                                "size": {
                                    "value": 1.5,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 6,
                                    "direction": "none",
                                    "random": true,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "window",
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "grab"
                                    },
                                    "resize": true
                                },
                            },
                        "retina_detect": true
                        }} 
                    /> 
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