import db from '../Database';

export default {
  create: async (resultBundle, transaction) =>
    db.models.ResultBundle.create(resultBundle, { transaction }),
  get: async resultBundle =>
    db.models.ResultBundle.findOne({ where: { ...resultBundle } }),
};
