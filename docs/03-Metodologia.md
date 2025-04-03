
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A equipe se baseia no modelo Gitflow para gerenciar o versionamento de código, que será descrito com mais detalhes abaixo. Os membros da equipe utilizam quadro kanban do Projects no Github para organização das tarefas, além de reuniões semanais (por Microsoft Teams).

O Scrum Master divide as tarefas em cards, quebrando tarefas maiores em tarefas pequenas para facilitar a organização, e cada membro escolhe suas tarefas e movimenta os cards de acordo com a etapa em que se encontra.

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito deverá ser apresentada em uma tabela que especifica que detalha Ambiente, Plataforma e Link de Acesso. 
Nota: Vide documento modelo do estudo de caso "Portal de Notícias" e defina também os ambientes e frameworks que serão utilizados no desenvolvimento de aplicações móveis.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software pronta para ambiente de produção
- `dev`: versão de desenvolvimento do software pronta para ambiente de homologação
- `feature`: adição de novas funcionalidades
- `bugfix`: correção de bugs do sistema em ambiente homologação ou desenvolvimento
- `hotfix`: correção de bugs do sistema em ambiente de produção

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

A ferramenta de versionamento escolhida foi o Github pela facilidade e bagagem técnica dos membros. A branch 'main' deve ter apenas versões estáveis já testadas do software, pois será a branch de produção. Optamos por seguir uma versão simplificada do modelo Gitflow no versionamento, onde as novas 'features' e 'bugfixes' serão mesclados na branch 'dev' de desenvolvimento/homologação. Esta por sua vez deverá ser mesclada na branch 'main' no lançamento de uma nova versão do software, quando tivermos funcionalidades o suficiente.

Para manter o versionamento organizado, cada integrante fará pull/merge pelo Github utilizando o modelo acima descrito, evitando commits diretos na branch 'main' ou 'dev' na fase de codificação da solução. Apenas é permitido commit de artefatos da documentação direto na main. 


## Gerenciamento de Projeto

### Divisão de Papéis

Apresente a divisão de papéis entre os membros do grupo.

Exemplificação: A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. 

A organização da equipe está apresentada conforme abaixo:

> Scrum Master
> - Artur Maciel;

> Product Owner
> - Hana Karolina
    
> Equipe de Desenvolvimento
> - André Dexheimer
> - Andre Fernandes
> - Artur Maciel
> - Eduardo Coutinho
> - Giovanni Shintaku
> - Hana Karolina
> - Luiz

> Equipe de Design
> - Andre Fernandes
> - Giovanni Shintaki
> - Luiz

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo

O grupo faz reuniões semanais para acompanhamento do projeto e remoção de bloqueios. É utilizado o quadro kanban para organização das atividades dos integrantes, onde as tarefas de cada sprint são separadas por milestones. As tarefas podem ser categorizadas como:
- `TODO`: tarefa a ser feita
- `Doing`: tarefa sendo realizada por algum integrante
- `Test`: tarefa em fase de testes se aplicável
- `Done`: tarefa já realizada

Quadro kanban em seu estado atual:
![image](https://github.com/user-attachments/assets/9ccf638a-82ba-48b8-868a-e800c9acd3d4)



 
> **Links Úteis**:
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
