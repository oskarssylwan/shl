import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import { port } from './config'
import * as fetch from 'node-fetch'
import { Redis } from './integrations/redis'
import casual from 'casual'

const app = express()

app.use(cors())
app.use(bodyparser.json())

app.get('*', (req, res) => {
  const sendJson = x => res.json(x)

  Redis.get(req.path)
    .then(data => data || Promise.reject('no redis cache found'))
    .catch(() => Promise.resolve(casual.country).then(Redis.set(req.path)))
    .then(sendJson)
})

app.get('/status', (req, res) => {
  res.json('Server is live')
})

app.listen(port, () => console.log(`🚀 SHL API is listening on port ${port}!`))
