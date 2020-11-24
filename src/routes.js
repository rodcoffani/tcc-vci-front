import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Relatorios from "./pages/Administrador/reports";
import Administrador from "./pages/Administrador";
import Roleta from "./pages/Jogos/Roleta/jogo";
import Loading from "./pages/Jogos/Roleta/loading";
import Pergunta from "./pages/Jogos/Roleta/Pergunta";
import Quiz from "./pages/Jogos/Quiz/quiz";
import Roleta_rules from "./pages/Jogos/Roleta";
import Queue from "./pages/Jogos/Roleta/queue";
import Quiz_rules from "./pages/Jogos/Quiz";
import Perfil from "./pages/Administrador/profile";
import CadastroJogos from "./pages/Administrador/editGames";
import CadastroQuiz from "./pages/Administrador/editGames/insertQuiz";
import CadastroRoleta from "./pages/Administrador/editGames/insertRoleta";
import Funcionario from "./pages/Funcionario";
import Profile from "./pages/Funcionario/profile"
import Sobre from "./pages/about"
import Logout from "./pages/Logout";




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
                    path="/reports"
                    component={ Relatorios }
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
                    exact path="/jogos/roleta/queue"
                    component = { Queue }
                />
                <Route 
                    exact path="/jogos/roleta"
                    component={ Roleta }
                />
                <Route
                    path ="/jogos/loading"
                    component = { Loading }
                />
                <Route
                    exact path="/jogos/roleta/pergunta/:id"
                    component = { Pergunta }
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
                    path="/profile"
                    component={ Perfil }
                />
                <Route
                    exact path="/editGames"
                    component={ CadastroJogos }
                />
                <Route
                    path="/editGames/perguntados"
                    component={ CadastroRoleta }
                />
                <Route
                    path="/editGames/quiz"
                    component={ CadastroQuiz }
                />
                <Route
                    path="/funcionario"
                    component={ Funcionario }
                />
                <Route
                    path="/profile-employee"
                    component={ Profile }
                />
                <Route
                    path="/sobre"
                    component={ Sobre }
                />
                <Route 
                    path="/logout"
                    component={ Logout }
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;