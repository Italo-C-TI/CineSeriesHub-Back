# CineSeriesHub - Back-end

## Visão Geral

Este repositório é o back-end da aplicação CineSeriesHub, que fornece os serviços de API para o front-end do projeto. Ele é responsável por buscar e fornecer informações sobre os melhores filmes em cartaz, os filmes mais populares e os filmes mais bem avaliados. O back-end foi desenvolvido usando Node.js, TypeScript, Fastify, dotenv, Axios e Zod.

## Rotas de Acesso

- `https://cineserieshub-back-production.up.railway.app/`: Rota base

- `/movies/search` (Query Params: `search`): Esta rota permite pesquisar filmes por título.

- `/movie/:movie_id`: Esta rota fornece informações detalhadas sobre um filme específico com base no ID do filme.

- `/now_playing/movies` (Query Params: `page`): Esta rota retorna os filmes atualmente em cartaz. O parâmetro `page` pode ser usado para paginar os resultados.

- `/popular/movies` (Query Params: `page`): Esta rota retorna os filmes mais populares. O parâmetro `page` também pode ser usado para paginar os resultados.

- `/top_rated/movies` (Query Params: `page`): Esta rota retorna os filmes mais bem avaliados. O parâmetro `page` pode ser usado para paginar os resultados.

## Tecnologias Utilizadas

- **Node.js:** Uma plataforma de desenvolvimento que permite a execução de código JavaScript no servidor. [Documentação](https://nodejs.org/en/docs/)

- **TypeScript:** Uma linguagem que estende o JavaScript adicionando tipagem estática, facilitando o desenvolvimento de aplicações mais robustas. [Documentação](https://www.typescriptlang.org/docs/)

- **Fastify:** Um framework web extremamente rápido e eficiente para construir APIs em Node.js. [Documentação](https://www.fastify.io/docs/latest/)

- **dotenv:** Uma biblioteca para carregar variáveis de ambiente, permitindo a configuração segura de parâmetros sensíveis. [Documentação](https://github.com/motdotla/dotenv)

- **Axios:** Uma biblioteca para fazer requisições HTTP, que simplifica o consumo da API do The Movie Database. [Documentação](https://axios-http.com/docs/intro)

- **Zod:** Uma biblioteca para validação de dados, garantindo que os dados recebidos pela API sejam consistentes. [Documentação](https://github.com/colinhacks/zod)

## Acesso ao Repositório Front-end

Você pode acessar o repositório do front-end do projeto CineSeriesHub no seguinte link: [CineSeriesHub - Front-end](https://github.com/Italo-C-TI/CineSeriesHub-Front).

## Link para Acesso à Aplicação

Você pode acessar o CineSeriesHub online [aqui](https://main--incredible-kheer-8ca4ec.netlify.app/).
