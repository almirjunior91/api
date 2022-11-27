import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json', {routes: 3500});
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
server.use(router);

server.listen(3300);