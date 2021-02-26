"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .addConstraint("Orders", {
        fields: ["ItemId"],
        type: "foreign key",
        name: "Item",
        references: {
          //Required field
          table: "Items",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      })
      .then(() => {
        queryInterface.addConstraint("Orders", {
          fields: ["VendorId"],
          type: "foreign key",
          name: "Vendor",
          references: {
            //Required field
            table: "Vendors",
            field: "id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        });
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Orders", null, {});
  },
};
