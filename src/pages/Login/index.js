import React, { Component } from 'react';
import './style.css';
import Header from '../../components/Header';

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
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if(formValid(this.state)){
      console.log(`
        --Enviando--
        Email ${this.state.email}
        Senha ${this.state.password}
      `);
    }else{
      console.error('Form invalid');
    }
  }

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;


    switch(name){
      case "email":
        formErrors.email = 
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

  render(){
    const {formErrors} = this.state;
    return (
      <div className="wrapper">
        {/* <Header /> */}
        <div className="form-wrapper">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input 
                  type="email"
                  className={formErrors.email.length > 0 ? "Erro" : null}
                  placeholder="Emaill" 
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
        </div>
      </div>
    );
  }
}
    

export default login;