import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import { port } from './config'

const app = express()

app.use(cors())
app.use(bodyparser.json())

app.get('/status', (req, res) => {
  res.json('Server is live')
})

app.listen(port, () => console.log(`🚀 SHL API is listening on port ${port}!`))
