const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

const { mongoose } = require('./database')

const router = require('./routes/routes')

//configuraciones
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }))

//routes
app.use('/API', router)

//Iniciacion server
app.listen(app.get('port'), () => {
    console.log(`Server listening at port ${app.get('port')}`)
})