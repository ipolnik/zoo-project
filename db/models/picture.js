'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Animal, { foreignKey: 'animal_id' });
    }
  }
  Picture.init({
    animal_id: DataTypes.INTEGER,
    picture_link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};