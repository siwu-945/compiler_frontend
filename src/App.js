// src/App.js
import React, { useState } from 'react';
import CodeInputForm from './compoents/SourceCodeInput';
import CodeOutput from './compoents/IROutput';
import Header from './compoents/Header';
import './styles/App.css';
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import About from "./compoents/About";
import Home from "./compoents/Home";

function App() {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    );
}

export default App;
