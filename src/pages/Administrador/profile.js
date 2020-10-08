import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/admin';
import { Container } from 'react-bootstrap'
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../components/Background-particle'
import API from "../../api";

const Profile = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.get("/users/admins").then((res) => {
            setUsers(res.data);
        });
    }, []);

    return(
        <div>
            <Helmet title="Perfil"/>
            <Sidebar pageSelected="profile" />
            <Header headerTitle="Administrador"/>
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
                                    {users.map((item) => {
                                        return <tr>
                                            <td>{item.name_user}</td>
                                            <td>{item.nickname_user}</td>
                                            <td><button type="button" className="btn btn-link">{item.email_user}</button></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </center>
            </React.Fragment>
        </div>
    );
};

export default Profile;