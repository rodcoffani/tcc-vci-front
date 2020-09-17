import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/admin';
import { Container, Row, Col} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import backgroundParticle from '../../components/Background-particle'

class profile extends Component {
    render() {
        return(
            <div>
                <Sidebar pageSelected="profile" />
                <Header headerTitle="Administrador"/>
                <React.Fragment>
                <Container fluid="xl">
                    <backgroundParticle></backgroundParticle>
                </Container>
                <center>
                    <div className="mother">
                        <br />
                        <div className="profile">
                            <div className="profile-photo">
                                
                            </div>
                            <div className="profile-info">
                                <p>Nome: Mark</p>
                                <p>Sobrenome: Sloan</p>
                                <p>E-mail: mark2008@yahoo.com</p>
                                <p>CPF: 147.154.126-47</p>
                            </div>
                        </div>
                        <div className="admin">
                            <div className="admin-title">Outros administradores</div>
                            <div className="admin-table">
                                <table class="table table-striped header-fixed-profile">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Sobrenome</th>
                                            <th scope="col">E-mail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* a fazer: colocar infos na tabela por "for" ? puxando do banco */}
                                        <tr>
                                            <td>Mark</td>
                                            <td>Sloan</td>
                                            <td>mark2008@yahoo.com</td>
                                        </tr>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Sloan</td>
                                            <td>mark2008@yahoo.com</td>
                                        </tr>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Sloan</td>
                                            <td>mark2008@yahoo.com</td>
                                        </tr>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Sloan</td>
                                            <td>mark2008@yahoo.com</td>
                                        </tr>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Sloan</td>
                                            <td>mark2008@yahoo.com</td>
                                        </tr>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Sloan</td>
                                            <td>mark2008@yahoo.com</td>
                                        </tr>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Sloan</td>
                                            <td>mark2008@yahoo.com</td>
                                        </tr>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Sloan</td>
                                            <td>mark2008@yahoo.com</td>
                                        </tr>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Sloan</td>
                                            <td>mark2008@yahoo.com</td>
                                        </tr><tr>
                                            <td>Mark</td>
                                            <td>Sloan</td>
                                            <td>mark2008@yahoo.com</td>
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

export default profile;