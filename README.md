# tcc-vci-front

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Guia: 

1. [Setup](#setup) - Clonar o repositório pela primeira fez.
2. [Atualizar o seu fork](#fork) - Atualizar o seu fork com as mudanças feitas no repositório principal.
3. [Commit & Pull Request](#commitPR) - Contribuir com o repositório.
3. [Scripts Disponíveis](#scripts) - Comandos disponíveis no projeto.

Bônus: 

1. [Instalar Git](#git) - Instalar as ações git.
2. [Instalar Node + npm](#node) - Instalar o NodeJS no seu computador.
3. [Instalar yarn (opcional)](#yarn) - Instalar o gerenciador de pacotes yarn.

<a name="setup"></a>
# Setup

Primeiramente, confira se você já possui Node e os comandos git instalados, caso não, vá até a seção [Bônus](#bonus).


Para instalar e fazer uso deste projeto, siga os seguintes passos: 
### 1. Faça um **fork**

Clique no canto superior direito do repositório, na opção "fork". Dessa forma, você fará uma cópia do projeto no seu próprio github.

### 2. Clone o repositório

Depois de ter feito o fork, vá na opção "Code", em verde. Ali, faça o clone do seu repositório clicando na opção "Clonar com HTTPS" e copie o link. \
Em sua linha de comando (que deve possuir git) digite: `git clone [link copiado]`.

### 3. Instale as dependências

Utilize o comando `npm i` ou `yarn` para fazer o download de todas as dependências necessárias.
        
### 4. Inicie o projeto

Com tudo isso realizado, é só rodar o comando `npm start` ou `yarn start`.

<a name="fork"></a>
# Atualizar o seu fork

Caso tenham sido feitas mudanças nesse repositório depois de vc ter feito seu fork, você deve atualizar seu fork para poder fazer seus PRs (Pull Requests).

Se for a primeira fez que está fazendo isso, siga os próximo passos (senão, siga [estes](#segundosPassos)):

### 1. Adicione um remote para o repositório original

Na linha de comando, execute `git remote add upstream https://github.com/rodcoffani/tcc-vci-front`

### 2. Atualize o remote upstream

Na linha de comando, atualize o remote upstream com o comando `git fetch upstream`

### 3. Faça o rebase do master com o master do upstream

Na linha de comando, entre na sua branch master com `git checkou master`. Depois disso, `git rebase upstream/master`.

<hr />

<a name="segundosPassos"></a>
Para atualizar seu fork depois da primeira vez, sigos os passos:

### 1. Atualize o upstream

Atualize o upstream do repositório com o comando `git fetch upstream`

### 2. Faça o rebase 

Para realizar o rebase do repo, entre na sua branch master com `git checkou master`. Depois disso, `git rebase upstream/master`.

<a name="commitPR"></a>
# Commit & Pull Request

Quando você realizar as alterações que deseja e quiser enviá-las para o repositório principal e disponibilizar pra todo mundo, você vai precisar fazer **Commit** com suas mudanças e criar um **Pull Request**.

## Commit

O commit faz parte das principais funcionalidades do git, você pode salvar pequenos grupos de mudanças significativas como commits. Ao fazer um commit, você deve incluir uma mensagem que descreva brevemente as alterações. \
Para realizar um commit, você deve seguir os seguintes comandos:

1. `git status` (sempre usar para conferir quais arquivos foram alterados)
2. `git add NOME_ARQUIVO` (adicionar o arquivo desejado para ser commitado) ou `git add .` (adicionar todos os arquivos alterados)
3. `git commit -m "MENSAGEM DO COMMIT"` (commitar as alterações desejadas)
4. `git push` (atualizar o seu repositório no github)

## Pull Request

O pull request (PR) serve para enviar as alterações do seu repositório para o repositório principal. Depois que um pull request é aberto, você pode discutir e revisar as possíveis alterações com colaboradores e adicionar commits durante o processo de aprovação. \
Para criar um PR, é necessário seguir os seguintes passos:

1. Entrar no [repositório oficial](https://github.com/rodcoffani/tcc-vci-front).
2. Entrar na aba "Pull requests".
3. Clicar no botão "New pull request", em verde.
4. Clicar na opção "compare across forks".
5. Alterar a origem do PR. (Deve ficar parecido com: \
```base repository: rodcoffani/tcc-vci-front | base: master <-- head repository: SEU_NOME/tcc-vci-front | compare: master```)

<a name="scripts"></a>
# Scripts Disponíveis

Neste projeto, você pode rodar os comandos:

### `npm start`

Roda o projeto em modo de desenvolvimento.<br />
Entre em [http://localhost:3000](http://localhost:3000) para visualizar em seu navegador.

A página irá atualizar automaticamente ao salvar alterações.<br />
Qualquer erro que ocorra pode ser encontrado no console.

### `npm run build`

Constrói a aplicação para a forma de produção na pasta `build`.<br />
Com isso, o projeto é formatado para a produção e otimizado para melhor desempenho

A build é minificada e os nomes dos arquivos incluem hashes. <br />
Agora a aplicação está pronta para ser lançada!

Veja o artigo sobre [deploy](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

<a name="bonus"></a>
# Bônus

<a name="git"></a>
## Instalar Git

Para realizar as ações do git, é necessário que você tenha as linhas de comando instaladas ou que utilize uma interface gráfica.

Caso deseje utilizar uma interface gráfico, uma das melhores opções é o [Git Kraken](https://www.gitkraken.com/).
Para utilizar as linhas de comando do git, é necessário que você faça o download do [Git Bash](https://git-scm.com/downloads), um terminal específico para isso.

Aqui está um [tutorial](https://github.com/DanielHe4rt/git4noobs) sobre git, caso queira ;) . 

<a name="node"></a>
## Instalar Node + npm

Para rodar o projeto, é necessário ter o Node instalado em seu sistema. O download pode ser feito no [site oficial](https://nodejs.org/pt-br/) (baixar versão LTS). \
Uma vez com o node instalado, teste rodando o comando `node -v` em seu CMD.

Uma vez instalado o Node, o gerenciador de pacotes **npm** vem junto, teste roando o comando `npm -v`.

<a name="yarn"></a>
## Instalar yarn (opcional)

Outra opção de gerenciador de pacotes é o yarn. Para instalá-lo (após possuir o node), execute o comando `npm i -g yarn`. Teste a instalação com o comando `yarn -v`.
