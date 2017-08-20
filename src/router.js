import React from 'react';
import {Router, Route, IndexRedirect} from 'dva/router';
import Home from './view/Home';
import Apply from './view/Apply';
import Sucess from './view/Sucess';
import Index from './view/Index';
import LoandStrategy from './view/LoandStrategy';
import About from './view/About';
import CreditCardHandling from './view/CreditCardHandling';

function RouterConfig({history}) {

    return (
        <Router history={history}>
            <Route path="/">
                <IndexRedirect to="home"/>
                <Route path="home" component={Home}/>
                <Route path="apply" component={Apply}/>
                <Route path="sucess" component={Sucess}/>
                <Route path="index" component={Index}/>
                <Route path="loan" component={LoandStrategy}/>
                <Route path="about" component={About}/>
                <Route path="credit" component={CreditCardHandling}/>
            </Route>
        </Router>
    );
}

export default RouterConfig;
