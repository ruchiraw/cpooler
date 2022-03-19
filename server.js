const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const users = require('./routes/users')

// ...

app.use('/apis/v1', users)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})