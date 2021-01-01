//ARQUIVO DE ROTAS. AQUI QUE IREMOS PUXAR TODAS AS TELAS QUE VAMOS UTILIZA E COLOCAR AS DEVIDAS ROTAS PARA FUNCIONAR AQUI
import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd'

export default () => {
    return (
        //Acessando telas do sistema com o Route
        <Switch> 
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>
            <RouteHandler exact path="/about">
                <About />
            </RouteHandler>
            <RouteHandler exact path="/signin">
                <SignIn />
            </RouteHandler>
            <RouteHandler exact path="/signup">
                <SignUp />
            </RouteHandler>
            <RouteHandler exact path="/ad/:id">
                <AdPage />
            </RouteHandler>
            <RouteHandler private exact path="/post-an-ad">
                <AddAd />
            </RouteHandler>
            <RouteHandler>
                <NotFound />
            </RouteHandler>
        </Switch>
    );
}