import React, { useState, useEffect } from 'react';
import '../styles.css';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar/admin';
import {Helmet} from "react-helmet"
import BackgroundParticle from '../../../components/Background-particle'
import '@fortawesome/fontawesome-free';
import API from "../../../api";

const EditGames = (props) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        API.get("/game/all").then((res) => {
            setGames(res.data);
        });
    }, []);

    const goToInsert = (edit_game) => {
        window.open(`/editGames/${edit_game}`);
    }

    return (
        <div>
            <Helmet title="Edição de Jogos"/>
            <Sidebar pageSelected="editGames" />
            <Header headerTitle="Administrador"/>
            <div className="container">
                <BackgroundParticle />
                <div className="mother-games">
                    <div className="insert-games">
                        <div className="table-games">
                            {
                                games.map(game => {
                                    return (
                                        <div className="col col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                            <div className="card mb-2">
                                                <div className="card-body">
                                                    <h5 className="card-title card-game-title">{game.name_game}</h5>
                                                    <h6 className="card-subtitle mb-3 text-muted">Tempo de jogo: {game.time_game} min</h6>
                                                    <div className="text-center">
                                                        <button type="button" className="btn btn-sm btn-primary mb-2" onClick={() => goToInsert(game.name_game.replace(' ', '-'))}>Cadastrar Perguntas</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditGames;