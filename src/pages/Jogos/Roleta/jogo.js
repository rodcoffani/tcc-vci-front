import React, { Component } from "react";
import "./style.css";
import { Button, Modal } from "react-bootstrap";
import Header from "../../../components/Header";
import API from "../../../api";
import { Helmet } from "react-helmet";
import "font-awesome/css/font-awesome.min.css";
import Wheel from "../../../components/Wheel/Wheel";
import image_000 from "../../../assets/images/jogo_10/image_000.png";
import image_001 from "../../../assets/images/jogo_10/image_001.png";
import image_002 from "../../../assets/images/jogo_10/image_002.png";
import image_003 from "../../../assets/images/jogo_10/image_003.png";
import image_004 from "../../../assets/images/jogo_10/image_004.png";
import image_005 from "../../../assets/images/jogo_10/image_005.png";
import image_006 from "../../../assets/images/jogo_10/image_006.png";
import image_007 from "../../../assets/images/jogo_10/image_007.png";
import image_008 from "../../../assets/images/jogo_10/image_008.png";
import image_009 from "../../../assets/images/jogo_10/image_009.png";
import image_010 from "../../../assets/images/jogo_10/image_010.png";
import image_011 from "../../../assets/images/jogo_10/image_011.png";
import image_012 from "../../../assets/images/jogo_10/image_012.png";
import image_013 from "../../../assets/images/jogo_10/image_013.png";
import image_014 from "../../../assets/images/jogo_10/image_014.png";
import image_015 from "../../../assets/images/jogo_10/image_015.png";
import image_016 from "../../../assets/images/jogo_10/image_016.png";
import image_017 from "../../../assets/images/jogo_10/image_017.png";
import { connect, connection } from "react-redux";
import store from "../../../config/store";

function mapStateToProps(state) {
    return {
        ...state.playerCon,
    };
}

class Roleta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imagesTotensPB: [
                image_001, image_003, image_005,
                image_007, image_009, image_011,
                image_013, image_015, image_017
            ],
            imagensTotens : [
                image_000, image_002, image_004,
                image_006, image_008, image_010,
                image_012, image_014, image_016
            ],
            view: false,
            message: "",
            jsx: null,
            flag: true
        };


    }
    componentDidMount() {

        for (var i = 0; i < this.props.player.length; i++) {
            if (this.props.player[i].id === this.props.conexao.id) {
                if (this.props.player[i].available) {
                    this.setState({
                        jsx: <Wheel></Wheel>,
                    });
                }
            }
        }
        this.props.conexao.off("swap").on("swap", (e) => {
            this.swap(e);
            store.dispatch({
                type: "SET_CON",
                payload: {
                    conexao: this.props.conexao,
                    player: e,
                },
            });

        });

        this.props.conexao.off("conquistaTotem").on("conquistaTotem", (e)=>{
            store.dispatch({
                type: "SET_CON",
                payload: {
                    conexao: this.props.conexao,
                    player: e,
                },
            });
            this.totemAlert(e);
        });
    
        this.props.conexao.off("winner").on("winner", (e)=>{
            console.log("winner");
            this.setWinner(e);
            store.dispatch({
                type: "SET_CON",
                payload: {
                    conexao: this.props.conexao,
                    player: e,
                },
            });
        })
        
    }

    handleModal = (mostra) => {
        if (this.state.view) {
            this.setState({ view: false });
            // this.setState({
            //     question: this.state.questions.questions[this.state.indice],
            // }); // ta dando erro
        } else {
            this.setState({ view: true });
        }
    };

    setWinner = (arg) => {
        let tk = {
            token: localStorage.getItem("authTk"),
        };
        API.post(
            "login/teste-token", 
            tk
        ).then((res) => {
            for(var i = 0; i < arg.length; i++){
                if (arg[i].id === this.props.conexao.id && arg[i].totem.length === 9){
                    const dadosPlayer = {
                        idUser : res.data.decoded.iduser,
                        points : arg[i].pontos,
                        time : arg[i].time
                    };
                    // alert("Parabéns, você ganhou o jogo perguntados!");
                    this.setState({
                        view: true,
                        message : "Parabéns, você ganhou o jogo perguntados!"
                    });
                    API.post("perguntados/insert-ranking", dadosPlayer);
                    break;
                }else{
                    const dadosPlayer = {
                        idUser : res.data.decoded.iduser,
                        points : arg[i].pontos,
                        time : arg[i].time
                    };
                    // alert("Infelizmente você não ganhou o jogo perguntados, boa sorte na próxima!");
                    this.setState({
                        view: true,
                        message : "Infelizmente você não ganhou o jogo perguntados, boa sorte na próxima!"
                    });
                    API.post("perguntados/insert-ranking", dadosPlayer);
                }
            }
        });
       
    }

    totemAlert = (arg) => {
        console.log(arg);
        for(var i = 0; i < arg.length; i++){
            if (arg[i].id === this.props.conexao.id){
                if(arg[i].totem.length != 0){
                    var aux =arg[i].totem.length;
                    var idTotem = {
                        idTotem : arg[i].totem[aux - 1]
                    }
                    API.post("perguntados/name-totem", idTotem).then((res) =>{
                        this.setState({
                            view: true,
                            message : `Parabéns você conquistou o totem sobre ${res.data.data.name_toten}`
                        });
                        // alert(`Parabéns você conquistou o totem sobre ${res.data.data.name_toten}`);
                    });
                }
            }
        }
    };

    swap = (arg) => {
        for (var i = 0; i < arg.length; i++) {
            if (arg[i].id === this.props.conexao.id) {
                if (arg[i].available) {
                    this.setState({
                        jsx: <Wheel></Wheel>,
                    });
                } else {
                    this.setState({
                        jsx: "<div></div>",
                    });
                }
            }
        }
    };

    render() {
        return (
            <React.Fragment>
                <Helmet title="Jogo 10" />
                {/* Inserir sidebar */}
                <Header headerTitle="Jogo da Roleta" />
                <div className="content-roleta">
                    <div className="playersArea">
                        <div className="player p1">
                            <img
                                className="profilePic"
                                src="https://www.menshair.style/wp-content/uploads/2019/03/black-men-hairstyles-59.jpg"
                                alt="Imagem do participante 1"
                            />
                            <div className="employeeName">
                                {this.props.player[0].nick_name}
                            </div>
                            <div className="totensContainer">
                               {
                                   this.state.imagesTotensPB.map((value, index)=>{
                                       if(this.props.player[0].totem.length != 0){
                                           for(var i = 0; i<this.props.player[0].totem.length; i++){
                                               if(this.props.player[0].totem[i]-1 == index){
                                                return (
                                                    <img
                                                        className="totens"
                                                        src={this.state.imagensTotens[index]}
                                                        alt="Totem do jogo"
                                                    />
                                                );
                                               }
                                           }
                                       }
                                        return (
                                            <img
                                                className="totens"
                                                src={value}
                                                alt="Totem do jogo"
                                            />
                                        );
                                   })
                               }
                                
                            </div>
                        </div>
                        <div className="player p2">
                            <img
                                className="profilePic"
                                src="https://i.pinimg.com/originals/07/a9/97/07a9978da38303b87c13243d55942df4.jpg"
                                alt="Imagem do participante 2"
                            />
                            <div className="employeeName">
                                {this.props.player[1].nick_name}
                            </div>
                            <div className="totensContainer">
                            {
                                   this.state.imagesTotensPB.map((value, index)=>{
                                       if(this.props.player[1].totem.length != 0){
                                           for(var i = 0; i<this.props.player[1].totem.length; i++){
                                               if(this.props.player[1].totem[i]-1 == index){
                                                return (
                                                    <img
                                                        className="totens"
                                                        src={this.state.imagensTotens[index]}
                                                        alt="Totem do jogo"
                                                    />
                                                );
                                               }
                                           }
                                       }
                                        return (
                                            <img
                                                className="totens"
                                                src={value}
                                                alt="Totem do jogo"
                                            />
                                        );
                                   })
                               }
                                
                            </div>
                        </div>
                    </div>
                    <div className="quizWheel">{this.state.jsx}</div>
                    <div className="questionsBar">
                        <div className="streak1">&nbsp;</div>
                        <div className="streak2">&nbsp;</div>
                        <div className="streak3">&nbsp;</div>
                    </div>
                    <Modal show={this.state.view}>
                        <Modal.Header>Quiz </Modal.Header>
                        <Modal.Body>{this.state.message}</Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={() => { this.handleModal(); }}
                            >
                                Prosseguir
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(Roleta);
