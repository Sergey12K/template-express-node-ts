import express from 'express';
import { PORT } from './config';
import { logger } from './logger';

const server = express();

server.get('/', function(req, res) {
  res.send('hello world');
});

server.get('/v2/chains', (req, res) => {

  res.send('GET запрос по пути /v2/chains');
});

const restServer = () => {
  server.listen(PORT, '0.0.0.0', () => {
    logger.info(`Server started at http://0.0.0.0:${PORT}`);
  });
};

export {
  restServer,
};
