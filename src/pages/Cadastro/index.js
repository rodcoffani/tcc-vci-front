import React from 'react';
import './styles.css';
import { Container, Row, Col} from 'react-bootstrap'
import { Component } from "react"
import {Helmet} from "react-helmet"
import Particles from 'react-particles-js'; 
import { cpfMask } from './mask'

export default class Saudacao extends Component{
    constructor(props) {
        super(props)
        this.state = { cpf: '' }
        this.handlechange = this.handlechange.bind(this)
    }
    
      handlechange(e) {
    
        this.setState({ cpf: cpfMask(e.target.value) })
    }
    state={
        nome: this.props.nome
    }
    setNome(e){
        this.setState({ nome:e.target.value})
    }
    render(){
        const { cpf } = this.state
        const {nome} = this.state
        return (
                
            <React.Fragment>                
                <Helmet title="Cadastro" />
                
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
            
                    <Container fluid="xl">
                        <Row className="TopShelf">
                            <h1 className="CadT">CADASTRO</h1>   
                        </Row>
                        <Row>
                            <Col>
                                <div className="FormC">
                                <form>
                                <p className='FieldD'><b className="Presc">Nome:</b><input type="text" placeholder="Nome" className="inputC" required onChange={e=>this.setNome(e)} maxLength="45"></input></p>
                                <p className='FieldD'><b className="Presc">Sobrenome:</b><input type="text" placeholder="Sobrenome" className="inputCS" required maxLength="45"></input></p>
                                <p className='FieldD'><b className="Presc">E-mail:</b><input type="text" placeholder="E-mail" className="inputC" required maxLength="45"></input></p>
                                <p className='FieldD'><b className="Presc">CPF:</b><input type="text" placeholder="CPF" className="inputCC" required value={cpf} onChange={this.handlechange}></input></p>
                                <input type="submit" value="Cadastrar" className="CadBtn"></input>
                                </form>
                                </div>
                            </Col>
                        </Row>
                        <hr/>
                        <a href="https://ead-lab.coursify.me" className="linkC">https://ead-lab.coursify.me/</a>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
}