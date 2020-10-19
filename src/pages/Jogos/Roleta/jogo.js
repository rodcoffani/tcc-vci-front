import React, { Component } from "react";
import "./style.css";
import Header from "../../../components/Header";
import API from "../../../api";
import { Helmet } from "react-helmet";
import "font-awesome/css/font-awesome.min.css";
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

import socketIOClient from "socket.io-client";

//MARTIAL FAZER O TOKEN
//COM AMOR THIAGO E PRA 

export default class Roleta extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Helmet title="Jogo 10" />
                {/* Inserir sidebar */}
                <Header headerTitle="Jogo da Roleta"/>
                <div className="content-roleta">
                    <div className="playersArea">
                        <div className="player p1">
                            <img className="profilePic" src="https://www.menshair.style/wp-content/uploads/2019/03/black-men-hairstyles-59.jpg" alt="Imagem do participante 1"/>
                            <div className="employeeName">Danyel</div>
                            <div className="totensContainer">
                                <img className="totens" src={image_000} alt="Totem do jogo"/>
                                <img className="totens" src={image_002} alt="Totem do jogo"/>
                                <img className="totens" src={image_004} alt="Totem do jogo"/>
                                <img className="totens" src={image_006} alt="Totem do jogo"/>
                                <img className="totens" src={image_008} alt="Totem do jogo"/>
                                <img className="totens" src={image_010} alt="Totem do jogo"/>
                                <img className="totens" src={image_012} alt="Totem do jogo"/>
                                <img className="totens" src={image_014} alt="Totem do jogo"/>
                                <img className="totens" src={image_016} alt="Totem do jogo"/>
                            </div>
                        </div>
                        <div className="player p2">
                            <img className="profilePic" src="https://i.pinimg.com/originals/07/a9/97/07a9978da38303b87c13243d55942df4.jpg" alt="Imagem do participante 2"/>
                            <div className="employeeName">Caroline</div>
                            <div className="totensContainer">
                                <img className="totens" src={image_001} alt="Totem do jogo"/>
                                <img className="totens" src={image_003} alt="Totem do jogo"/>
                                <img className="totens" src={image_005} alt="Totem do jogo"/>
                                <img className="totens" src={image_007} alt="Totem do jogo"/>
                                <img className="totens" src={image_009} alt="Totem do jogo"/>
                                <img className="totens" src={image_011} alt="Totem do jogo"/>
                                <img className="totens" src={image_013} alt="Totem do jogo"/>
                                <img className="totens" src={image_015} alt="Totem do jogo"/>
                                <img className="totens" src={image_017} alt="Totem do jogo"/>
                            </div>
                        </div>
                    </div>
                    <div className="quizWheel">
                        <Wheel></Wheel>
                    </div>
                    <div className="questionsBar">
                        <div className="streak1">&nbsp;</div>
                        <div className="streak2">&nbsp;</div>
                        <div className="streak3">&nbsp;</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}