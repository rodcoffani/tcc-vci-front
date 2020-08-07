# tcc-vci-front

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Guia: 

[1. Setup](#setup) - Clonar o repositório pela primeira fez. \
[2. Atualizar o fork](#fork) - Atualizar o seu fork com as mudanças feitas no repo principal.

<a name="setup"></a>
## Setup

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

<a name="fork">`</a>
## Atualizar o seu fork

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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
