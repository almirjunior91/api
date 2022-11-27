import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json', {routes});
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

server.listen(port);