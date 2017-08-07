'use strict';
module.exports = function(sequelize, DataTypes) {
  var VapeShop = sequelize.define('VapeShop', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: {type: DataTypes.INTEGER, foreignKey: true}
  }, {

  });
    VapeShop.associate = (models) => {
        VapeShop.hasOne(models.Location, { foreignKey: 'vapeshop_id',onDelete: 'CASCADE', hooks: true });
        VapeShop.belongsTo(models.User, { foreignKey:'user_id', onDelete:'CSACADE', hooks: true});
        VapeShop.hasMany(models.Comment, {foreignKey: 'vapeshop_id'});

  };
  return VapeShop;
};