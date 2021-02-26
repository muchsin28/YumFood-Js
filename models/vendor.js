"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.hasMany(models.Item);
      Vendor.hasMany(models.Order);
    }
  }
  Vendor.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 128],
            msg: "name must be between 2-128 length",
          },
          notEmpty: {
            msg: "Name cannot be Empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Vendor",
    }
  );
  return Vendor;
};
