import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page from './page2';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



ReactDOM.render(
    <Router>
        <Switch>
            <Route path={`${process.env.PUBLIC_URL}/page2`} component={Page}/>  
            <Route component={App}/>  
        </Switch>

    </Router>
, document.getElementById('root'));
registerServiceWorker();
