const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class TestResult extends Model {
    static associate(models) {
      TestResult.belongsTo(models.ResultBundle, {
        foreignKey: 'result_bundle_id',
      });
    }
  }
  TestResult.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        unique: true,
      },
      result_bundle_id: DataTypes.UUID,
      test: DataTypes.STRING,
      result: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'test_result',
      freezeTableName: true,
    },
  );
  return TestResult;
};
