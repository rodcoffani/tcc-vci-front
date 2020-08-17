import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/Header';
import { Container, Row, Col} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import Particles from 'react-particles-js'; 

class admin extends Component {
    render() {
        return(
            <div>
                <Header />
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
                                <div className="ranking-name">Nome</div>
                                <div className="ranking-points">Pontos</div>
                                <div className="ranking-game">Jogo</div>
                                <div className="ranking-time">Tempo</div>
                                
                                {/* aqui faria por for, coloquei uma fixa só p ter exemplo */}
                                <div className="ranking-name">carlos</div>
                                <div className="ranking-points">20</div>
                                <div className="ranking-game">quiz</div>
                                <div className="ranking-time">20s</div>
                            </div>
                        </div>
                        <div className="employee">aaaaa</div>
                    </div>
                </center>
                </React.Fragment>
            </div>
        );
    }
};

export default admin;