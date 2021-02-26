"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.Item);
      Order.belongsTo(models.Vendor);
    }
  }
  Order.init(
    {
      ItemId: DataTypes.INTEGER,

      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: { msg: "Invalid Quantity format" },
          notEmpty: {
            msg: "Quantity cannot be Empty",
          },
          min: {
            args: 1,
            msg: "Quantity minimum 1",
          },
        },
      },
      special_request: DataTypes.STRING,
      total_price: DataTypes.INTEGER,
      VendorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
