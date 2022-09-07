const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('somebody SAAAAAVE me!')
})

app.listen(3000)