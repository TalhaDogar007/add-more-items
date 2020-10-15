'use strict';
module.exports = (sequelize, DataTypes) => {
  const userItems = sequelize.define('userItems', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  }, {

    timestamps: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'userItems'
    });
    userItems.associate = function(models) {
    userItems.belongsTo(models.users,{foreignKey:'user_id'})
  };
  return userItems;
};