import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//changed from BrowserRouter to HashRouter because github pages doesn't support BrowserRouter
<HashRouter>
    <App />
</HashRouter>
);
