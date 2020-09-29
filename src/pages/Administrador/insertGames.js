import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/admin';
import { Container, Row, Col, Form, InputGroup, FormControl, FormLabel} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../components/Background-particle'
import addQuestion from '../../assets/images/mais.PNG'

class insertGames extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            currentItem:{
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    handleInput(e){
        this.setState({
            text: e.target.value,
            key: Date.now()
        })
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text !== ""){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem:{
                    text: '',
                    key: ''
                }
            })
        }
    }
    render() {
        return(
            <div>
                <Sidebar pageSelected="insertGames" />
                <Header headerTitle="Administrador"/>
                <React.Fragment>
                <Container fluid="xl">
                    <BackgroundParticle></BackgroundParticle>
                </Container>
                <center>
                    <div className="mother">
                        <br />
                        <div className="insert-games">
                            <Form id="form-label" onSubmit={this.addItem}>
                                <div className="labels-insert">
                                    <FormLabel>Selecionar tipo de jogo:</FormLabel><br />
                                    <FormLabel>Nome do jogo:</FormLabel>
                                    <FormLabel>Perguntas:</FormLabel>
                                </div>
                                <div className="inputs-insert">
                                    <FormControl as="select">
                                        <option value="a" className = "select-jogos">Perguntados</option>
                                        <option value="b" className = "select-jogos">Quiz</option>
                                    </FormControl>
                                    <FormControl type="text" placeholder="Digite o nome do jogo" className = "input"/>
                                    <FormControl type="text" placeholder="Digite o enunciado da pergunta" className = "input"/>
                                  
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Radio aria-label="Radio button for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl type="text" placeholder="Digite uma alternativa de resposta" className = "input" value={this.state.currentItem.text} onChange={this.handleInput}/>
                                    </InputGroup>
                         
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Radio aria-label="Radio button for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl type="text" placeholder="Digite uma alternativa de resposta" className = "input"/>
                                    </InputGroup>

                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Radio aria-label="Radio button for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl type="text" placeholder="Digite uma alternativa de resposta" className = "input"/>
                                    </InputGroup>

                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Radio aria-label="Radio button for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl type="text" placeholder="Digite uma alternativa de resposta" className = "input"/>
                                    </InputGroup>

                                    <input type="image" src={addQuestion}  className="add-question" alt="submit" name="submit"/>
                            </div>
                            </Form>    
                        </div>

                        <br />
                    </div>
                </center>
                </React.Fragment>
            </div>
        );
    }
};

export default insertGames;