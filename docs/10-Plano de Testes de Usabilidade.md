# 📋 Plano de Testes de Usabilidade – NextFlix

## 🧭 Visão Geral

O teste de usabilidade permite avaliar a qualidade da interface da aplicação interativa NextFlix, com foco na facilidade de navegação, clareza das informações e eficiência no uso. Este plano é baseado na especificação funcional da aplicação e contempla testes já realizados e planejados, considerando a implementação parcial do backend.

---

## 🎯 Objetivos

- Avaliar a experiência de uso da barra de pesquisa, telas de autenticação e edição de perfil.
- Validar se as funcionalidades principais estão intuitivas e com tempo de resposta aceitável.
- Identificar erros de navegação, usabilidade e compreensão.
- Recolher feedback qualitativo e quantitativo sobre a satisfação do usuário.

---

## 🧪 Requisitos Funcionais e Casos de Teste de Usabilidade

| ID     | Descrição do Teste                                                                 | Tela                    |
|--------|--------------------------------------------------------------------------------------|--------------------------|
| TU-001 | O usuário deverá navegar pelas telas e fazer alterações no perfil com sucesso.      | Perfil / Edição de Perfil |
| TU-002 | O usuário deve conseguir realizar login com um e-mail e senha válidos.              | Login                    |
| TU-003 | O usuário deve localizar a opção de redefinição de senha e realizar a ação.         | Login / ResetSenha       |
| TU-004 | O usuário deve conseguir usar a barra de pesquisa e visualizar os resultados.       | Home                     |
| TU-005 | O sistema deve exibir corretamente a mensagem "Nenhum filme encontrado", se aplicável. | Home                 |
| TU-006 | O sistema deve atualizar corretamente os dados no banco ao editar o perfil.         | Perfil / Banco de Dados  |

---

## ✅ Tarefas, Critérios de Êxito e Avaliação

| Tarefa                                       | Critério de Êxito                                                                 | Avaliação                                                                                       |
|---------------------------------------------|-----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Realizar login                               | Concluir em até 2 tentativas e menos de 30s                                       | Campos visíveis, botão funcional, validação visual, navegação                                   |
| Redefinir senha                              | Localizar e executar em até 5 minutos                                             | Facilidade de navegação, clareza das etapas, feedback visual                                    |
| Pesquisar filme pela barra de pesquisa       | Resultados em até 3s, com título, imagem e descrição legíveis                     | Tempo de resposta, legibilidade, relevância, exibição da mensagem "Nenhum filme encontrado"     |
| Editar perfil                                | Dados devem ser salvos no banco de dados                                          | Navegação fluida, persistência correta, feedback claro                                          |
| Salvar novo perfil com sucesso               | Alterações refletidas e salvas corretamente                                       | Comunicação com backend e retorno visual                                                        |

---

## 📊 Dados Coletados

- **Satisfação do Usuário:** Questionário de 1 a 5 após cada tarefa
- **Tempo de Execução:** Cronometrado por tarefa
- **Número de Cliques:** Contado manualmente durante a tarefa
- **Erros e Desvios:** Erros de navegação, validação e feedback ausente

---

## 📈 Métricas de Usabilidade

| Métrica              | Descrição                                                                 |
|----------------------|---------------------------------------------------------------------------|
| Feedback do Usuário  | Percepções sobre clareza, facilidade e confiança nas funcionalidades      |
| Eficácia do Uso      | Número de erros, tempo e cliques por tarefa                               |
| Interação com o Sistema | Fluidez da navegação, facilidade de localização de recursos, resposta visual |

---

## 📅 Histórico de Testes

| Data       | Responsável                       | Funcionalidade Testada                                | Resultado |
|------------|-----------------------------------|--------------------------------------------------------|-----------|
| 10/05/2025 | Eduardo Coutinho                  | Home – Barra de Pesquisa                               | ✅ Aprovado |
| 11/05/2025 | Hana Karolina Neves Siqueira      | Login e Redefinição de Senha                           | ✅ Aprovado |
| 11/05/2025 | Hana Karolina Neves Siqueira      | Perfil e Cadastro do Usuário                           | ✅ Aprovado |
| 01/06/2025 | Artur Maciel de Assis Pinto       | User – Integração e Visualização de Dados              | ✅ Aprovado |

---

## 🔐 Observações Finais

- A barra de pesquisa demonstrou bom desempenho e clareza dos resultados.
- A tela de login está visualmente funcional e pronta para integração.
- A edição de perfil foi validada com sucesso, com persistência de dados.
- Testes foram realizados com uso da API TMDb; backend em fase de desenvolvimento.

---

## 🔗 Links Úteis

- [Teste De Usabilidade: O Que É e Como Fazer Passo a Passo (neilpatel.com)](https://neilpatel.com/br/blog/teste-de-usabilidade/)
- [Teste de usabilidade: tudo o que você precisa saber! | by Jon Vieira | Aela.io | Medium](https://medium.com/aela/teste-de-usabilidade-o-que-voc%C3%AA-precisa-saber-39a36343d9a6/)
- [Planejando testes de usabilidade: o que (e o que não) fazer | iMasters](https://imasters.com.br/design-ux/planejando-testes-de-usabilidade-o-que-e-o-que-nao-fazer/)
- [Usability.gov – Templates e Guias](https://www.usability.gov/how-to-and-tools/resources/templates.html)

---

> **Nota:** Todos os dados foram coletados de forma anônima e em conformidade com a LGPD.
