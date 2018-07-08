import * as bodyParser from 'body-parser'
import * as App from 'express'

import './db'
import { routes } from './routes'

const app = App()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Accept,Content-Type,X-Requested-With')
  next()
})
app.use(bodyParser.json())
routes(app)

app.listen(3010)
