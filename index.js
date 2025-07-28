require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('prof.aybee@twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at prof.aybee</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>prof.aybee yt</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`prof.aybee on port ${port}`)
})
