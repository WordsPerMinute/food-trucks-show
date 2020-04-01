const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')


app.get('/trucks', (request, response) => {
  console.log("okay");
  queries.allTrucks()
    .then(trucks => response.json(trucks))
})

app.post('/trucks', (req, res) => {
  queries.postTruck(req.body)
  req.body
})

app.listen(port, () => console.log(`Listening on PORT ${port}!`))
