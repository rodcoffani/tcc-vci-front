import React, { Component } from "react";
import "./style.css";
import Header from "../../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import axios from "axios";
import API from "../../../api";
import ead from "../../../assets/images/ead-lab.png";
import $ from "jquery";
import BackgroundParticle from "../../../components/Background-particle";
import "font-awesome/css/font-awesome.min.css";
import { Redirect } from "react-router-dom";
import { BsFillEyeSlashFill } from "react-icons/bs";
import Sidebar from '../../../components/Sidebar/user';
import Wheel from '../../../components/Wheel/Wheel';
import image_000 from '../../../assets/images/jogo_10/image_000.png';
import image_001 from '../../../assets/images/jogo_10/image_001.png';
import image_002 from '../../../assets/images/jogo_10/image_002.png';
import image_003 from '../../../assets/images/jogo_10/image_003.png';
import image_004 from '../../../assets/images/jogo_10/image_004.png';
import image_005 from '../../../assets/images/jogo_10/image_005.png';
import image_006 from '../../../assets/images/jogo_10/image_006.png';
import image_007 from '../../../assets/images/jogo_10/image_007.png';
import image_008 from '../../../assets/images/jogo_10/image_008.png';
import image_009 from '../../../assets/images/jogo_10/image_009.png';
import image_010 from '../../../assets/images/jogo_10/image_010.png';
import image_011 from '../../../assets/images/jogo_10/image_011.png';
import image_012 from '../../../assets/images/jogo_10/image_012.png';
import image_013 from '../../../assets/images/jogo_10/image_013.png';
import image_014 from '../../../assets/images/jogo_10/image_014.png';
import image_015 from '../../../assets/images/jogo_10/image_015.png';
import image_016 from '../../../assets/images/jogo_10/image_016.png';
import image_017 from '../../../assets/images/jogo_10/image_017.png';

export default class Roleta extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Helmet title="Jogo 10" />
                <Sidebar pageSelected="reports"/>
                <Header headerTitle="Jogo de perguntas"/>
                <div className="content">
                    <div className="players">
                        <div className="p1">
                            <img className="profilePic" src="https://www.menshair.style/wp-content/uploads/2019/03/black-men-hairstyles-59.jpg"/>
                            <div className="employeeName">Danyel Sena</div>
                            <div className="totensContainer">
                                <img className="totens" src={image_000}/>
                                <img className="totens" src={image_003}/>
                                <img className="totens" src={image_005}/>
                                <img className="totens" src={image_007}/>
                                <img className="totens" src={image_009}/>
                                <img className="totens" src={image_011}/>
                                <img className="totens" src={image_013}/>
                                <img className="totens" src={image_015}/>
                                <img className="totens" src={image_017}/>
                            </div>
                        </div>
                        <div className="p2">
                            <img className="profilePic" src="https://i.pinimg.com/originals/07/a9/97/07a9978da38303b87c13243d55942df4.jpg"/>
                            <div className="employeeName">Caroline Santos</div>
                            <div className="totensContainer">
                                <img className="totens" src={image_000}/>
                                <img className="totens" src={image_003}/>
                                <img className="totens" src={image_005}/>
                                <img className="totens" src={image_007}/>
                                <img className="totens" src={image_009}/>
                                <img className="totens" src={image_011}/>
                                <img className="totens" src={image_013}/>
                                <img className="totens" src={image_015}/>
                                <img className="totens" src={image_017}/>
                            </div>
                        </div>
                    </div>
                    <div className="quizWheel">
                        <Wheel></Wheel>
                    </div>
                    <div className="questionsBar">
                        <span className="streak1">&nbsp;</span>
                        <span className="streak2">&nbsp;</span>
                        <span className="streak3">&nbsp;</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
