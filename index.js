import express from "express";
import 'dotenv/config'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/arnav', (req, res) => {
    res.send('Hello Arnav')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})