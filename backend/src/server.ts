import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';
// MVC

// Model (Representação de uma entidade)
// Views (JSON retornado)
// Controllers (Lógica das rotas)

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// Query Params: http://localhost:3333/users?parametro=valor (filtro/paginação/...)
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: JSON (Enviar dados)


app.listen(3333);