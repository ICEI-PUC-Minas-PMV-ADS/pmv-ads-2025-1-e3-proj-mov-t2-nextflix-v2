# Plano de Testes de Software

## Caso de Teste 1: Home – Exibição de filmes ao pesquisar pela barra de pesquisa.

| **Requisito Referente**  | CT - 01 - Barra de pesquisa                                           |
|--------------------------|----------------------------------------------------------------------|
| **Descrição**             | Verificar se a barra de pesquisa exibe corretamente os filmes quando são pesquisados. |
| **Objetivo do Teste**     | Assegurar que o usuário visualize corretamente os filmes ao pesquisar. |

### Passos

1. **Abrir o aplicativo e aguardar o carregamento da Home.**
2. **Verificar se a barra de pesquisa está visível e funcional.**
3. **Digitando o nome do filme desejado na barra de pesquisa.**
4. **Observar os filmes correspondentes à pesquisa.**
5. **Verificar se os resultados aparecem rapidamente e com boa legibilidade.**

### Critérios de Êxito

1. **A barra de pesquisa funciona corretamente e é visível.**
2. **As informações de filmes aparecem legíveis (título, imagem e descrição).**
3. **Os filmes pesquisados aparecem corretamente e correspondem ao termo de pesquisa.**
4. **Quando não há resultados, uma mensagem de "Nenhum filme encontrado" é exibida.**
5. **O tempo de resposta para exibir os filmes pesquisados é rápido.**

Aluno: Eduardo Coutinho da Silva Junior

## Caso de Teste 2: User – Páginas de perfil e cadastro de usuário.

| **Requisito Referente**  | CT - 02 - Criar e editar perfil                                          |
|--------------------------|----------------------------------------------------------------------|
| **Descrição**             | Verificar se o usuário consegue entrar na sua página de perfil e criar/editar perfil. |
| **Objetivo do Teste**     | Assegurar criação e edição de perfil de usuário. |

### Passos

1. **Abrir o aplicativo e ir para a página de perfil.**
2. **Verificar se é mostrado os dados de usuário.**
3. **Clicar em editar cadastro**
4. **Clicar em editar perfil para habilitar edição.**
5. **Alterar os dados e verificar se foi salvo.**

### Critérios de Êxito

1. **Dados visíveis do usuário.**
2. **Os novos dados inseridos são salvos no banco de dados.**

Aluno: Artur Maciel de Assis Pinto

## Caso de Teste 3:  Autenticação de usuário

| **Requisito Referente**  | CT - 03 - Login de Usuário                                          |
|--------------------------|----------------------------------------------------------------------|
| **Descrição**             | Verificar se o usuário consegue fazer login com credenciais válidas e se mensagens de erro são exibidas corretamente com dados inválidos.   |
| **Objetivo do Teste**     | Garantir que o sistema autentique corretamente os usuários com dados válidos e rejeite com segurança os dados inválidos.   |

### Passos

1. **Abrir o aplicativo e ir para a tela de Login.**
2. **Inserir e-mail e senha válidos.**
3. **Clicar no botão "Entrar".**
4. **Verificar se o usuário é redirecionado corretamente**
5. **Verificar se os resultados aparecem rapidamente e com boa legibilidade.**

### Critérios de Êxito

1. **O botão "Entrar" está visível e funcional.**
2. **O sistema permite login com credenciais válidas.**
3. **O sistema bloqueia login com credenciais inválidas e exibe mensagens de erro adequadas.**
4. **Feedback visual ao usuário (mensagens de erro, carregamento, etc.).**

Aluno: Hana Karolina Neves Siqueira

## Caso de Teste 4:  Autenticação de usuário

| **Requisito Referente**  | CT - 03 - Reset de Senha – Recuperação de acesso                              |
|--------------------------|----------------------------------------------------------------------|
| **Descrição**             | Verificar se o usuário consegue solicitar redefinição de senha informando um e-mail válido.    |
| **Objetivo do Teste**     | Garantir que a funcionalidade de recuperação de senha funcione corretamente.   |

### Passos

1. **Acessar a tela de "Esqueceu sua senha?" a partir da página de login.**
2. **Inserir um e-mail válido cadastrado no sistema.**
3. **Clicar no botão de envio.**
4. **Verificar se uma mensagem de confirmação é exibida (ex: “Verifique seu e-mail para redefinir a senha”).**

### Critérios de Êxito

1. **Campo de e-mail está visível e funcional.**
2. **O sistema valida o formato do e-mail.**
3. **Um e-mail válido dispara o processo de recuperação e exibe confirmação visual.**
4. **Um e-mail inválido ou não cadastrado gera mensagem de erro clara.**

Aluno: Hana Karolina Neves Siqueira





