# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O Diagrama de Classes representa as classes do sistema, seus atributos e métodos, além dos relacionamentos entre elas. Aqui está a descrição textual do diagrama:

# Diagrama de Classes

O **Diagrama de Classes** representa as classes do sistema, seus atributos e métodos, além dos relacionamentos entre elas. Aqui está a descrição textual do diagrama:

## Classes e Relacionamentos

### Usuário
- **Atributos**:
  - `ID_Usuário: string`
  - `Nome: string`
  - `Email: string`
  - `Senha: string`
  - `Foto_Perfil: imagem`
  - `Biografia: string`
- **Métodos**:
  - `criarAvaliacao()`
  - `criarComentario()`
  - `criarListaPersonalizada()`
  - `seguirUsuario()`
  - `curtirReview()`
- **Relacionamentos**:
  - 1:N com **Avaliação**
  - 1:N com **Comentário**
  - 1:N com **ListaPersonalizada**
  - N:M com **Usuário** (seguir)
  - N:M com **Review**

### Filme/Série
- **Atributos**:
  - `ID_Título: string`
  - `Nome: string`
  - `Gênero: string`
  - `Sinopse: string`
  - `Duração: string`
  - `Classificação_Indicativa: string`
  - `Elenco: string`
  - `Data_Lançamento: date`
- **Métodos**:
  - `receberAvaliacao()`
  - `receberComentario()`
- **Relacionamentos**:
  - 1:N com **Avaliação**
  - 1:N com **Comentário**
  - N:M com **ListaPersonalizada**

### Avaliação
- **Atributos**:
  - `ID_Avaliação: string`
  - `ID_Usuário: string`
  - `ID_Título: string`
  - `Nota: int`
  - `Comentário: string`
  - `Data_Avaliação: date`
- **Métodos**:
  - `criarAvaliacao()`
- **Relacionamentos**:
  - N:1 com **Usuário**
  - N:1 com **Filme/Série**

### Comentário
- **Atributos**:
  - `ID_Comentário: string`
  - `ID_Usuário: string`
  - `ID_Título: string`
  - `Texto: string`
  - `Data_Comentário: date`
- **Métodos**:
  - `criarComentario()`
- **Relacionamentos**:
  - N:1 com **Usuário**
  - N:1 com **Filme/Série**

### ListaPersonalizada
- **Atributos**:
  - `ID_Lista: string`
  - `ID_Usuário: string`
  - `Nome_Lista: string`
- **Métodos**:
  - `adicionarFilme()`
  - `removerFilme()`
- **Relacionamentos**:
  - N:1 com **Usuário**
  - N:M com **Filme/Série**

### Seguir
- **Atributos**:
  - `ID_Seguir: string`
  - `ID_Usuário_Seguindo: string`
  - `ID_Usuário_Seguido: string`
- **Relacionamentos**:
  - N:M com **Usuário**

### Administrador
- **Atributos**:
  - `ID_Admin: string`
  - `Nome: string`
  - `Email: string`
  - `Senha: string`
- **Métodos**:
  - `moderarAvaliacao()`
  - `moderarComentario()`
- **Relacionamentos**:
  - Modera **Avaliação** e **Comentário**

---

# Modelo Entidade-Relacionamento (MER)

O **Modelo Entidade-Relacionamento (MER)** descreve as entidades, seus atributos e os relacionamentos entre elas. Aqui está a descrição textual do MER:

## Entidades e Relacionamentos

### Usuário
- **Atributos**:
  - `ID_Usuário (PK)`
  - `Nome`
  - `Email`
  - `Senha`
  - `Foto_Perfil`
  - `Biografia`
- **Relacionamentos**:
  - 1:N com **Avaliação**
  - 1:N com **Comentário**
  - 1:N com **ListaPersonalizada**
  - N:M com **Usuário** (seguir)
  - N:M com **Review**

### Filme/Série
- **Atributos**:
  - `ID_Título (PK)`
  - `Nome`
  - `Gênero`
  - `Sinopse`
  - `Duração`
  - `Classificação_Indicativa`
  - `Elenco`
  - `Data_Lançamento`
- **Relacionamentos**:
  - 1:N com **Avaliação**
  - 1:N com **Comentário**
  - N:M com **ListaPersonalizada**

### Avaliação
- **Atributos**:
  - `ID_Avaliação (PK)`
  - `ID_Usuário (FK)`
  - `ID_Título (FK)`
  - `Nota`
  - `Comentário`
  - `Data_Avaliação`
- **Relacionamentos**:
  - N:1 com **Usuário**
  - N:1 com **Filme/Série**

### Comentário
- **Atributos**:
  - `ID_Comentário (PK)`
  - `ID_Usuário (FK)`
  - `ID_Título (FK)`
  - `Texto`
  - `Data_Comentário`
- **Relacionamentos**:
  - N:1 com **Usuário**
  - N:1 com **Filme/Série**

### ListaPersonalizada
- **Atributos**:
  - `ID_Lista (PK)`
  - `ID_Usuário (FK)`
  - `Nome_Lista`
- **Relacionamentos**:
  - N:1 com **Usuário**
  - N:M com **Filme/Série**

### Seguir
- **Atributos**:
  - `ID_Seguir (PK)`
  - `ID_Usuário_Seguindo (FK)`
  - `ID_Usuário_Seguido (FK)`
- **Relacionamentos**:
  - N:M com **Usuário**

### Administrador
- **Atributos**:
  - `ID_Admin (PK)`
  - `Nome`
  - `Email`
  - `Senha`
- **Relacionamentos**:
  - Modera **Avaliação** e **Comentário**
As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)


## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
