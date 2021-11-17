const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, response) => {
    response.send('Hello mani !')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})