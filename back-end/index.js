//importar dependencias
const express = require('express')
const app = express()
const cors = require('cors')

//configuracion puerto
app.set('port', process.env.PORT || 3001)

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//rutas
app.use('/v2',(require('./routes/index')))

//corriendo servidor
app.listen(app.get('port'),()=>{
    console.log(`Aplicación corriendo en puerto ${app.get('port')}`)
})