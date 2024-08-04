import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;
// console.log('objectXXX', process.env.DB_DATABASE, process.env.DB_PASSWORD);
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    allowExitOnIdle: true
});
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'softjobs',
//     password: 'Dji3pro',
//     port: 5432
// });
export default pool;

const connectToDatabase = async () => {
    try {
        await pool.query("SELECT NOW()");
        console.log('Conectado a la base de datos de Wladi');
    } catch (error) {
        console.log('Error al conectar con la base de datos de Wladi', error.message);
    }
};

connectToDatabase();