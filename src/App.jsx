import './App.css';
import React, { useState } from "react";
// import { InputText } from './components/inputText';
// import { RenderTenki } from './components/renderTenki';
import { Routes, Route } from "react-router-dom"; 
import { Home } from './pages/home'
import { TenkiPage } from './pages/tenkiPage'

function App() {
    return (
        <div>
            <h1>共通パーツです</h1>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/TenkiPage" element={<TenkiPage />} />
            </Routes>

        </div>
    );
}

export default App;