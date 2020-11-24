import React, { Component } from "react";
import "./style.css";
import Header from "../../../components/Header";
import { Helmet } from "react-helmet";

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Helmet title="Roleta"/>
                <Header headerTitle="Jogo da Roleta"/>

                <div className="LoadMessage">Procurando jogadores (1/2)</div>
                <div className="PreLoader">
                    <div className="Loader">
                        <div className="Dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}