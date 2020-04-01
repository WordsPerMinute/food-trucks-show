const connection = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
  allTrucks(){
    return database('trucks')
  },
  postTrucks(truck){
    return database('trucks').insert(truck)
  }
}
