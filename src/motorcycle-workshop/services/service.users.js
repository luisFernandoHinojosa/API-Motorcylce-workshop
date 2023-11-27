const Users = require('../motorcycle-workshop.models')

class UserServices {

  static async create(data){

    //reto opcional verificar si el usuario ya existe por email
    const existingUser = await Users.findOne({
      where: {
        email: data.email,
        status: 'available'
      }
    });

    if (existingUser) {
      return null
    }
    return await Users.create(data)
  }

  static async findAll(){
    return await Users.findAll({
      where: {
        status: 'available'
      }
    })
  }

  static async findOne(id){
    return await Users.findOne({
      where: {
        id,
        status: 'available'
      }
    })
  }

  static async update(user, data){
    return await user.update(data)
  }

  static async delete(user){
    return await user.update({
      status: 'disabled'
    })
  }
}

module.exports = UserServices