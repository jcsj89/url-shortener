import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import cors from 'cors';
import './typeorm';

// Cria uma instancia do express
const app = express();
app.use(cors());
app.use(express.json());

// Carrega as rotas da aplicacao
app.use(routes);

// Inicializa o server na porta 3333
app.listen(3333, () => {
    console.log('Server started!');
});
