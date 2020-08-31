import React,{useEffect} from 'react';
import './styles.css';
import Header from '../components/Header';
import {Carousel,Row, Col, Container, Card, CardGroup, ListGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock,faUser,faEnvelope,faCaretSquareUp} from '@fortawesome/free-regular-svg-icons'
import {animateScroll as scroll} from 'react-scroll'
import {Helmet} from "react-helmet"
function App() {

  return (
  <React.Fragment>
    <Helmet title="Home" />
      <Header />
      <div className="content">
        <div className='EfctvDiv'></div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/350?text=First slide&bg=373940"
              alt="P. slide"
            />
            <Carousel.Caption className='Caption'>
              <h1>Coloca</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/350?text=Second slide&bg=20232a"
              alt="S. slide"
            />

            <Carousel.Caption className='Caption'>
              <h1>um</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/350?text=Second slide&bg=282c34"
              alt="T. slide"
            />

            <Carousel.Caption className='Caption'>
              <h1>texto</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='EfctvDiv'></div>

      <div>
      <Container style={{
          marginTop:'58px' }}
          >
        <Row >
          <Col sm={12} >
            <h3 className='main-title'>Título aqui</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
              <img style={{borderRadius:'10px'}} src="https://ichef.bbci.co.uk/news/410/cpsprodpb/3CC7/production/_112395551_eso2008a.jpg"></img>
          </Col>
          <Col sm={6}>
            <h3>Título Curtinho</h3>
            <p>Um texto um pouco maior e mais explicativo sobre o EAD-LAB e seu projeto como um todo. De preferência com mais de uma frase e linguagem formal.</p>
            
            <ul>
                <li>Texto do Check 1</li>
                <li>Texto do Check 2</li>
                <li>Texto do Check 3</li>
            </ul>
                
            </Col>
                          
        </Row>
      </Container>
      
      </div>
        



        <Container fluid style={{
          marginTop:'58px'
        }} >
        
          <Row >
              <Col >
              <span >Nossos jogos!</span>
              </Col>
          </Row>
          <Row> 
          <Col xs={12} md={12}>
          <CardGroup style={{
          marginTop:'78px',
          marginBottom:'20px'
          }} className='EfctvCardG'>
            <Card className='EfctvCard'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Título</Card.Title>
                <Card.Text>
                  1.
                </Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faClock}/>&nbsp;&nbsp;Duração:</ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;N° de jogadores:</ListGroup.Item>
              </ListGroup>
              <Card.Footer style={{textAlign:'center'}}> 
              <a href='Cadastro'>Jogar!</a>
              </Card.Footer>
            </Card>
            <Card className='EfctvCard'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Título</Card.Title>
                <Card.Text>
                  2.
                </Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faClock}/>&nbsp;&nbsp;Duração:</ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;N° de jogadores:</ListGroup.Item>
              </ListGroup>
              <Card.Footer style={{textAlign:'center'}}> 
              <a href='Cadastro'>Jogar!</a>
              </Card.Footer>
            </Card>
            <Card className='EfctvCard'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title  style={{textAlign:'center'}}>Título</Card.Title>
                <Card.Text>
                  3.
                </Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faClock}/>&nbsp;&nbsp;Duração:</ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;N° de jogadores:</ListGroup.Item>
              </ListGroup>
              <Card.Footer style={{textAlign:'center'}}> 
              <a href='Cadastro'>Jogar!</a>
              </Card.Footer>
            </Card>
          </CardGroup>
          </Col>
          </Row>
        </Container>
      
      </div>
      <a style={{textAlign:'center', cursor:'pointer',color:'blue'}} onClick={()=>scroll.scrollToTop()} >
      <div style={{backgroundColor:'black'}} className='Topo'>
      <FontAwesomeIcon icon={faCaretSquareUp} size="lg" />
      </div></a>
  </React.Fragment>
    
  );
}

export default App;