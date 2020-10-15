'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'users'

  });
  users.associate = function(models) {
    users.hasMany(models.userItems, { foreignKey: 'user_id' })
  };
  return users;
};