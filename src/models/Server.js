const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class Server extends Model {
    static associate() {}
  }
  Server.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        unique: true,
      },
      url: DataTypes.STRING,
      domain: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'server',
      freezeTableName: true,
    },
  );
  return Server;
};
