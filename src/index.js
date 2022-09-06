import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter as Router} from 'react-router-dom';
import App from "./App";
import {MarketDataContextProvider} from "./Context/AppContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MarketDataContextProvider>
            <Router>
                <App/>
            </Router>
        </MarketDataContextProvider>
    </React.StrictMode>
);
