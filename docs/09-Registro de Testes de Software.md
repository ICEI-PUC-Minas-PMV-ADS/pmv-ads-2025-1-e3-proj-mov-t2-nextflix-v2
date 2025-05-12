# Registro de Testes de Software

**Informações Gerais:**

- **Data:** 10/05/2025  
- **Responsável pelos Testes:** Eduardo Coutinho da Silva Junior 
- **Versão da Aplicação Testada:** 1.0.0 (Frontend)  
- **Backend:** Em desenvolvimento  
- **Plano de Testes:** Home – Exibição de Filmes ao Pesquisar pela Barra de Pesquisa  

---

### **Caso de Teste 1: Home – Exibição de Filmes ao Pesquisar pela Barra de Pesquisa**

- **Requisitos Referentes:** Barra de Pesquisa (frontend apenas)  
- **Descrição:** Verificar se a barra de pesquisa exibe corretamente os filmes quando são pesquisados.  
- **Objetivo do Teste:** Assegurar que o usuário visualize corretamente os filmes ao pesquisar pela barra de pesquisa.

---

#### **Passos:**

1. **Abrir o aplicativo e aguardar o carregamento da Home.**
2. **Verificar se a barra de pesquisa está visível e funcional.**
3. **Digitando o nome do filme desejado na barra de pesquisa.**
4. **Observar os filmes correspondentes à pesquisa.**
5. **Verificar se os resultados aparecem rapidamente e com boa legibilidade.**

---

#### **Critérios de Êxito:**

1. **A barra de pesquisa funciona corretamente e é visível.**
2. **As informações de filmes aparecem legíveis (título, imagem e descrição).**
3. **Os filmes pesquisados aparecem corretamente e correspondem ao termo de pesquisa.**
4. **Quando não há resultados, uma mensagem adequada de "Nenhum filme encontrado" é exibida.**
5. **O tempo de resposta para exibir os filmes pesquisados é rápido.**

---


https://github.com/user-attachments/assets/b8abb2ab-f359-4039-aaad-d25ed2c51415


#### **Resultados:**

- **Passos 1-5:** Aprovado (Frontend exibiu os resultados corretamente de acordo com o termo pesquisado)  
- **Observações:**  
  - **APIs de backend ainda em desenvolvimento, utilizando API TMDb.**  
  - **Backend ainda em desenvolvimento; testes de integração pendentes.**


---


**Informações Gerais:**

- **Data:** 11/05/2025  
- **Responsável pelos Testes:** Hana Karolina Neves Siqueira 
- **Versão da Aplicação Testada:** 1.0.0 (Frontend)  
- **Backend:** Em desenvolvimento  
- **Plano de Testes:** Teste de Telas de Autenticação (Login, Cadastro e Redefinição de Senha)

---

## 🔹 Caso de Teste 1: Tela de Login

**Requisitos Referentes:**  
Tela de Login com campos de e-mail e senha, botão "Entrar" e links para Cadastro e Reset de Senha

**Descrição:**  
Verificar se os elementos da tela de login aparecem corretamente e se os campos e botões estão operacionais

**Objetivo do Teste:**  
Garantir que a tela esteja pronta para integração com o backend e ofereça uma boa experiência ao usuário

**Passos:**
1. Acessar a aplicação na rota inicial `/`
2. Verificar se os campos de e-mail e senha estão visíveis
3. Verificar se o botão “Entrar” aparece corretamente
4. Testar preenchimento dos campos e clique no botão
5. Clicar nos links para navegação (Cadastro e Reset)

**Critérios de Êxito:**
- Todos os elementos visíveis e funcionais
- Validação visual ao clicar em “Entrar” sem preencher os campos
- Navegação entre páginas funcionando

**Resultado:**  
✅ **Aprovado** – A tela renderiza corretamente e está funcional (frontend)

**Observações:**  
Integração com API de autenticação pendente (backend em desenvolvimento)

---

## 🔹 Caso de Teste 2: Tela de Cadastro

**Requisitos Referentes:**  
Tela de Cadastro com campos de nome, e-mail, senha e botão “Cadastrar”

**Descrição:**  
Testar a funcionalidade da interface de cadastro e sua navegação

**Objetivo do Teste:**  
Assegurar que o formulário possa ser preenchido e que os elementos apareçam corretamente

**Passos:**
1. Navegar até `/cadastro`
2. Verificar a presença dos campos de nome, e-mail e senha
3. Preencher os campos com dados fictícios
4. Clicar em “Cadastrar”
5. Clicar no link para retornar ao login

**Critérios de Êxito:**
- Todos os campos funcionais
- Botão de cadastro opera corretamente
- Link de navegação para login funcional

**Resultado:**  
✅ **Aprovado** – Layout e interações estão funcionando

**Observações:**  
Envio de dados para o backend ainda será implementado.

---

## 🔹 Caso de Teste 3: Tela de Redefinição de Senha

**Requisitos Referentes:**  
Tela de recuperação de senha com campo de e-mail e botão para envio de link

**Descrição:**  
Validar se a tela aparece corretamente e se os campos respondem à interação do usuário

**Objetivo do Teste:**  
Confirmar que a tela está pronta para receber integração com a API de envio de e-mail

**Passos:**
1. Acessar a rota `/reset`
2. Preencher o campo com e-mail fictício
3. Clicar em “Enviar link de recuperação”
4. Clicar no link para voltar ao login

**Critérios de Êxito:**
- Campo de e-mail funcional
- Botão responde corretamente
- Navegação de retorno para login funcionando

**Resultado:**  
✅ **Aprovado** – Todos os elementos estão presentes e funcionais

**Observações:**  
A integração com o serviço de envio de e-mail será realizada após o backend estar disponível.

---


https://github.com/user-attachments/assets/b157a04b-3b08-437c-90ca-2e6e67519cc0




#### **Resultado:**  
✅ **Aprovado** – Todos os elementos estão presentes e funcionais

**Observações:**  
A integração com o serviço de envio de e-mail será realizada após o backend estar disponível.

---

## 🛠️ Observações Finais

- As três telas testadas estão finalizadas no front-end
- Todas as navegações entre as rotas funcionam corretamente
- As validações visuais foram implementadas
- Backend ainda será integrado para envio real de dados e autenticação
