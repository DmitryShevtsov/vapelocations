'use strict';
var passportLocalSequelize = require('passport-local-sequelize');

module.exports = function(sequelize, DataTypes) {
  var User = passportLocalSequelize.defineUser(sequelize, {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    hash: DataTypes.STRING(1024),
    salt: DataTypes.STRING,
      username: DataTypes.String
  });

    User.associate = (models) => {
        User.hasMany(models.VapeShop, {foreignKey: 'user_id'});
        User.hasMany(models.Comment, {foreignKey: 'user_id'});
    };

  return User;
};