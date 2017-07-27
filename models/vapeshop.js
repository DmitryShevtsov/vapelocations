'use strict';
module.exports = function(sequelize, DataTypes) {
  var VapeShop = sequelize.define('VapeShop', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {

  });
    VapeShop.associate = (models) => {
        VapeShop.hasOne(models.Location, { foreignKey: 'vapeshop_id',onDelete: 'CASCADE', hooks: true });

  };
  return VapeShop;
};