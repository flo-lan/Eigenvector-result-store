import express from 'express';

import TestResultEndpoint from './TestResultEndpoint';
import config from './Config';

const app = express();
const router = express.Router();

router.post('/testresult', TestResultEndpoint.createTestResultEndpoint);

app.use(express.json());
app.use('/', router);

const server = app
  .listen(config.port, () => {
    console.log(`Successfully started server on port ${config.port}!`);
  })
  .on('error', e => {
    if (e.code === 'EADDRINUSE') {
      console.error(
        `Could not start server on port ${config.port}, because the port is already in use!`,
      );
    }
  });

const startGracefulShutdown = connection => {
  console.log('Starting shutdown of express...');
  connection.close(() => {
    console.log('Express shut down.');
  });
  process.exit();
};

process.on('SIGTERM', () => startGracefulShutdown(server));
process.on('SIGINT', () => startGracefulShutdown(server));
