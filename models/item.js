"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Vendor);
      Item.hasMany(models.Order);
    }
  }
  Item.init(
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
      description: DataTypes.STRING,
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: { msg: "Invalid price format" },
          notEmpty: {
            msg: "Name cannot be Empty",
          },
          min: {
            args: 0,
            msg: "Price must be positive value",
          },
        },
      },
      image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
