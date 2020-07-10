import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import config from './config'
import router from './router'
import database from './database'

const app = express()
const server = http.createServer(app)

database()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(helmet())
app.use(cors())

app.use('/', router)

server.listen(config.port)