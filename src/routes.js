import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Administrador from "./pages/Administrador";
import Roleta from "./pages/Jogos/Roleta/jogo";
import Quiz from "./pages/Jogos/Quiz/quiz";
import Caca_palavras from "./pages/Jogos/Caça-palavras/caça_palavras";
import Roleta_rules from "./pages/Jogos/Roleta";
import Quiz_rules from "./pages/Jogos/Quiz";
import Caca_palavras_rules from "./pages/Jogos/Caça-palavras";
import Perfil from "./pages/Administrador/profile";
import CadastroJogos from "./pages/Administrador/insertGames";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/login" 
                    component={ Login }
                />
                <Route
                    path="/cadastro" 
                    component={ Cadastro }
                />
                <Route 
                    exact path="/"
                    component={ Home } 
                />
                <Route 
                    path="/administrador"
                    component={ Administrador }
                />
                <Route 
                    path="/roleta_rules"
                    component={ Roleta_rules }
                />
                <Route 
                    path="/jogos/roleta"
                    component={ Roleta }
                />
                <Route
                    path="/quiz_rules"
                    component={ Quiz_rules }
                />
                <Route
                    path="/jogos/quiz"
                    component={ Quiz }
                />
                <Route 
                    path="/caça_palavras_rules"
                    component={ Caca_palavras_rules }
                />
                <Route 
                    path="/caça_palavras"
                    component={ Caca_palavras }
                />
                <Route
                    path="/profile"
                    component={ Perfil }
                />
                <Route
                    path="/insertGames"
                    component={ CadastroJogos }
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;