import HttpStatus from 'http-status-codes';

import ResultBundleRepository from '../repository/ResultBundleRepository';

const validateInput = input => {
  if (!input) {
    const error = new Error('Invalid result bundle payload');
    error.status = HttpStatus.BAD_REQUEST;
    throw error;
  }
};

export default {
  create: async (resultBundle, transaction) => {
    validateInput(resultBundle);

    try {
      return ResultBundleRepository.create(resultBundle, transaction);
    } catch (e) {
      const error = new Error('Could not create resultBundle entry');
      error.status = HttpStatus.INTERNAL_SERVER_ERROR;
      throw error;
    }
  },
  get: async resultBundle => {
    validateInput(resultBundle);

    try {
      return ResultBundleRepository.get(resultBundle);
    } catch (e) {
      const error = new Error('Could not get resultBundle entry');
      error.status = HttpStatus.INTERNAL_SERVER_ERROR;
      throw error;
    }
  },
};
