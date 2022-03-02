# url-shortener - Encurtador de URL

### Para criar o container com o docker e gerar a tabela nescessaria, rode os dois comandos abaixo

- docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=docker -d postgres

- npm run typeorm schema:sync

### Para rodar o backend use dentro da pasta backend no terminal: 
- npm run dev

### Para rodar o frontend use dentro da pasta frontend no terminal: 
- npm run dev
