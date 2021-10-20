import db from '../Database';

export default {
  create: async (testResult, transaction) =>
    db.models.TestResult.create(testResult, { transaction }),
  get: async testResult =>
    db.models.TestResult.findOne({ where: { ...testResult } }),
};
