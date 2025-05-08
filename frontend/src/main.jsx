import HomePage from './Pages/HomePage.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/globals.css';

import Login from './Pages/Login.jsx'
import Cadastro from './Pages/Cadastro.jsx'
import ResetSenha from './Pages/ResetSenha.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/reset-senha" element={<ResetSenha />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
