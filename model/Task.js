const {Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Role=require('./User_Role.js')

class Task extends Model {}
Task.init({
    id_task: {
      type:Sequelize.INTEGER,
      primaryKey: true
    
    },
    id_product: Sequelize.INTEGER,
    name:DataTypes.STRING,
    finish: DataTypes.BOOLEAN
}, {
    sequelize,
    modelName: "tasks",
    timestamps: false
});


Task.belongsToMany(Role, { through: "RoleTasks" });
Role.belongsToMany(Task, { through: "RoleTasks" });

module.exports = Task;