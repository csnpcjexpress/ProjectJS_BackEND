const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello from backend!')
})

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`)
})