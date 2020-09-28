import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import { Helmet } from "react-helmet";
import ead from "../../assets/images/ead-lab.png";
import backgroundParticle from '../../components/Background-particle'
function App() {
    return(
        <React.Fragment>
            <Helmet title="Quiz">
                <Container fluid="xl">
                    <backgroundParticle></backgroundParticle>
                    <Container className="content">
                    <h1>Quiz Controle de Qualidade</h1>
                        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> -->
                        <meta http-equiv="X-UA-Compatible" content="ie-edge"/>
                        <title>Quick Quiz</title>
                        <link rel="stylesheet" href="src/styles/app.css"/>
                        <div class="container">
                            <div id="home" class="flex-center flex-column">
                                <h1>Quick Quiz</h1>
                                <a class="btn" href="src/pages/game.html">Play</a>
                                <a class="btn" href="src/pages/highscores.html">High Scores</a>
                            </div><!-- the end #home -->
                    </div><!-- the end .container --> */}
                    </Container>
                </Container>
            </Helmet>
        </React.Fragment>
    );
}

export default App;