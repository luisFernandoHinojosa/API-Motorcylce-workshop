const {Repairs} = require('../motorcycle-workshop.models')

class RepairsServices {

  static async create(data){
    return await Repairs.create(data)
  }

  static async findAll(){
    return await Repairs.findAll({
      where: {
        status: 'pending'
      }
    })
  }

  static async findOne(id){
    return await Repairs.findOne({
      where: {
        id,
        status: 'pending'
      }
    })
  }

  static async update(repairs,data){
    return await repairs.update(data)
  }

  static async delete(repairs){
    return await repairs.update(
    {
      status: 'cancelled'
    })
  }
}

module.exports = RepairsServices