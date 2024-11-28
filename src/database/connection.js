import sql from 'mssql'
import dotenv from 'dotenv'

// Cargando variables de entorno
dotenv.config()

// Configurando la conexión a nuestra BD SQL
const dbSettings = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: process.env.DB_ENCRYPT === 'true', 
        trustServerCertificate: process.env.DB_TRUST_CERT === 'true',
    }
}

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings)
        const result = await pool.request().query('SELECT * FROM usuarios')
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

