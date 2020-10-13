import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/admin';
import { Container, Form, FormControl, FormLabel} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../components/Background-particle'
import { faTrashAlt, faPlus, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free';
import FlipMove from "react-flip-move";
import API from "../../api";

const ListItems = (props) => {
    const items = props.items;
    const listItems = items.map(item =>
        {
            //vai criar um elemento p cada item
            //o key acha o item 
            return <div className="card card-question" key={item.key}>
                <div class="input-group">
                    <input 
                        type="text" 
                        className = "form-control" 
                        value={item.question}
                        onChange={
                            (e) => {
                                props.updateItem(e.target.value, 'question', item.key)
                            }
                        }
                    />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" value={item.answer} aria-label="Botão radio para acompanhar input text" />
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className = "form-control" 
                        value={item.alternative_a}
                        onChange={
                            (e) => {
                                props.updateItem(e.target.value, 'alternative_a', item.key)
                            }
                        }
                    />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" value={item.answer} aria-label="Botão radio para acompanhar input text" />
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className = "form-control" 
                        value={item.alternative_b}
                        onChange={
                            (e) => {
                                props.updateItem(e.target.value, 'alternative_b', item.key)
                            }
                        }
                    />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" value={item.answer} aria-label="Botão radio para acompanhar input text" />
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className = "form-control" 
                        value={item.alternative_c}
                        onChange={
                            (e) => {
                                props.updateItem(e.target.value, 'alternative_c', item.key)
                            }
                        }
                    />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" value={item.answer} aria-label="Botão radio para acompanhar input text" />
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className = "form-control" 
                        value={item.alternative_d}
                        onChange={
                            (e) => {
                                props.updateItem(e.target.value, 'alternative_d', item.key)
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

const InsertGames = (props) => {
    const [items, setItems] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState({
        question: '',
        alternative_a: '',
        alternative_b: '',
        alternative_c: '',
        alternative_d: '',
        key: '',
    })
    const [games, setGames] = useState([]);

    useEffect(() => {
        API.get("/game/all").then((res) => {
            setGames(res.data);
        });        
    }, []);

    const handleChangeQuestion = (e) => {
        setCurrentQuestion({
            question: e.target.value, //pega o value do input que escrevemos alguma coisa
            alternative_a: currentQuestion.alternative_a,
            alternative_b: currentQuestion.alternative_b,
            alternative_c: currentQuestion.alternative_c,
            alternative_d: currentQuestion.alternative_d,
            key: Date.now()
        })
    }

    const handleChangeAltA = (e) => {
        setCurrentQuestion({
            question: currentQuestion.question,
            alternative_a: e.target.value,
            alternative_b: currentQuestion.alternative_b,
            alternative_c: currentQuestion.alternative_c,
            alternative_d: currentQuestion.alternative_d,
            key: Date.now()
        })
    }

    const handleChangeAltB = (e) => {
        setCurrentQuestion({
            question: currentQuestion.question,
            alternative_a: currentQuestion.alternative_a,
            alternative_b: e.target.value,
            alternative_c: currentQuestion.alternative_c,
            alternative_d: currentQuestion.alternative_d,
            key: Date.now()
        })
    }

    const handleChangeAltC = (e) => {
        setCurrentQuestion({
            question: currentQuestion.question,
            alternative_a: currentQuestion.alternative_a,
            alternative_b: currentQuestion.alternative_b,
            alternative_c: e.target.value,
            alternative_d: currentQuestion.alternative_d,
            key: Date.now()
        })
    }

    const handleChangeAltD = (e) => {
        setCurrentQuestion({
            question: currentQuestion.question,
            alternative_a: currentQuestion.alternative_a,
            alternative_b: currentQuestion.alternative_b,
            alternative_c: currentQuestion.alternative_c,
            alternative_d: e.target.value,
            key: Date.now()
        })
    }

    const addItem = (e) => {
        e.preventDefault(); //para nao fazer um refresh na página (que é o padrão - default - de um botão)
        const newItem = currentQuestion;
        if(newItem.question !== ""){
            const newItems = [...items, newItem]; //adiciona o newItem em uma array list
            setItems(newItems);
            setCurrentQuestion({
                question: '',
                alternative_a: '',
                alternative_b: '',
                alternative_c: '',
                alternative_d: '',
                key: ''
            })
        }
    }

    const deleteItem = (key) => {
        const filteredItems= items.filter(item => item.key !== key); //filtra os itens que a key não é a mesma e guarda na variavel
        setItems(filteredItems);
    }

    const updateItem = (text, element, key) => {
        const newItems = items.map(item => {      
            if(item.key === key) {
                if (element === 'question') {
                    return ({
                        question: text,
                        alternative_a: item.alternative_a,
                        alternative_b: item.alternative_b,
                        alternative_c: item.alternative_c,
                        alternative_d: item.alternative_d,
                        key
                    })
                }
                else if (element === 'alternative_a') {
                    return ({
                        question: item.question,
                        alternative_a: text,
                        alternative_b: item.alternative_b,
                        alternative_c: item.alternative_c,
                        alternative_d: item.alternative_d,
                        key
                    })
                }
                else if (element === 'alternative_b') {
                    return ({
                        question: item.question,
                        alternative_a: item.alternative_a,
                        alternative_b: text,
                        alternative_c: item.alternative_c,
                        alternative_d: item.alternative_d,
                        key
                    })
                }
                else if (element === 'alternative_c') {
                    return ({
                        question: item.question,
                        alternative_a: item.alternative_a,
                        alternative_b: item.alternative_b,
                        alternative_c: text,
                        alternative_d: item.alternative_d,
                        key
                    })
                }
                else if (element === 'alternative_d') {
                    return ({
                        question: item.question,
                        alternative_a: item.alternative_a,
                        alternative_b: item.alternative_b,
                        alternative_c: item.alternative_c,
                        alternative_d: text,
                        key
                    })
                }
            }
            return item;
        })
        setItems(newItems);
    }

    return (
        <div>
            <Helmet title="Cadastro de Jogos"/>
            <Sidebar pageSelected="insertGames" />
            <Header headerTitle="Administrador"/>
            <React.Fragment>
            <Container fluid="xl">
                <BackgroundParticle />
            </Container>
            <center>
                <div className="mother">
                    <div className="insert-games">
                        <h2>Cadastro de jogos</h2>
                        <Form className="todo-form" onSubmit={addItem}>
                            <div className="labels-insert">
                                <FormLabel>Selecionar tipo de jogo:</FormLabel><br />
                                <FormLabel>Nome do jogo:</FormLabel>
                                <FormLabel>Pergunta:</FormLabel>
                            </div>
                            <div className="inputs-insert">
                                <FormControl as="select">
                                    {games.map((item) => {
                                        return <option value={item.idgame} className="select-jogos">{item.name_game}</option>
                                    })}
                                </FormControl>
                                <input type="text" placeholder="Digite o nome do jogo" className="form-control"/>
                                <input type="text" placeholder="Digite o enunciado da pergunta" className="form-control" value={currentQuestion.question} onChange={handleChangeQuestion}/>
                                
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="radio" name="alternativa" value="a" aria-label="Botão radio para acompanhar input text" />
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Alternativa A" aria-label="Input text com botão radio" value={currentQuestion.alternative_a} onChange={handleChangeAltA}/>
                                </div>

                                <div class="input-group" >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="radio" name="alternativa" value="b"  aria-label="Botão radio para acompanhar input text" />
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Alternativa B"  aria-label="Input text com botão radio" value={currentQuestion.alternative_b} onChange={handleChangeAltB}/>
                                </div>

                                <div class="input-group" >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="radio" name="alternativa" aria-label="Botão radio para acompanhar input text" />
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Alternativa C"  aria-label="Input text com 0botão radio" value={currentQuestion.alternative_c} onChange={handleChangeAltC}/>
                                </div>

                                <div class="input-group" >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="radio" name="alternativa" value="d" aria-label="Botão radio para acompanhar input text" />
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Alternativa D"  aria-label="Input text com botão radio" value={currentQuestion.alternative_d} onChange={handleChangeAltD}/>
                                </div>
                            </div>
                            <button type="submit" className="add-question-admin" alt="submit">
                                <FontAwesomeIcon icon={faPlus} size="lg" className="icons"/> 
                            </button> 
                        </Form>  
                        <ListItems 
                            items = {items}
                            deleteItem = {deleteItem}
                            updateItem = {updateItem}>
                        </ListItems> 
                        <div className="submit-game">
                            <FontAwesomeIcon icon={faCheckCircle} size="lg" className="icons" onClick={(() => items.length ? alert('Jogo cadastrado com sucesso!') : alert('ERRO! \nO jogo não possui questões suficientes!'))}/>
                        </div> 
                    </div>
                </div>
            </center>
            </React.Fragment>
        </div>
    );
}

export default InsertGames;