![Cover](./.github/cover.png)

# Polls (Node.js)

Um sistema de votação em tempo real onde os usuários podem criar uma enquete e outros usuários podem votar. O sistema gera um ranking entre as opções e atualiza os votos em tempo real.

## Requisitos

- Docker;
- Node.js;

## Tecnologias

- Node.js;
- Fastify;
- Docker;
- Redis;
- Prisma;
- PostgreSQL;
- Zod;

## Steps

- Clone o repositório;
- Instale as dependências (`npm install`);
- Suba o PostgreSQL e o Redis (`docker compose up -d`);
- Copie e cole `.env.example` file (`cp .env.example .env`);
- Rode a aplicação (`npm run dev`);
- Teste as requisições ([Hoppscotch](https://hoppscotch.io/)).

## HTTP

### POST `/polls`

Criando uma nova enquete

#### Request body

```json
{
  "title": "Qual a melhor linguagem de programação?",
  "options": ["JavaScript", "Java", "PHP", "C#"]
}
```

#### Response body

```json
{
  "pollId": "194cef63-2ccf-46a3-aad1-aa94b2bc89b0"
}
```

### GET `/polls/:pollId`

Busque uma enquete pelo ID

#### Response body

```json
{
  "poll": {
    "id": "e4365599-0205-4429-9808-ea1f94062a5f",
    "title": "Qual a melhor linguagem de programação?",
    "options": [
      {
        "id": "4af3fca1-91dc-4c2d-b6aa-897ad5042c84",
        "title": "JavaScript",
        "score": 1
      },
      {
        "id": "780b8e25-a40e-4301-ab32-77ebf8c79da8",
        "title": "Java",
        "score": 0
      },
      {
        "id": "539fa272-152b-478f-9f53-8472cddb7491",
        "title": "PHP",
        "score": 0
      },
      {
        "id": "ca1d4af3-347a-4d77-b08b-528b181fe80e",
        "title": "C#",
        "score": 0
      }
    ]
  }
}
```

### POST `/polls/:pollId/votes`

Vote em uma enquete

#### Request body

```json
{
  "pollOptionId": "31cca9dc-15da-44d4-ad7f-12b86610fe98"
}
```

## WebSockets

### ws `/polls/:pollId/results`

#### Message

```json
{
  "pollOptionId": "da9601cc-0b58-4395-8865-113cbdc42089",
  "votes": 2
}
```

</br>

---

<p align="center">Desenvolvido por <a href="https://www.linkedin.com/in/wellingtonrodriguesbr/" target="_blank">Wellington Rodrigues</a> ✌🏽</p>
