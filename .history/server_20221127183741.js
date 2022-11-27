import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(jsonServer.defaults())
server.use(middlewares);

server.use(
    jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
  }))

server.use(router);

server.listen(port);