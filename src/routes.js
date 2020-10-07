import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Relatorios from "./pages/Administrador/reports";
import Administrador from "./pages/Administrador";
import Roleta from "./pages/Jogos/Roleta";
import Perfil from "./pages/Administrador/profile"
import CadastroJogos from "./pages/Administrador/insertGames"
import Funcionario from "./pages/Funcionario";
import Profile from "./pages/Funcionario/profile"


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
                    path="/jogos/roleta"
                    component={ Roleta }
                />
                <Route
                    path="/profile"
                    component={ Perfil }
                />
                <Route
                    path="/insertGames"
                    component={ CadastroJogos }
                />
                <Route
                    path="/funcionario"
                    component={ Funcionario }
                />
                <Route
                    path="/profile"
                    component={ Profile }
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;