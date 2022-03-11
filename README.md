# DOCKET

- ATENÇÃO: Esse projeto não é um produto oficial da Docket. Se trata meramente de um exercício.

## Para Rodar o Projeto

#### Requisitos
- Node.js >=16.10
- Yarn

### `yarn`
- Abra um terminal dentro da pasta do projeto e execute o comando `yarn` para instalar as dependências.

### `yarn start`
- Insira o comando `yarn start` para iniciar a aplicação
- Abra um segundo terminal na mesma pasta e insira o comando `yarn json-server --watch data/db.json --port 8000` para iniciar a API
- Acesse [http://localhost:3000](http://localhost:3000) para ver no seu navegador.

## Tecnologias utilizadas
- React.Js (v 17.0.2)
- JSON Server (v 0.17.0)
- Bootstrap 5
- Sass
- Axios

## Itens os quais não foram possíveis resolver
Infelizmente, devido a falta de tempo livre, não foi possível tratar alguns pontos.
- Não há máscara para CPF, CNPJ e CEP
- Não há feedback no cadastro e na exclusão do documento