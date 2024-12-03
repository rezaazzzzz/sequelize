const { DataTypes } = require("sequelize");
const sequelize = require("../app");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {});

User.associations = function (models) {

};

module.exports = User;
