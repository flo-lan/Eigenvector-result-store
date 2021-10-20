const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class ResultBundle extends Model {
    static associate(models) {
      ResultBundle.belongsTo(models.Server, {
        foreignKey: 'server_id',
      });
    }
  }
  ResultBundle.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        unique: true,
      },
      server_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'result_bundle',
      freezeTableName: true,
    },
  );
  return ResultBundle;
};
