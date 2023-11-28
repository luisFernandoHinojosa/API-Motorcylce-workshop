const { json } = require('sequelize')
const RepairServices = require('../services/service.repairs')

exports.findAll = async(req, res) =>{
  try {
    const repairs = await RepairServices.findAll()
    return res.status(200).json({
      repairs
    })
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went very wrong',
      error
    })
  }
}

exports.findOne = async(req, res) =>{
  try {
    const {id} = req.params
    const repair = await RepairServices.findOne(id)

    if(!repair){
      return res.status(404).json({
        status: 'Error',
        message: `Repair with id: ${id} not found`
      })
    }

    return res.status(200).json({
      repair
    })
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went very wrong',
      error
    })
  }
}

exports.create = async(req, res) =>{
  try {
    const {date , userId} = req.body
    const repair = await RepairServices.create({
      date,userId
    })
    return res.status(200).json({
      repair
    })
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went very wrong.',
      error
    })
  }
}

exports.update = async(req, res) =>{
  try {
    const {id} = req.params
    const {status} = req.body
    const repair = await RepairServices.findOne(id)
    if(!repair){
      return res.status(404).json({
        status: 'error',
        message: `Repair with id: ${id} not found.`
      })
    }
    const repairUpdated = await RepairServices.update(repair, {status})
    return res.status(200).json({
      repairUpdated
    })
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went very wrong.',
      error
    })
  }
}

exports.suppress = async(req, res)=>{
  try {

    const {id} = req.params 
    // al sacar el id de la tabla de repair ya se cumple el reto 2 porque el findOne solamente saca
    // una tabla de repair si su status es pending y si el status es completed significa que esa tabla 
    // no se puede cancelar por que esta completada
    const repair = await RepairServices.findOne(id)
    if(!repair){
      return res.status(404).json({
        status: 'Error',
        message: `The repair is now completed.`
      })
    }
    await RepairServices.delete(repair)
    return res.status(200).json(null)
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went very wrong.',
      error
    })   
  }
}