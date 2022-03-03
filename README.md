## url-shortener - Encurtador de URL
Descricao do projeto: Um site feito em **React(Next.js)** que encurta uma URL longa, tipo o sistema do <https://bit.ly>, para efeitos de aprendizagem fiz a parte do backend separada do front em **Node.js** e esta rodando um banco postgres em um container Docker com uma unica tabela que nao precisa de muito conhecimento para configurar, apenas rodar os dois comandos abaixo.

**Para criar o container com o docker e gerar a tabela nescessaria, rode os dois comandos abaixo**  
```docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=docker -d postgres```  
```npm run typeorm schema:sync```  

**Para rodar o backend acesse a pasta backend pelo terminal e use o comando:** 
```npm run dev```

**Para rodar o frontend acesse a pasta frontend pelo terminal e rode o comando:**
```npm run dev```

Acesse a aplicacao pelo link no navegador: <http://localhost:3000>
