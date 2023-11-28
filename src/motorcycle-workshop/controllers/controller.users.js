const UserServices = require('../services/service.users')

exports.findAll = async(req, res) =>{
  try {
    const users = await UserServices.findAll()
    return res.status(200).json({
      users
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
    const user = await UserServices.findOne(id)

    if(!user){
      return res.status(404).json({
        status: 'Error',
        message: `User with id: ${id} not found`
      })
    }

    return res.status(200).json({
      user
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
    const {name, email, password, role} = req.body
    const user = await UserServices.create({
      name, email, password, role
    })
    if(!user){
      return res.status(404).json({
        status: 'Error',
        message: `email: ${email} already exists in the database`
      })
    }
    return res.status(200).json({
      user
    })
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went very wrong',
      error
    })
  }
}

exports.update = async(req, res) =>{
  try {
    const {id} = req.params
    const {name, email} = req.body
    const user = await UserServices.findOne(id)
    if(!user){
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${id} not found`
      })
    }
    const userUpdated = await UserServices.update(user, {name, email})
    return res.status(200).json({
      userUpdated
    })
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went very wrong',
      error
    })
  }
}

exports.suppress = async(req, res)=>{
  try {
    const {id} = req.params
    const user = await UserServices.findOne(id)
    if(!user){
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${id} not found`
      })
    }

    await UserServices.delete(user)
    return res.status(200).json(null)
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went very wrong',
      error
    })   
  }
}

