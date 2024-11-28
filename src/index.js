import express from 'express'
import {getConnection} from './database/connection.js'

// Creando nuestro servidor
const app = express()

// Definiendo puerto a usar
const port = process.env.port || 3000

// Inicializando el servidor
app.listen(port, () =>{
    console.log('Servidor corriendo en el puerto: ' + port)
})


getConnection()


