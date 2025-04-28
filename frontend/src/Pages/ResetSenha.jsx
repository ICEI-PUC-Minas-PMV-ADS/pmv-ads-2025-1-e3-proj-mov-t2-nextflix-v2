import "../styles/reset.css";
import { Link } from "react-router-dom";

export default function ResetSenha() {
  return (
    <div className="reset-container">
      <div className="reset-box">
        <h1>Redefinir Senha</h1>
        <p>Insira seu e-mail para redefinir a senha:</p>
        <input type="email" placeholder="E-mail" />
        <button>Enviar</button>
        <p>
          <Link to="/">Voltar ao login</Link>
        </p>
      </div>
    </div>
  );
}

