import React, { Component } from 'react';
import './style.css';
import Header from '../../components/Header';
import { Container, Row, Col} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import Particles from 'react-particles-js'; 
import axios from 'axios';
import API from '../../api'

const  emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


const formValid = ({formErrors, ...rest}) => {
  let valid = true;

  //Valida o form vazio
  Object.values(formErrors).forEach( val => {
    val.length > 0 && (valid = false)
  });
  //Valida o form que foi preenchido
  Object.values(rest).forEach(val => {
    val === null && (valid = false)
  });

  return valid;
}


class login extends Component{
  constructor(props){
    super(props);
    this.state = {
      login: null,
      password: null,
      formErrors: {
        login: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if(formValid(this.state)){
      console.log(`
        --Enviando--
        Email ${this.state.login}
        Senha ${this.state.password}
      `);
      const user = {
        login : this.state.login,
        password: this.state.password
      };
      API.post("/login",user).then(res =>{
        console.log(res);
        console.log(res.data);
      });
    }else{
      console.error('Form invalid');
    }
  }
  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;
    switch(name){
      case "login":
        formErrors.login = 
          emailRegex.test(value)
            ? ""
            : "Endereço de email inválido";
        break;
      case "password":
        formErrors.password =
          value.length < 6
            ? "Senha precisa ter 6 caracteres"
            : "";
        break;
      default:
        break;
    }
    this.setState({formErrors, [name]: value}, () => console.log(this.state));
  }
  state={
    nome: this.props.nome
  }
  setNome(e){
      this.setState({ nome:e.target.value})
  }
  render(){

    const {nome} = this.state
    const {formErrors} = this.state;
    return (
      <React.Fragment>
        <Container fluid="xl">
            <Particles className="Part"
                    params={{ 
                        "particles": {
                            "number": {
                                "value": 60,
                                "density": {
                                    "enable": true,
                                    "value_area": 1000
                                }
                            },
                            "color": {
                                "value": "#f00080"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 2,
                                    "color": "#3030ff"
                                },
                                "polygon": {
                                    "nb_sides": 3
                                },
                            },
                            "opacity": {
                                "value": 0.4008530152163807,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "color": "#ffffff",
                                "width": 0.6413648243462091
                            },
                            "size": {
                                "value": 1.5,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": true,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "window",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                },
                                "resize": true
                            },
                        },
                        "retina_detect": true
                
                    }} 
            /> 
            <Container fluid="xl">
                <Row className="TopShelf">
                    <h1 className="CadT">LOGIN</h1>   
                </Row>
                <Row>
                  <Col>
                    <div className="TituloC">
                      <p className="CadS">Seja bem-vindo, {nome}<b className="Flick">_</b>! ;)</p>
                    </div>
                  </Col>
                  <Col>
                  <div className="FormC">
                    <form onSubmit={this.handleSubmit} noValidate>
                    <p className='FieldD'><b className="Presc">Login:</b>
                    <input type="text"
                    name="login"
                    placeholder="Login"
                    //  className={formErrors.email.length > 0 ? "Erro" : null}
                    className="inputC"
                    required
                    onChange={ this.handleChange}
                    noValidate
                    maxLength="85"></input>
                    </p>
                    {formErrors.login.length > 0 && (
                        <span className="errorMessage">{formErrors.login}</span>
                    )}
                    
                    <p className='FieldD'><b className="Presc">Senha:</b>
                    <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    // className={formErrors.email.length > 0 ? "Erro" : null}
                    className="inputC"
                    required 
                    noValidate
                    onChange={ this.handleChange}></input>
                    </p>
                    {formErrors.password.length > 0 && (
                      <span className="errorMessage">{formErrors.password}</span>
                    )}

                    <div className='oneAcess'> <a className="one" href="#">1º Acesso </a></div>
                    <input type="submit" value="Entrar" className="CadBtn"></input>
                  </form>
                  </div>
                </Col>
                </Row>
                <hr/>
                <a href="https://ead-lab.coursify.me" className="linkC">https://ead-lab.coursify.me/</a>
            </Container>
            {/* NAO APAGARRRRRRR SERÁ USADO PARA VALIDACAO
            
          
              ///////////////////////////// ATENCAO /////////////////////////////////////////////
          }

            {/* <div className="form-wrapper">

              <h1>Login</h1>
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email"
                    className={formErrors.email.length > 0 ? "Erro" : null}
                    placeholder="Email" 
                    name="email" 
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
                <div className="password">
                  <label htmlFor="password">Senha</label>
                  <input 
                    type="password"
                    className={formErrors.password.length > 0 ? "Erro" : null}
                    placeholder="Senha" 
                    name="password" 
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </div>
                <div className="createAccount">
                  <button type="submit">Login</button>
                  <small>Esqueceu sua senha</small>
                </div>
              </form> 
                  </div>*/}
        </Container>
      </React.Fragment>            
    );
  
  }
};

export default login;
