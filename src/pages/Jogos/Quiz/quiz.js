import React, { Component } from "react";
import "../Quiz/style.css";
import Header from "../../../components/Header";
import { Helmet } from "react-helmet";
import "font-awesome/css/font-awesome.min.css";
import Cronometro from "../../../components/Cronometro/cron"
import { Container } from "react-bootstrap";
import { faFlag } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return ( 
            <React.Fragment>
            <Helmet title = "Jogo 1" />
            <Header headerTitle = "Jogo de Perguntas" />
            <div className='container_jogo'>
                <div className='hud'>
                    <div className="tempo">
                        <div className='campValor'>Tempo</div>
                        <div className='cronometro'><Cronometro></Cronometro></div>
                    </div>
                    <div className="pontos">
                        <div className='campValor'>Pontos</div>
                        <div className='points'>points</div>
                    </div>
                </div>
                <div className='quiz'>
                        <div className='enunciado'>enunciado</div>
                        <div className='alternativas'>
                            <div className='groupAlt'>
                                <div className='altA'>a</div>
                                <div className='altB'>b</div>
                                <div className='altC'>c</div>
                                <div className='altD'>d</div>
                            </div>
                        </div>
                </div>
            </div>

            </React.Fragment>
        );
    }
}