import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
