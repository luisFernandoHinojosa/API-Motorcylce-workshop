const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/database/database.js')

const User= sequelize.define('user',{
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    //rol dato de tipo ENUM porque en el frontend puede ser dado por un select option.
    type: DataTypes.ENUM('client', 'employee'),
    allowNull: false,
    defaultValue: 'client'
  },
  status: {
    type: DataTypes.ENUM('available', 'disabled'),
    allowNull:false,
    defaultValue: 'available'
  }
})



const Repairs = sequelize.define('repairs', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE, 
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    allowNull: false,
    defaultValue: 'pending'
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,  
      key: 'id'
    }
  }
});

Repairs.belongsTo(User, { foreignKey: 'userId' });


module.exports = {User,Repairs}