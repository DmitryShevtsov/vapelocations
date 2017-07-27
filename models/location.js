'use strict';
module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define('Location', {
        vapeshop_id: {type: DataTypes.INTEGER, foreignKey: true},
        lng: DataTypes.FLOAT,
        lat: DataTypes.FLOAT,
        address: DataTypes.STRING
    });
    Location.associate = (models) => {
        Location.belongsTo(models.VapeShop, {foreignKey: 'vapeshop_id'});
    };
    return Location;
};