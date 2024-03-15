import express from 'express';
import { logger } from './logger';
require('dotenv').config();

const server = express();

server.get('/', function(req, res) {
  res.send('hello world');
});

server.get('/v2/chains', (req, res) => {

  res.send('GET запрос по пути /v2/chains');
});

const restServer = () => {
  const PORT = process.env.PORT
  server.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}...`);
  });
};

export {
  restServer,
};
