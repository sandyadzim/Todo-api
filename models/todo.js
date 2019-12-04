'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    is_done: DataTypes.BOOLEAN
  }, {});
  todo.associate = function(models) {
    // associations can be defined here
  };
  return todo;
};