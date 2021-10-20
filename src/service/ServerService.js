import HttpStatus from 'http-status-codes';

import ServerRepository from '../repository/ServerRepository';

const validateInput = input => {
  if (!input) {
    const error = new Error('Invalid server payload');
    error.status = HttpStatus.BAD_REQUEST;
    throw error;
  }
  if (!('url' in input)) {
    const error = new Error('Missing url field in server payload');
    error.status = HttpStatus.BAD_REQUEST;
    throw error;
  }
  if (!('domain' in input)) {
    const error = new Error('Missing domain field in server payload');
    error.status = HttpStatus.BAD_REQUEST;
    throw error;
  }
};

export default {
  create: async (server, transaction) => {
    validateInput(server);

    try {
      return ServerRepository.create(server, transaction);
    } catch (e) {
      const error = new Error('Could not create server entry');
      error.status = HttpStatus.INTERNAL_SERVER_ERROR;
      throw error;
    }
  },
  get: async server => {
    validateInput(server);

    try {
      return ServerRepository.get(server);
    } catch (e) {
      const error = new Error('Could not get server entry');
      error.status = HttpStatus.INTERNAL_SERVER_ERROR;
      throw error;
    }
  },
};
