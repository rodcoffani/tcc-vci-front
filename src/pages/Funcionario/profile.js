import React, { Component } from 'react';
import './styles.css';
import Sidebar from '../../components/Sidebar/employee';
import Header from '../../components/Header';
import { Container, Row, Col} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../components/Background-particle'

class profile extends Component {
    render() {
        return(
            <div>
                <Sidebar pageSelected="profile" />
                <Header headerTitle="Funcionario"/>
                <React.Fragment>
                <Container fluid="xl">
                    <BackgroundParticle></BackgroundParticle>
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
                    </div>
                </center>
                </React.Fragment>
            </div>
        );
    }
};

export default profile;