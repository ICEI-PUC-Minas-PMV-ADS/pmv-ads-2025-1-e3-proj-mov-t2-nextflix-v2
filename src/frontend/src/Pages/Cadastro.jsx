
import { useState } from "react";
import { Link } from "react-router-dom";
import { cadastrarUsuario } from "../services/fakeAuth";
import "../styles/cadastro.css";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCadastro = async () => {
    try {
      const resposta = await cadastrarUsuario({ nome, email, senha });
      setMensagem(resposta);
    } catch (erro) {
      setMensagem(erro);
    }
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h1>Crie sua conta</h1>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button onClick={handleCadastro}>Cadastrar</button>
        {mensagem && <p>{mensagem}</p>}
        <p><Link to="/">Já tem conta? Entrar</Link></p>
      </div>
    </div>
  );
}

