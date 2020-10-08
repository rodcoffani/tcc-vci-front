import React, { Component } from "react";
import "./style.css";
import Header from "../../components/Header";
import { Container, Row, Col, Button, Modal, Alert} from "react-bootstrap";
import { Helmet } from "react-helmet";
import axios from "axios";
import API from "../../api";
import ead from "../../assets/images/ead-lab.png";
import { Redirect } from "react-router-dom";
import $ from "jquery";
import BackgroundParticle from "../../components/Background-particle";
import "font-awesome/css/font-awesome.min.css";
import { useHistory } from "react-router-dom";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { ButtonBase } from "@material-ui/core";
const loginRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    //Valida o form vazio
    Object.values(formErrors).forEach((val) => {
        val.length > 0 && (valid = false);
    });
    //Valida o form que foi preenchido
    Object.values(rest).forEach((val) => {
        val === null && (valid = false);
    });

    return valid;
};

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            password: null,
            redirect: '',
            formErrors: {
                login: "",
                password: "",
            },
            sucess: false,
            error: false,
            view:false,
        };
        
    
    }
    handleModal = () => {
        var a = this.state.view;
        if(a==true){
            this.setState({view:false});
            this.setState({sucess:false})
            this.setState({error:false});
        }else{
            this.setState({view:true});
        }
    }
    handleModalValidacao = () =>{
        // atencao backend!! se a validacao der certo executa esse codigo -- alert avisando que deu certo
        this.setState({sucess:true});

        // se der errado - alert avisando que deu erro
        this.setState({error:true});

    }
    handleClick = (e) => {
        var texto = $("#pass").attr("type");
        if (texto == "password") {
            $("#pass").attr("type", "text");
        } else {
            $("#pass").attr("type", "password");
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`
                --Enviando--
                Email ${this.state.login}
                Senha ${this.state.password}
            `);
            const user = {
                login: this.state.login,
                password: this.state.password,
            };
            API.post("/login", user).then((res) => {
                console.log(res);
                console.log(res.data);
                if (res.data.success === "true") {
                    localStorage.setItem("authTk", res.data.token);
                    this.setState({ redirect: "/" });
                } else {
                    //Caso não logue
                }
            });
        } else {
            console.error("Form invalid");
        }
    };
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
        switch (name) {
            case "login":
                formErrors.login = loginRegex.test(value)
                    ? ""
                    : "Login inválido";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "Senha precisa ter 6 caracteres" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
    componentWillMount(){
      let tk = {
        token: localStorage.getItem('authTk')
      };
      if (tk) {
        API.post("/login/teste-token", tk).then((res) => {
          console.log(res.data);
          if (res.data.success === "true") {
            this.setState({ redirect: "/" });
          }
        });
      }
    }
    render() {
        const { nome } = this.state;
        const { formErrors } = this.state;
        if (this.state.redirect) {
          return <Redirect to={this.state.redirect} />
        }
        return (
            <React.Fragment>
                <Container fluid="xl">
                    <BackgroundParticle></BackgroundParticle>
                    <Container fluid="xl login">
                        <Row className="TopShelf">
                            <h1 className="CadT">LOGIN</h1>
                        </Row>
                        <Row>
                            <Col className="image">
                                <div className="imageBlue">
                                    <img src={ead} className="img-logo login" />
                                </div>
                            </Col>
                            <Col>
                                <div className="FormC">
                                    <form
                                        onSubmit={this.handleSubmit}
                                        noValidate
                                        className="formLogin"
                                    >
                                        <p className="FieldD senha">
                                            <b className="Presc">Login:</b>
                                            <input
                                                type="text"
                                                name="login"
                                                placeholder="Login"
                                                className="inputC log"
                                                required
                                                onChange={this.handleChange}
                                                noValidate
                                                maxLength="85"
                                            ></input>
                                        </p>

                                        <p className="FieldD senha">
                                            <b className="Presc">
                                                Senha:{" "}
                                                <a
                                                    href="#"
                                                    className="icone"
                                                    onClick={this.handleClick}
                                                >
                                                    {" "}
                                                    <i class="fa fa-cog fa-spin"></i>
                                                </a>{" "}
                                            </b>

                                            <input
                                                id="pass"
                                                type="password"
                                                name="password"
                                                placeholder="Senha"
                                                className="inputC log"
                                                required
                                                onChange={this.handleChange}
                                                noValidate
                                            ></input>
                                        </p>

                                        <div className="oneAcess">
                                            {" "}
                                            <a className="one" href="cadastro">
                                                1º Acesso{" "}
                                            </a>{" "}
                                            <a className="oneTwo" href="#" onClick={()=>{this.handleModal()}}>
                                                Esqueci a senha{" "}
                                            </a>
                                            <input
                                                type="submit"
                                                value="Entrar"
                                                className="CadBtn cad"
                                            ></input>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className="footer">
                            <a
                                href="https://ead-lab.coursify.me"
                                className="linkC"
                            >
                                https://ead-lab.coursify.me/
                            </a>
                        </div>
                    </Container>
                </Container>
                <div>
                    <Modal show={this.state.view} onHide={()=>this.handleModal()}>
                        <Modal.Header>Recuperação de Senha </Modal.Header>
                        <Modal.Body>
                            <b className="">Digite seu email:</b>
                            <input
                                type="text"
                                placeholder="Email"
                                className=""
                                maxLength="85"
                            ></input>
                            <Alert show={this.state.sucess} id="AlertSucess" variant="success">
                                Senha enviada para o respectivo email
                            </Alert>
                            <Alert show={this.state.error} id="AlertDanger" variant="danger">
                               Email Incorreto
                            </Alert>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={()=>{this.handleModalValidacao()}}>
                                Enviar
                            </Button>
                            <Button onClick={()=>{this.handleModal()}}>
                                Cancelar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </React.Fragment>
        );
    }
}

export default login;
