import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json', {routes: 'routes.json'});
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
server.use(router);

server.listen(3300);