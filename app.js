const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World this is dawg23221')
})

app.listen(3000, function () {
  console.log('port 3000!')
})