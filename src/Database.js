import Sequelize from 'sequelize';

import config from './Config';
import Server from './models/Server';
import ResultBundle from './models/ResultBundle';
import TestResult from './models/TestResult';

const db = { models: {} };

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect,
  },
);

// Models/Tables
db.models.Server = Server(sequelize);
db.models.ResultBundle = ResultBundle(sequelize);
db.models.TestResult = TestResult(sequelize);

Object.keys(db.models).forEach(modelName => {
  if (db.models[modelName].associate) {
    db.models[modelName].associate(db.models);
  }
});

db.sequelize = sequelize;

export default db;
