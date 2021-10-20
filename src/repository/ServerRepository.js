import db from '../Database';

export default {
  create: async (server, transaction) =>
    db.models.Server.create(server, { transaction }),
  get: async server => db.models.Server.findOne({ where: { ...server } }),
};
