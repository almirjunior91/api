import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(jsonServer.defaults())
server.use(middlewares);

server.use(
    jsonServer.rewriter({
        "/api/*": "/$1",

        "/paises/africa": "/paises?id_continente=1",
        "/paises/america": "/paises?id_continente=2",
        "/paises/asia": "/paises?id_continente=3",
        "/paises/europa": "/paises?id_continente=4",
        "/paises/oceania": "/paises?id_continente=5",
    
        "/paises/campeoes": "/paises?titulos_gte=1&_sort=titulos,nome&_order=desc,asc",
    
        "/continentes/create": "/continentes"
    })
);

server.use(router);

server.listen(port);