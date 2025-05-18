import HomePage from './Pages/HomePage.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/globals.css';

import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx';
import Cadastro from './Pages/Cadastro.jsx';
import ResetSenha from './Pages/ResetSenha.jsx';
import MovieDetail from './Pages/MovieDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/reset-senha" element={<ResetSenha />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/movie/:123" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
