import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';



const app = express();

app.use(cors());
app.use(express.json());//ajuda o express a ler arquivos json.


//Rota: Endereço completo da requisição
//Recurso: qual entidade que acessamos no sistema

//GET: buscar uma ou mais informações do backend
//POST:Criar um nova informação no backend
//PUT: Atualizar uma informação existente no backend
//DELETE:Remover informação do backend

//POST http://loacalhost:3333/users = criar um usuario
//GET http://localhost:3333/users = Listar usuario
//Get http://localhost:3333/users/5 = buscardados do usuario dom id 5

//Request params: parametro que vem na propria rota que identificam um recurso
//Query param: parametros que veem na propria rota opcional para filtros e paginaão
//request body: parametros para criação/atualização de informações
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')));


app.listen(3003);