'use strict';
module.exports = function(sequelize, DataTypes) {
  var VapeShop = sequelize.define('VapeShop', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return VapeShop;
};