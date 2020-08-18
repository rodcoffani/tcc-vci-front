import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Administrador from "./pages/Administrador";

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
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;