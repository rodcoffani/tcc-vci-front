import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/admin';
import { Container, Row, Col, Form, FormControl} from 'react-bootstrap'
import BackgroundParticle from '../../components/Background-particle'
import API from "../../api";

const Admin = (props) => {
    const [users, setUsers] = useState([]);
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        API.get("/users/all").then((res) => {
            setUsers(res.data);
        });
        API.get("/ranking/all").then((res) => {
            setRanking(res.data);
        });
    }, []);

    return (
        <div>
            <Sidebar pageSelected="reports"/>
            <Header headerTitle="Administrador"/>
            <React.Fragment>
            <Container fluid="xl">
                <BackgroundParticle />
            </Container>
            <center>
                <div className="mother">
                    <br />
                    <div className="ranking">
                        <div className="ranking-title">
                            <div className="ranking-title-combo">
                                <div className="ranking-title-combo-title">Filtrar por jogo: <br /></div>
                                <Form>
                                    <FormControl as="select">
                                        <option value="a" className = "select-jogos">Perguntados</option>
                                        <option value="b" className = "select-jogos">Quiz</option>
                                    </FormControl>
                                </Form>
                            </div> 
                            <div className="ranking-title-title">
                                <p className="ranking-text">Ranking</p>
                            </div>
                        </div>
                        <br /><br /><br /><br />
                        <div className="ranking-body">
                            <table className="table table-striped header-fixed">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Pontos</th>
                                    <th scope="col">Tempo</th>
                                    <th scope="col">Jogo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ranking.map((item) => {
                                    {console.log(item)}
                                    return <tr>
                                        <td></td>
                                        <td>{item.user.name_user}</td>
                                        <td>{item.points}</td>
                                        <td>{item.time}</td>
                                    </tr>
                                })}
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="employee">
                        <div className="employee-title">
                            <p className="employee-text">Funcionários</p>
                        </div>
                        <div className="employee-body">
                            <table className="table table-striped header-fixed-employee">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Validação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item) => {
                                    return <tr>
                                        <td>{item.name_user}</td>
                                        <td>{item.iduser}</td>
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

export default Admin;