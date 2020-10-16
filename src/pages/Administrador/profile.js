import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/admin';
import { Container } from 'react-bootstrap'
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../components/Background-particle'
import API from "../../api";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free';
import laura from "../../assets/images/integrantes/laura.JPG";

const Profile = (props) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        API.get("/users/admins").then((res) => {
            setUsers(res.data);
        });
        API.get("/users/employee").then((res) => {
            setUser(res.data);
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
                    <div className="row container d-flex card-user">
                        <div className="col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25"><img src={laura} className="img-radius"></img></div>
                                            <h6 className="f-w-800">Mark Sloan</h6>
                                            <FontAwesomeIcon icon={faEdit} className="icons" />
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h5 className="m-b-20 p-b-5 b-b-default f-w-600">Meu Perfil</h5>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600">Nome de usuário</p>
                                                    <input type="text" className="input-profile" placeholder="aaaa"></input>
                                                </div>
                                                <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <input type="text" className="input-profile" placeholder="aaaa"></input>
                                                </div>
                                                <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600">CPF</p>
                                                    <input type="text" className="input-profile" placeholder="aaaa"></input>
                                                </div>
                                                <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600">Senha</p>
                                                    <input type="text" className="input-profile" placeholder="aaaa"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admin">
                        <div className="admin-title"><h2>Outros administradores</h2></div>
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
                                            <td>{item.email_user}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className="admin-title"><h2>Promover a administrador</h2></div>
                        <div className="admin-table">
                            <table class="table table-striped header-fixed-admin">
                                <thead>
                                    <tr>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Sobrenome</th>
                                        <th scope="col">Administrador</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((item) => {
                                        return <tr>
                                            <td>{item.name_user}</td>
                                            <td>{item.nickname_user}</td>
                                            <td>
                                                <label className="switch-profile">
                                                    <input type="checkbox" value={item.iduser} />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>
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