import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages";
import Login from "./pages/Login";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                 path="/Login" 
                 component={ Login }
                />
                <Route 
                    exact path="/"
                    component={ Home } 
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;