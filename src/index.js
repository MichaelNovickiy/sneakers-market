import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addItemCart, contextValues, MarketDataContext} from "./Context/AppContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MarketDataContext.Provider value={contextValues}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MarketDataContext.Provider>
    </React.StrictMode>
);
