import HttpStatus from 'http-status-codes';

import TestResultRepository from '../repository/TestResultRepository';

const validateInput = input => {
  if (!input) {
    const error = new Error('Invalid testResult payload');
    error.status = HttpStatus.BAD_REQUEST;
    throw error;
  }
  if (!('test' in input)) {
    const error = new Error('Missing test field in testResult payload');
    error.status = HttpStatus.BAD_REQUEST;
    throw error;
  }
  if (!('result' in input)) {
    const error = new Error('Missing result field in testResult payload');
    error.status = HttpStatus.BAD_REQUEST;
    throw error;
  }

  if (typeof input.result !== 'object') {
    const error = new Error('Test result must be valid JSON');
    error.status = HttpStatus.BAD_REQUEST;
    throw error;
  }
};

export default {
  create: async (testResult, transaction) => {
    validateInput(testResult);

    try {
      return TestResultRepository.create(testResult, transaction);
    } catch (e) {
      const error = new Error('Could not create testResult entry');
      error.status = HttpStatus.INTERNAL_SERVER_ERROR;
      throw error;
    }
  },
  get: async testResult => {
    validateInput(testResult);

    try {
      return TestResultRepository.get(testResult);
    } catch (e) {
      const error = new Error('Could not get testResult entry');
      error.status = HttpStatus.INTERNAL_SERVER_ERROR;
      throw error;
    }
  },
};
