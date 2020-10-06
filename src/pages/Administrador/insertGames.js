import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/admin';
import { Container, Row, Col, Form, InputGroup, FormControl, FormLabel} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../components/Background-particle'
import addQuestion from '../../assets/images/mais.PNG'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free';
import FlipMove from "react-flip-move"

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            //vai criar uma class (?) p cada item
            //o key acha o item 
            return <div className="list" key={item.key}>
                <div class="input-group" >
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" aria-label="Botão radio para acompanhar input text" />
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className = "form-control" 
                        id={item.key} 
                        value={item.text}
                        onChange={
                            (e) => {
                                props.setUpdate(e.target.value, item.key)
                            }
                        }
                    />
                </div>
                <FontAwesomeIcon icon={faTrashAlt} className="icons" onClick={ () => props.deleteItem(item.key)}/> 
            </div>
        })
    return(
        //flip move da o efeito quando exclui e adiciona o item
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

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
        this.handleInput = this.handleInput.bind(this); // para nao dar erro no this das outras funções
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }

    handleInput(e){
        this.setState({
            currentItem:{
                text: e.target.value, //pega o value do input que escrevemos alguma coisa
                key: Date.now() 
            }
        })
    }

    addItem(e){
        e.preventDefault(); //para nao fazer um refresh na página (que é o padrão - default - de um botão)
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text !== ""){
            const newItems = [...this.state.items, newItem]; //adiciona o newItem em uma array list
            this.setState({
                items: newItems,
                currentItem:{
                    text: '',
                    key: ''
                }
            })
        }
    }

    deleteItem(key){
        const filteredItems= this.state.items.filter(item => item.key!==key); //filtra os itens que a key não é a mesma e guarda na variavel
        this.setState({
            items: filteredItems
        })
    }

    setUpdate(text, key){
        console.log("items:"+this.state.items);
        const items = this.state.items;
        items.map(item => {      
            if(item.key===key){
                console.log(item.key +"    "+key)
                item.text= text;
            }
        })
        this.setState({
            items: items
        }) 
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
                            <Form id="to-do-form" onSubmit={this.addItem}>
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
                                    <input type="text" placeholder="Digite o nome do jogo" className="form-control"/>
                                    <input type="text" placeholder="Digite o enunciado da pergunta" className="form-control" value={this.state.currentItem.text} onChange={this.handleInput}/>
                                  
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input type="radio" name="alternativa" value="a" aria-label="Botão radio para acompanhar input text" />
                                            </div>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Digite uma alternativa de resposta" aria-label="Input text com botão radio" value={this.state.currentItem.text} onChange={this.handleInput}/>
                                    </div>

                                    <div class="input-group" >
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input type="radio" name="alternativa" value="b"  aria-label="Botão radio para acompanhar input text" />
                                            </div>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Digite uma alternativa de resposta"  aria-label="Input text com botão radio" value={this.state.currentItem.text} onChange={this.handleInput}/>
                                    </div>

                                    <div class="input-group" >
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input type="radio" name="alternativa" aria-label="Botão radio para acompanhar input text" />
                                            </div>
                                        </div>
                                        <input type="text" class="form-control" value="c" placeholder="Digite uma alternativa de resposta"  aria-label="Input text com botão radio" value={this.state.currentItem.text} onChange={this.handleInput}/>
                                    </div>

                                    <div class="input-group" >
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input type="radio" name="alternativa" value="d" aria-label="Botão radio para acompanhar input text" />
                                            </div>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Digite uma alternativa de resposta"  aria-label="Input text com botão radio" value={this.state.currentItem.text} onChange={this.handleInput}/>
                                    </div>

                                    <input type="submit" className="add-question" value="+"/>
                                    
                                    <ListItems 
                                        items = {this.state.items}
                                        deleteItem = {this.deleteItem}
                                        setUpdate = {this.setUpdate}>
                                    </ListItems>  
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