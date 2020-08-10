//ARQUIVO DE ROTAS. AQUI QUE IREMOS PUXAR TODAS AS TELAS QUE VAMOS UTILIZA E COLOCAR AS DEVIDAS ROTAS PARA FUNCIONAR AQUI
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';

export default () => {
    return (
        //Acessando telas do sistema com o Route
        <Switch> 
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/signin">
                <SignIn />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path="/ad/:id">
                <AdPage />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}