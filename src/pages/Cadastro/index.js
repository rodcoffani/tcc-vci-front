import React,{ Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import {Helmet} from "react-helmet"

import './styles.css';

export default class Saudacao extends Component{
    state={
        nome: this.props.nome
    }
    setNome(e){
        this.setState({ nome:e.target.value})
    }
    render(){
        const {nome} = this.state
        return (
                
            <React.Fragment>
                <Container fluid="xl">
                <Row className="TopShelf"><h1 className="CadT">CADASTRO</h1>   
                </Row>
                <Row>
                <Col><div className="TituloC">
                    <p className="CadS">Se inscreva e seja bem-vindo, {nome}<b className="Flick">_</b>! ;)</p>
                    </div></Col>
                <Col>
                    <div className="FormC">
                    <form>
                    <p><b className="Presc">Nome:</b><input type="text" placeholder="Nome" className="inputC" required onChange={e=>this.setNome(e)} maxLength="85"></input></p>
                    <p><b className="Presc">E-mail:</b><input type="text" placeholder="E-mail" className="inputC" required></input></p>
                    <p><b className="Presc">Senha:</b><input type="password" placeholder="Senha" className="inputC" required></input></p>
                    <p><b className="Presc">Confirme a senha:</b><input type="password" placeholder="Confirmação" className="inputC" required></input></p>
                    <input type="submit" value="Cadastrar" className="CadBtn"></input>
                    </form>
                    </div>
                </Col>
                </Row>
                
                <a href="https://ead-lab.coursify.me" className="linkC">https://ead-lab.coursify.me/</a>
                </Container>
                </React.Fragment>
              
              
        
              );

        
    }
}