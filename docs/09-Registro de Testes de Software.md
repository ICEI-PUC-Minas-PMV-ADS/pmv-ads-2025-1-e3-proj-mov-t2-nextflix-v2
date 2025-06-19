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
- **Plano de Testes:** Teste de Telas de Autenticação (Login e Redefinição de Senha)

---

## Caso de Teste 2: Tela de Login

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

 https://github.com/user-attachments/assets/b157a04b-3b08-437c-90ca-2e6e67519cc0

**Resultado:**  
**Aprovado** – A tela renderiza corretamente e está funcional (frontend)

**Observações:**  
Integração com API de autenticação pendente (backend em desenvolvimento)

---

## Caso de Teste 3: Tela de Perfil e de Cadastro

**Requisitos Referentes:**  
RF001- A aplicação deve permitir que o usuário crie e edite um perfil próprio e único(nome e biografia).

**Descrição:**  
Validar o acesso à tela de perfil, e as funcionalidades da tela de cadastro/edição de perfil.

**Objetivo do Teste:**  
Confirmar que os dados do usuário estão sendo salvos no banco.

**Passos:**
1. Acessar a tela de perfil
2. Clicar em 'editar cadastro' para ir para a tela de edição
3. Clicar editar perfil para habilitar edição
4. Alterar os dados e salvar
5. Verificar no banco se foi salvo

**Critérios de Êxito:**
- Dados corretamente exibidos
- Nova entrada de dados salva no banco
- Navegação entre as duas telas funcionando

  ![detalhes usuário](https://github.com/user-attachments/assets/66992828-a44d-485c-8dbe-bc17a08ccd2f)
  ![detalhes usuário](https://github.com/user-attachments/assets/0a191211-f8bd-4248-95b8-32e8ef24c099)
  ![449865724-3d4265f9-f4a4-4f55-bce1-a9196848e0e6](https://github.com/user-attachments/assets/dda66c3d-150c-4243-b5f0-2cde4b3a0b0c)


**Resultado:**  
**Aprovado**


---

## Observações Finais

- A aplicação react-native comunicou corretamente com o backend alterando e salvando dados no banco de dados.


**Informações Gerais:**

- **Data:** 01/06/2025  
- **Responsável pelos Testes:** Artur Maciel de Assis Pinto 
- **Versão da Aplicação Testada:** 1.0.0  
- **Plano de Testes:** User 




