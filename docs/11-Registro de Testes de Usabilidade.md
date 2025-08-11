# 📄 Registro de Testes de Usabilidade – NextFlix

## 🧪 Informações Gerais

- **Data de Realização:** 10/05/2025 a 01/06/2025
- **Versão da Aplicação Testada:** 1.0.0
- **Responsáveis pelos Testes:**
  - Eduardo Coutinho da Silva Junior
  - Hana Karolina Neves Siqueira
  - Artur Maciel de Assis Pinto
  - Giovanni Gonçalves Shintaku
- **Ambiente de Teste:** Aplicação React Native com integração parcial ao backend
- **Objetivo:** Avaliar a usabilidade das principais funcionalidades da aplicação NextFlix, incluindo barra de pesquisa, filtro de pesquisa, autenticação e edição de perfil.

---

## 📋 Casos de Teste

### TU-001 – Navegação e Edição de Perfil

- **Descrição:** O usuário deve ser capaz de navegar até a tela de perfil, editar suas informações e salvar as alterações.

![Edição de Perfil - Antes](../imagens-usabilidade/perfil-antes.png)  
![Edição de Perfil - Depois](../imagens-usabilidade/perfil-depois.png)

---

### TU-002 – Login com Credenciais Válidas

- **Descrição:** O usuário deve conseguir realizar login utilizando um e-mail e senha válidos.

![Tela de Login](../imagens-usabilidade/login-teste.png)

---

### TU-003 – Redefinição de Senha

- **Descrição:** O usuário deve localizar a opção de redefinição de senha e realizar o processo com sucesso.

![Tela de Redefinir Senha](../imagens-usabilidade/redefinir-senha.png)

---

### TU-004 – Pesquisa de Filmes

- **Descrição:** O usuário deve conseguir utilizar a barra de pesquisa para encontrar filmes.

![Barra de Pesquisa em uso](../imagens-usabilidade/barra-pesquisa.png)  
![Resultados da Pesquisa](../imagens-usabilidade/resultado-pesquisa.png)

---

### TU-005 – Mensagem de Nenhum Filme Encontrado

- **Descrição:** O sistema deve exibir corretamente a mensagem "Nenhum filme encontrado" quando não houver resultados para a pesquisa.

![Mensagem - Nenhum Filme Encontrado](../imagens-usabilidade/nenhum-filme.png)

---

### TU-007 – Filtro em uso e retorno da busca

- **Descrição:**O Usuário deve conseguir usar o filtro de filmes na tela Home

![Botao filtro na pag Home](../imagens-usabilidade/filtro.png)
![Filtro preenchido](../imagens-usabilidade/filtroFull.png)
![Home após filtro aplicado](../imagens-usabilidade/filtroAplicado.png)

## 📊 Resultados dos Testes

| Caso de Teste | Resultado   | Observações                                                        |
|---------------|-------------|---------------------------------------------------------------------|
| TU-001        | ✅ Aprovado | Edição de perfil salva corretamente no banco de dados.             |
| TU-002        | ✅ Aprovado | Login realizado com sucesso utilizando credenciais válidas.        |
| TU-003        | ✅ Aprovado | Processo de redefinição de senha concluído com sucesso.            |
| TU-004        | ✅ Aprovado | Barra de pesquisa retornou resultados relevantes e legíveis.       |
| TU-005        | ✅ Aprovado | Mensagem de "Nenhum filme encontrado" exibida corretamente.        |
| TU-007        | ✅ Aprovado | Usuário conseguiu utilizar a funcionalidade Filtro que retornou resultados plausíveis |


---

## 🧠 Feedback e Observações por Caso de Teste

| ID     | Descrição do Teste                                                                           | Feedback dos Participantes                                               |
|--------|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| TU-001 | O usuário deverá navegar pelas telas, checando a conexão entre as mesmas e editar o perfil.  | Poderiam ter menos cliques para habilitar e salvar os campos de edição. |
| TU-002 | O usuário deve conseguir realizar login com um e-mail e senha válidos.                        | Fluxo intuitivo, mas faltou feedback visual ao errar a senha.           |
| TU-003 | O usuário deve localizar a opção de redefinição de senha e realizar o processo.               | Processo fácil de encontrar, mas faltou animação ou carregamento claro. |
| TU-004 | O usuário deve conseguir utilizar a barra de pesquisa para encontrar filmes.                  | Pesquisa rápida e eficaz. Resultados bem exibidos.                      |
| TU-005 | O sistema deve exibir corretamente a mensagem "Nenhum filme encontrado".                      | Mensagem clara, mas poderia vir acompanhada de sugestão de busca.       |
| TU-007 | O Usuário deve conseguir usar o filtro de filmes na tela Home                                 | o filtro foi bem intuitivo mas não deixou espaço para margem de erro nos resultados      |

---

## 📝 Conclusão

Os testes de usabilidade realizados na aplicação NextFlix demonstraram que as principais funcionalidades estão operando conforme o esperado, proporcionando uma experiência satisfatória ao usuário. As interfaces são intuitivas, e as ações podem ser realizadas de forma eficiente. Recomenda-se a continuidade dos testes com a integração completa do backend para validar o comportamento do sistema em um ambiente de produção.
