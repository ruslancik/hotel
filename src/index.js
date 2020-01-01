import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import { RoomProvider } from './context';
import ScrollToTop from './component/ScrollToTop';

ReactDOM.render(
    <RoomProvider>
        <Router>
            <ScrollToTop/>
            <App />
        </Router>
    </RoomProvider>
, document.getElementById('root'));


serviceWorker.unregister();
