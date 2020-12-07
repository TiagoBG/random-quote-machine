import React from 'react';
import ReactDOM from 'react-dom';
import RandomQuoteMachine from './components/RandomQuoteMachine'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';


ReactDOM.render( <React.StrictMode>
    <RandomQuoteMachine/>
    </React.StrictMode>,
    document.getElementById('root')
);