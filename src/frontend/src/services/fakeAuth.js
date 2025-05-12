export const fakeDB = {
    users: [],
  };
  
  export function cadastrarUsuario({ nome, email, senha }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existe = fakeDB.users.find((user) => user.email === email);
        if (existe) {
          reject("Usuário já existe!");
        } else {
          fakeDB.users.push({ nome, email, senha });
          resolve("Cadastro realizado com sucesso!");
        }
      }, 1000);
    });
  }
  
  export function loginUsuario({ email, senha }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const usuario = fakeDB.users.find(
          (user) => user.email === email && user.senha === senha
        );
        if (usuario) {
          resolve("Login bem-sucedido!");
        } else {
          reject("E-mail ou senha incorretos.");
        }
      }, 1000);
    });
  }
  
  export function resetarSenha(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const usuario = fakeDB.users.find((user) => user.email === email);
        if (usuario) {
          resolve("Instruções para redefinir a senha foram enviadas.");
        } else {
          reject("E-mail não encontrado.");
        }
      }, 1000);
    });
  }