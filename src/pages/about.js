import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import BackgroundParticle from '../components/Background-particle'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/user';
import { Container } from "react-bootstrap";
import adacode from "../assets/images/logos/adacode.png";
import cti from "../assets/images/logos/cti.png";
import unesp from "../assets/images/logos/unesp.png";
import ezweb from "../assets/images/logos/ezweb.png";
import grazi from "../assets/images/integrantes/grazi.png";
import laura from "../assets/images/integrantes/laura.JPG";
import ana from "../assets/images/integrantes/ana.png";
import hugo from "../assets/images/integrantes/hugo.jpg";
import amanda from "../assets/images/integrantes/amanda.jpg";
import sophia from "../assets/images/integrantes/sophia.png";
import micaela from "../assets/images/integrantes/micaela.png";
import rodrigo from "../assets/images/integrantes/rodrigo.png";
import vinicius from "../assets/images/integrantes/vinicius.jpg";
import thiago from "../assets/images/integrantes/thiago.jpg";
import nicolas from "../assets/images/integrantes/nicolas.jpg";
import eduardo from "../assets/images/integrantes/eduardo.png";
import guilherme from "../assets/images/integrantes/guilherme.png";
import jose from "../assets/images/integrantes/jose.jpg";
import anselmo from "../assets/images/integrantes/anselmo.jpg";
import luiz from "../assets/images/integrantes/luiz.jpeg";
import kaio from "../assets/images/integrantes/kaio.png";

const About = () => {
    return (
        <div>
            <Sidebar pageSelected="Sobre" />
            <Header headerTitle="Home"/>
            <React.Fragment>
            <Container fluid="xl">
                <BackgroundParticle />
            </Container>
            <center>
                <div className="mother">
                    <div className="about">
                        <h2>Sobre</h2>
                        
                        <div className="integrantes">
                        <h4>O projeto foi realizado para a formação acadêmica, no Colégio Técnico Industrial
                        "Prof Isaac Portal Roldán" (CTI), da Unesp, dos seguintes alunos:</h4>
                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={grazi} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Graziele</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={laura} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Laura</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={ana} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Ana Julia</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={guilherme} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Guilherme</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={kaio} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Kaio</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={micaela} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Micaela</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={rodrigo} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Rodrigo</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={sophia} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Sophia</h4>
                                </div>
                            </div>
                        
                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={amanda} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Amanda</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={anselmo} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Anselmo</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={jose} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>José</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={luiz} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Luiz</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={nicolas} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Nicolas</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={thiago} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Thiago</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={vinicius} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Vinicius</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={eduardo} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Eduardo</h4>
                                </div>
                            </div>

                            <div className="card-integrante">
                                <img className="card-img-top rounded" src={hugo} alt="Integrante do grupo"/>
                                <div className="card-body">
                                    <h4>Hugo</h4>
                                </div>
                            </div>
                        </div>

                        <div className="logos">
                            <hr/>
                            <img src={cti} className="img-logo-empresa" alt="Logotipo CTI"></img>
                            <img src={unesp} className="img-logo-empresa" alt="Logotipo UNESP"></img>
                            <img src={adacode} className="img-logo-empresa" alt="Logotipo AdaCode"></img>
                            <img src={ezweb} className="img-logo-empresa" alt="Logotipo EzWeb"></img>
                        </div>
                    </div>
                </div>
            </center>
            </React.Fragment>
        </div>
    );
}

export default About;