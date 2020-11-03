import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles.css';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar/admin';
import { Container, Form, FormControl, FormLabel } from 'react-bootstrap'
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../../components/Background-particle'
import { faTrashAlt, faPlus, faCheckCircle, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free';
import FlipMove from "react-flip-move";
import API from "../../../api";

const ListItems = (props) => {
    const items = props.items;
    const categorias = props.categorias;
    console.log(items);
    const listItems = items.map(item => {
            //vai criar um elemento p cada item
            //o key acha o item 
            return <div className="card card-question" key={item.key}>
                <div class="input-group">
                    <input 
                        type="text" 
                        className = "form-control" 
                        value={item.enunciado}
                        disabled
                    />
                </div>
                <div className="input-group">
                    <FormControl as="select" id="select-categorias" value={item.categoria} disabled >
                        {categorias.map((item) => {
                            return <option key={item.idtoten} value={item.idtoten} className="select-jogos">{item.name_toten}</option>
                        })}
                    </FormControl>
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" checked={item.respostas.q1.certa} readOnly aria-label="Botão radio para acompanhar input text" />
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className = "form-control" 
                        value={item.respostas.q1.enunciado}
                        disabled
                    />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" checked={item.respostas.q2.certa} readOnly aria-label="Botão radio para acompanhar input text" />
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className = "form-control" 
                        value={item.respostas.q2.enunciado}
                        disabled
                    />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" checked={item.respostas.q3.certa} readOnly aria-label="Botão radio para acompanhar input text" />
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className = "form-control" 
                        value={item.respostas.q3.enunciado}
                        disabled
                    />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" checked={item.respostas.q4.certa} readOnly aria-label="Botão radio para acompanhar input text" />
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className = "form-control" 
                        value={item.respostas.q4.enunciado}
                        disabled
                    />
                </div>
                <FontAwesomeIcon icon={faTrashAlt} className="icons" onClick={() => props.deleteItem(item.key)}/> 
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

const InsertRoleta = (props) => {
    const { push } = useHistory();
    const [items, setItems] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({
        enunciado: '',
        respostas:{
            q1:{
                enunciado: '',
                certa: false,
            },
            q2:{
                enunciado: '',
                certa: false,
            },
            q3:{
                enunciado: '',
                certa: false,
            },
            q4:{
                enunciado: '',
                certa: false, 
            }
        },
        key: '',
    });
    const [games, setGames] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {    
        API.get("/perguntados/all").then((res) => {
            setCategorias(res.data);
        });
        // API.get('/perguntados/questions').then(res => {
        //     setItems(JSON.parse(res.data.map(item => item.json_question)))
        // });
    }, []);

    const handleChangeQuestion = (e) => {
        setCurrentQuestion({
            enunciado: e.target.value,
            respostas: {
                ...currentQuestion.respostas
            },
            key: Date.now(),
        })
    }

    const handleChangeAltA = (e) => {
        setCurrentQuestion({
            ...currentQuestion,
            respostas: {
                ...currentQuestion.respostas,
                q1: {
                    enunciado: e.target.value,
                    certa: currentQuestion.respostas.q1.certa,
                },
            },
            key: Date.now(),
        })
    }

    const handleChangeAltB = (e) => {
        setCurrentQuestion({
            ...currentQuestion,
            respostas:{
                ...currentQuestion.respostas,
                q2:{
                    enunciado: e.target.value,
                    certa: currentQuestion.respostas.q2.certa,
                },
            },
            key: Date.now(),
        })
    }

    const handleChangeAltC = (e) => {
        setCurrentQuestion({
            ...currentQuestion,
            respostas:{
                ...currentQuestion.respostas,
                q3:{
                    enunciado: e.target.value,
                    certa: currentQuestion.respostas.q3.certa,
                },
            },
            key: Date.now(),
        })
    }

    const handleChangeAltD = (e) => {
        setCurrentQuestion({
            ...currentQuestion,
            respostas: {
                ...currentQuestion.respostas,
                q4: {
                    enunciado: e.target.value,
                    certa: currentQuestion.respostas.q4.certa, 
                }
            },
            key: Date.now(),
        })
    }

    const handleChangeCorrectAnswer = (e) => {
        switch (e.target.value) {
            case 'a' :
                setCurrentQuestion({
                    ...currentQuestion,
                    respostas: {
                        q1: {
                            ...currentQuestion.respostas.q1,
                            certa: true,
                        },
                        q2: {
                            ...currentQuestion.respostas.q2,
                            certa: false,
                        },
                        q3: {
                            ...currentQuestion.respostas.q3,
                            certa: false,
                        },
                        q4: {
                            ...currentQuestion.respostas.q4,
                            certa: false,
                        },
                    }
                })
                break;
            case 'b' :
                setCurrentQuestion({
                    ...currentQuestion,
                    respostas: {
                        q1: {
                            ...currentQuestion.respostas.q1,
                            certa: false,
                        },
                        q2: {
                            ...currentQuestion.respostas.q2,
                            certa: true,
                        },
                        q3: {
                            ...currentQuestion.respostas.q3,
                            certa: false,
                        },
                        q4: {
                            ...currentQuestion.respostas.q4,
                            certa: false,
                        },
                    }
                })
                break;
            case 'c' :
                setCurrentQuestion({
                    ...currentQuestion,
                    respostas: {
                        q1: {
                            ...currentQuestion.respostas.q1,
                            certa: false,
                        },
                        q2: {
                            ...currentQuestion.respostas.q2,
                            certa: false,
                        },
                        q3: {
                            ...currentQuestion.respostas.q3,
                            certa: true,
                        },
                        q4: {
                            ...currentQuestion.respostas.q4,
                            certa: false,
                        },
                    }
                })
                break;
            case 'd' :
                setCurrentQuestion({
                    ...currentQuestion,
                    respostas: {
                        q1: {
                            ...currentQuestion.respostas.q1,
                            certa: false,
                        },
                        q2: {
                            ...currentQuestion.respostas.q2,
                            certa: false,
                        },
                        q3: {
                            ...currentQuestion.respostas.q3,
                            certa: false,
                        },
                        q4: {
                            ...currentQuestion.respostas.q4,
                            certa: true,
                        },
                    }
                })
                break;
        }
        
    }

    const addItem = (e) => {
        e.preventDefault(); //para nao fazer um refresh na página (que é o padrão - default - de um botão)
        const newItem = currentQuestion;
        newItem.categoria = document.getElementById("select-categorias").value;
        if(newItem.enunciado !== ""){
            const newItems = [...items, newItem]; //adiciona o newItem em uma array list
            setItems(newItems);

            setCurrentQuestion({
                enunciado: '',
                categoria: 0,
                respostas:{
                    q1:{
                        enunciado: '',
                        certa: false,
                    },
                    q2:{
                        enunciado: '',
                        certa: false,
                    },
                    q3:{
                        enunciado: '',
                        certa: false,
                    },
                    q4:{
                        enunciado: '',
                        certa: false, 
                    }
                },
                key: '',
            });

            document.getElementById("select-categorias").selectedIndex = 0;
        }
    }

    const deleteItem = (key) => {
        const filteredItems= items.filter(item => item.key !== key); //filtra os itens que a key não é a mesma e guarda na variavel
        setItems(filteredItems);
    }

    const submitQuestions = () => {
        items.length ? alert('Jogo cadastrado com sucesso!') : alert('ERRO! \nO jogo não possui questões suficientes!');
        // if(items.length !== 0) {
        //     API.post('/perguntados/questions', items).then(res => {
        //         alert(res.data.message);
        //     });
        // }
    }

    return (
        <div>
            <Helmet title="Edição de Jogo - Roleta"/>
            <Sidebar pageSelected="editGames" />
            <Header headerTitle="Administrador"/>
            <React.Fragment>
            <Container fluid="xl">
                <BackgroundParticle />
            </Container>
            <center>
                <div className="mother-games">
                    <div className="insert-games">
                        <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" color="rgba(58, 167, 180, 1)" className="icons ml-4" onClick={() => push('/editGames')} />
                        <h2>Edição de Jogo - Roleta</h2>
                        <Form className="todo-form" onSubmit={addItem}>
                            <div className="labels-insert">
                                <FormLabel>Pergunta:</FormLabel>
                            </div>
                            <div className="inputs-insert">
                                <input type="text" placeholder="Digite o enunciado da pergunta" className="form-control" required value={currentQuestion.enunciado} onChange={handleChangeQuestion}/>
                            </div>

                            <div className="labels-insert" id="label-categoria">
                                <FormLabel>Categoria:</FormLabel>
                            </div>
                            <div className="inputs-insert" >
                                <FormControl as="select" id="select-categorias" >
                                    {categorias.map((item) => {
                                        return <option value={item.idtoten} className="select-jogos">{item.name_toten}</option>
                                    })}
                                </FormControl>
                            </div>

                            <div className="labels-insert">
                                <FormLabel>Alternativas:</FormLabel>
                            </div>
                            <div className="inputs-insert">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="radio" name="alternativa" required value="a" aria-label="Botão radio para acompanhar input text" checked={currentQuestion.respostas.q1.certa} aria-label="Botão radio para acompanhar input text" onChange={handleChangeCorrectAnswer} />
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Alternativa A" aria-label="Input text com botão radio" value={currentQuestion.respostas.q1.enunciado} onChange={handleChangeAltA}/>
                                </div>

                                <div class="input-group" >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="radio" name="alternativa" required value="b"  aria-label="Botão radio para acompanhar input text" checked={currentQuestion.respostas.q2.certa} aria-label="Botão radio para acompanhar input text" onChange={handleChangeCorrectAnswer} />
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Alternativa B"  aria-label="Input text com botão radio" value={currentQuestion.respostas.q2.enunciado} onChange={handleChangeAltB}/>
                                </div>

                                <div class="input-group" >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="radio" name="alternativa" required value="c" aria-label="Botão radio para acompanhar input text" checked={currentQuestion.respostas.q3.certa} aria-label="Botão radio para acompanhar input text" onChange={handleChangeCorrectAnswer} />
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Alternativa C"  aria-label="Input text com 0botão radio" value={currentQuestion.respostas.q3.enunciado} onChange={handleChangeAltC}/>
                                </div>

                                <div class="input-group" >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="radio" name="alternativa" required value="d" aria-label="Botão radio para acompanhar input text" checked={currentQuestion.respostas.q4.certa} aria-label="Botão radio para acompanhar input text" onChange={handleChangeCorrectAnswer} />
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Alternativa D"  aria-label="Input text com botão radio" value={currentQuestion.respostas.q4.enunciado} onChange={handleChangeAltD}/>
                                </div>
                            </div>
                            <button type="submit" className="add-question-admin" alt="submit">
                                <FontAwesomeIcon icon={faPlus} size="lg" className="icons"/> 
                            </button> 
                        </Form>  
                        <ListItems 
                            items = {items}
                            categorias = {categorias}
                            deleteItem = {deleteItem}
                        >
                        </ListItems> 
                        <div className="submit-game">
                            <FontAwesomeIcon icon={faCheckCircle} size="lg" className="icons" onClick={() => submitQuestions()}/>
                        </div> 
                    </div>
                </div>
            </center>
            </React.Fragment>
        </div>
    );
}

export default InsertRoleta;