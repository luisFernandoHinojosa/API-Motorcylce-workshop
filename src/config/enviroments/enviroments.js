require('dotenv').config() //para poder usar las variables de entorno
const env = require('env-var')

exports.envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  DB_URL: env.get('DB_URL').required().asString()
}