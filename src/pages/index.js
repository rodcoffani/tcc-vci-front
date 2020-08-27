import React from 'react';
import './styles.css';
import Header from '../components/Header';
import {Carousel,Row, Col, Container, Card, CardGroup, ListGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock,faUser} from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
  <React.Fragment>
    <div className="App">
      <Header />
      <div className="content">
        <div className="title">
          <div className="h1">
            EAD-LAB
          </div>
          <div className="sub">
            Nós somos uma plataforma de treinamento da empresa VCI-Brasil.
          </div>
        </div>
        <div className='EfctvDiv'></div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/330?text=First slide&bg=373940"
              alt="P. slide"
            />
            <Carousel.Caption className='Caption'>
              <h1>Coloca</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/330?text=Second slide&bg=20232a"
              alt="S. slide"
            />

            <Carousel.Caption className='Caption'>
              <h1>um</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/330?text=Second slide&bg=282c34"
              alt="T. slide"
            />

            <Carousel.Caption className='Caption'>
              <h1>texto</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='EfctvDiv'></div>
        <Container fluid style={{
          marginTop:'58px'
        }}>
          <Row>
              <Col>
              <span>Nossos jogos!</span>
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
                <ListGroup.Item><FontAwesomeIcon icon={faClock}/>Duração:</ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faUser}/>N° de jogadores:</ListGroup.Item>
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
                <ListGroup.Item><FontAwesomeIcon icon={faClock}/>Duração:</ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faUser}/>N° de jogadores:</ListGroup.Item>
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
                <ListGroup.Item><FontAwesomeIcon icon={faClock}/>Duração:</ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faUser}/>N° de jogadores:</ListGroup.Item>
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
      
    </div>
    <div style={{backgroundColor:'black',textAlign:'center', color:'white'}}>
      <h1>Footer</h1>
      <br></br>
    </div>
  </React.Fragment>
    
  );
}

export default App;
