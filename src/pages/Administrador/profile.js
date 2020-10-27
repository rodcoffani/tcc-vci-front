import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/admin';
import { Container, Form } from 'react-bootstrap'
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../components/Background-particle'
import API from "../../api";
import { faEdit, faCheckCircle, faFileUpload} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free';

const Profile = (props) => {
    const [admin, setAdmin] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [user, setUser] = useState({});
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [profileImg, setImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
    const [reloadFlag, setReloadFlag] = useState(true); 

    useEffect(() => {
        API.post("/login/teste-token",{token: localStorage.getItem('authTk')}).then((res) => {
            setUser(res.data.decoded);  
            setId(res.data.decoded.iduser);
            setNome(res.data.decoded.name_user);
            setEmail(res.data.decoded.email_user);
        });
    }, []);

    useEffect(() => {
        API.get("/users/admins").then((res) => {
            setAdmin(res.data);
        });
        API.get("/users/employee").then((res) => {
            setEmployee(res.data);
        });
    }, [reloadFlag]);

    const enableForm = (e) => {
        e.preventDefault();
        const inputs = document.getElementsByClassName("input-profile");
        for(let i=0; i<inputs.length; i++){
            if(i === 0 || i === 3)
                continue;
            inputs.item(i).disabled = false;
        }
        inputs.item(1).focus();

        const salvar = document.getElementsByClassName("edit-admin");
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

        const salvar = document.getElementsByClassName("edit-admin");
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

    const promoteUser = (email, name) => { 
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Deseja prosseguir? A promoção a administrador é irreversível.")){
            API.put(`users/promote-admin/${email}`, {name}).then((res) => {
                alert(res.data.message);
                setReloadFlag(!reloadFlag);
            });
        } 
    }

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
                    <Form onSubmit={editAdmin}>
                        <div className="col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img src={profileImg} className="img-radius"></img>
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
                                        <div className="card-block">
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

                                                <button type="submit" className="edit-admin" alt="submit" hidden>
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
                                    {admin.map((item) => {
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
                                    {employee.map((item) => {
                                        return <tr>
                                            <td>{item.name_user}</td>
                                            <td>{item.nickname_user}</td>
                                            <td>
                                                <label className="switch-profile">
                                                    <input type="checkbox" value={item.email_user} checked={item.admin} onChange={e => promoteUser(e.target.value, item.name_user)}/>
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