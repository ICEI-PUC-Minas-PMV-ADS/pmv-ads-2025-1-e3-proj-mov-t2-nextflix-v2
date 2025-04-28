
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUsuario } from "../services/fakeAuth";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const resposta = await loginUsuario({ email, senha });
      setMensagem(resposta); // Exibe: "Login bem-sucedido!"
    } catch (erro) {
      setMensagem(erro); // Exibe erro se o e-mail/senha estiverem incorretos
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Entrar no Nextflix</h1>
        <input
          type="text"
          placeholder="Usuário (e-mail)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>

        {mensagem && <p>{mensagem}</p>}

        <p>
          <Link to="/cadastro">Não tem conta? Cadastre-se</Link>
        </p>
        <p>
          <Link to="/reset-senha">Esqueceu a senha?</Link>
        </p>
      </div>
    </div>
  );
}
