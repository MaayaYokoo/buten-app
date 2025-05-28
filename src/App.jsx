import "./assets/styles/reset.css";
import './App.css';
import React, { useState } from "react";
// import { InputText } from './components/inputText';
// import { RenderTenki } from './components/renderTenki';
import { Routes, Route } from "react-router-dom"; 
import { Home } from './pages/home'
import { TenkiPage } from './pages/tenkiPage'
import { NotFound } from './pages/notFound';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/tenkiPage" element={<TenkiPage />} />
                <Route path="/notFound" element={<NotFound />} />
            </Routes>

        </div>
    );
}

export default App;