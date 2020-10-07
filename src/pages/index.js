import React,{useEffect} from 'react';
import '../pages/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import backgroundParticle from '../components/Background-particle'
import Header from '../components/Header';
import {Carousel,Row, Col, Container, Card, CardGroup, ListGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Sidebar from '../components/Sidebar/employee';
import slider_01 from "../assets/images/slider_01.png";
import slider_02 from "../assets/images/slider_02.PNG";
import slider_03 from "../assets/images/slider_03.PNG";
import {faClock,faUser,faCheckCircle,faCaretSquareUp} from '@fortawesome/free-regular-svg-icons'
import {animateScroll as scroll} from 'react-scroll'
import {Helmet} from "react-helmet"
function App() {

  return (
  <React.Fragment>
    <Helmet title="Home" />
    <Sidebar pageSelected=""/>
      <Header headerTitle="Home"/>
      <div className="content">
        <Container className="cont" fluid="xl">
        <backgroundParticle></backgroundParticle>
        <Carousel className="Carrossel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider_01}
              alt="P. slide"
            />
            <Carousel.Caption className='Caption'>
              <h1>Aprendizagem</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider_02}
              alt="S. slide"
            />

            <Carousel.Caption className='Caption'>
              <h1>Desenvolvimento</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider_03}
              alt="T. slide"
            />

            <Carousel.Caption className='Caption'>
              <h1>Trabalho em equipe</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      <div className="mid">
        <Row>
            <Col md={6}>
            <div className="img_mid"/>
            </Col>
            <Col md={5}>
            <h2 className="h2_projeto">O projeto</h2>
            <p>O EAD-LAB é uma plataforma de jogos didáticos que têm como objetivo fazer com que o aprendizado seja uma atividade atrativa e prazerosa. Fornecendo uma experiência que é, ao mesmo tempo, confortável e instrutiva, nossos jogos são concebidos no intuito de facilitar a assimilação de conteúdos com uma dinâmica elaborada para expandir e reforçar o desenvolvimento profissional dos usuários.</p>
            
            <ul>
              <li><FontAwesomeIcon icon={faCheckCircle}/> Testa as capacidades de se trabalhar em equipe;</li>
              <li><FontAwesomeIcon icon={faCheckCircle}/> Educação e entretenimento combinados;</li>
              <li><FontAwesomeIcon icon={faCheckCircle}/> Procedimento rápido e intuitivo;</li>
              <li><FontAwesomeIcon icon={faCheckCircle}/> Viável e portátil.</li>
            </ul>
            </Col>

            </Row>
          <br />
          <Row >
              <Col>
              <span>Nossos jogos!</span>
              </Col>
          </Row>
          <Row>
          <Col xs={12} md={12}>
          <CardGroup style={{
          marginTop:'6vw',
          marginBottom:'6vw',
          }} className='EfctvCardG'>
            <Card className='EfctvCard'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Roleta</Card.Title>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item><FontAwesomeIcon icon={faClock}/>&nbsp;&nbsp;Duração: 10 minutos</ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;N° de jogadores: 2</ListGroup.Item>
              </ListGroup>
              <Card.Footer style={{textAlign:'center'}}> 
              <a href='/roleta_rules'>Jogar!</a>
              </Card.Footer>
            </Card>
            <Card className='EfctvCard'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Quiz</Card.Title>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item><FontAwesomeIcon icon={faClock}/>&nbsp;&nbsp;Duração: 15 minutos</ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;N° de jogadores: 1</ListGroup.Item>
              </ListGroup>
              <Card.Footer style={{textAlign:'center'}}> 
              <a href='/quiz_rules'>Jogar!</a>
              </Card.Footer>
            </Card>
            <Card className='EfctvCard'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title  style={{textAlign:'center'}}>Caça-palavras</Card.Title>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item><FontAwesomeIcon icon={faClock}/>&nbsp;&nbsp;Duração: 15 minutos</ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;N° de jogadores: 1</ListGroup.Item>
              </ListGroup>
              <Card.Footer style={{textAlign:'center'}}> 
              <a href='/caça_palavras_rules'>Jogar!</a>
              </Card.Footer>
            </Card>
          </CardGroup>
          </Col>
          </Row>
          </div>
        </Container>
      </div>
      <a style={{textAlign:'center', cursor:'pointer',color:'white'}} onClick={()=>scroll.scrollToTop()} >
      <div style={{backgroundColor:'black'}} className='Topo'>
      <FontAwesomeIcon icon={faCaretSquareUp} size="lg" />
      </div></a>
  </React.Fragment>
    
  );
}

export default App;