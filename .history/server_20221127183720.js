import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(jsonServer.defaults())
server.use(middlewares);

server.use()

server.use(router);

server.listen(port);