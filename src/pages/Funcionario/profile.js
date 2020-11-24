import React, { Component, useState, useEffect } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/employee';
import Foto from '../../assets/images/nn.jpg';
import { Container, FormControl, Form, Image} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import BackgroundParticle from '../../components/Background-particle';
import API from "../../api";
import { faEdit, faCheckCircle, faFileUpload} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free';

const Profile = (props) => {
    const [employee, setEmployee] = useState([]);
    const [games, setGames] = useState([]);
    const [ranking, setRanking] = useState([]);
    const [user, setUser] = useState({});
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idGame, setIdGame] = useState("");
    const [id, setId] = useState("");
    const [profileImg, setImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
    const [reloadFlag, setReloadFlag] = useState(true); 

    useEffect(() => {
        API.post("/login/teste-token",{token: localStorage.getItem('authTk')}).then((res) => {
            setUser(res.data.decoded);  
            setId(res.data.decoded.iduser);
            setNome(res.data.decoded.name_user);
            setEmail(res.data.decoded.email_user);
            setIdGame(0);
        });
    }, []);

    useEffect(() => {
        API.get("/users/employee").then((res) => {
            setEmployee(res.data);
        });
    }, [reloadFlag]);

    useEffect(() => {   
        API.get("/game/all").then((res) => {
            setGames(res.data);
        });        
    }, []);

    useEffect(() => {
        if(idGame == 0){
            API.get(`/ranking/all/${id}` ).then((res) => {
                console.log(res.data);
                setRanking(res.data);
            }); 
        }
        else{
            var data = {
                idUser : id,
                idGame : idGame
            }
            API.post(`/ranking/rank-by-game`, data).then((res) => {
                setRanking(res.data);
            });  
        }
            
    }, [idGame]);

    const enableForm = (e) => {
        e.preventDefault();
        const inputs = document.getElementsByClassName("input-profile");
        for(let i=0; i<inputs.length; i++){
            if(i === 0 || i === 3)
                continue;
            inputs.item(i).disabled = false;
        }
        inputs.item(1).focus();

        const salvar = document.getElementsByClassName("edit-employee");
        salvar.item(0).hidden = false;

        const imagem = document.getElementsByClassName("profile-img");
        imagem.item(0).hidden = false;
    }

    const editAdmin = (e) => {
        e.preventDefault();
        console.log(id, email, nome);
        API.put("/users/update-user", {id, nome, email}).then((res) => {
            alert(res.data.message);
            console.log(res.data);
        })

        const inputs = document.getElementsByClassName("input-profile");
        for(let i=0; i<inputs.length; i++){
            if(i === 0 || i === 3)
                continue;
            inputs.item(i).disabled = true;
        }

        const salvar = document.getElementsByClassName("edit-employee");
        salvar.item(0).hidden = true;

        const imagem = document.getElementsByClassName("profile-img");
        imagem.item(0).hidden = true;
    }

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          if(reader.readyState === 2){
            setImg(reader.result);
          }
        }
        reader.readAsDataURL(e.target.files[0]);
    }



    // render() {
        return(
            <div>
                <Helmet title="Perfil" />
                <Sidebar pageSelected="reports"/>
                <Header headerTitle="Funcionário"/>
                <React.Fragment>
                    <Container fluid="xl">
                        <BackgroundParticle />
                    </Container>
                    <center>
                        <div className="mother">
                            <br />
                            <div className="row container d-flex card-user-employee">
                                <Form onSubmit={editAdmin}>
                                    <div className="col-md-12">
                                        <div className="card-profile user-card-full">
                                            <div className="row m-l-0 m-r-0">
                                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                                    <div className="card-block-e text-center text-white">
                                                        <div className="m-b-25">
                                                            <img src={profileImg} className="img-radius-e"></img>
                                                            <input type="file" id="photo" hidden onChange={imageHandler} />
                                                            <label for="photo" className="profile-img" hidden>
                                                                <FontAwesomeIcon icon={faFileUpload} className="icon-file"/>
                                                                &nbsp; Fazer upload:
                                                            </label>
                                                        </div>
                                                        <h6 className="f-w-800">{user.name_user}</h6>
                                                        <FontAwesomeIcon icon={faEdit} className="icon-edit" onClick={enableForm}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="card-block-e">
                                                        <h5 className="m-b-20 p-b-5 b-b-default f-w-600">Meu Perfil</h5>
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <p className="m-b-10 f-w-600">Nome de usuário</p>
                                                                <input type="text" className="input-profile" disabled placeholder={user.nickname_user}></input>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <p className="m-b-10 f-w-600">Nome</p>
                                                                <input type="text" className="input-profile" disabled value={nome} onChange={e => setNome(e.target.value)}></input>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <p className="m-b-10 f-w-600">Email</p>
                                                                <input type="text" className="input-profile" disabled value={email} onChange={e => setEmail(e.target.value)}></input>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <p className="m-b-10 f-w-600">CPF</p>
                                                                <input type="text" className="input-profile" disabled placeholder={user.cpf_user}></input>
                                                            </div>

                                                            <button type="submit" className="edit-employee" alt="submit" hidden>
                                                                <FontAwesomeIcon icon={faCheckCircle} className="icon-save"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                            <br />
                            <div className="ranking-employee">
                                <div className="ranking-title">
                                    <div className="ranking-title-combo">
                                        Filtrar por jogo:
                                        <Form>
                                            <FormControl as="select" onChange={((e) => {
                                                    setIdGame(parseInt(e.target.value)); 
                                                })}>
                                                <option value={0} className="select-jogos">---</option>
                                                {games.map((item) => {
                                                    return <option value={item.idgame} className="select-jogos">{item.name_game}</option>
                                                })}
                                            </FormControl>
                                        </Form>
                                    </div> 
                                    <div className="ranking-title-title-e">
                                        <h2>Ranking</h2>
                                    </div>
                                </div>
                                <div className="ranking-body">
                                    <table class="table table-striped header-fixed">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Jogo</th>
                                            <th scope="col">Tempo</th>
                                            <th scope="col">Pontos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ranking.map((item, index) => {
                                            if(id == item.iduser){
                                                console.log(index);
                                                return <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name_game}</td>
                                                    <td>{item.time}</td>
                                                    <td>{item.points}</td>
                                                </tr>
                                            }
                                            
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