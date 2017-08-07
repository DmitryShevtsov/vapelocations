'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    user_id: DataTypes.INTEGER,
    vapeshop_id: DataTypes.INTEGER,
    text: DataTypes.TEXT
  });

    Comment.associate = (models) => {
        Comment.belongsTo(models.VapeShop, {foreignKey: 'vapeshop_id'});
        Comment.belongsTo(models.User, {foreignKey: 'user_id'});
    };

  return Comment;
};