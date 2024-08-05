import poll from '../config/consultas.js';

// const addUsuario = async ({email, password, rol, lenguage}) => {
//     const sql = `INSERT INTO usuarios(email, password, rol, lenguage) VALUES($1, $2, $3, $4) RETURNING *`;
//     const values = [email, password, rol, lenguage];

//     const result = await poll.query(sql, values);
//     if (result.rows.length > 0) {
//         return result.rows[0];
//     }
//     return console.log("Error al registrar el usuario", error.message);
// }
const addUsuario = async (usuario) => {
    let { email, password, rol, lenguage } = usuario;
    try {
        const sql = `INSERT INTO usuarios(email, password, rol, lenguage) VALUES($1, $2, $3, $4) RETURNING *`;
        const values = [email, password, rol, lenguage];
        const result = await poll.query(sql, values);
        if (result.rowCount > 0) return "Usuario creado exitosamente";
    } catch (error) {
        console.error('Error al crear el usuario:', error.message);
        throw error;
    }
};
const getUsuarios = async () => {
    try {
        const { rows: usuarios } = await poll.query("SELECT * FROM usuarios");
        return usuarios;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error.message);
        throw error;
    }
};
const getUsuario = async (email) => {
    try {
        const sql = "SELECT * FROM usuarios WHERE email = $1", values = [email];
        const result = await poll.query(sql, values);
        
        if (result.rowCount > 0) {
            return result.rows
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error al obtener el usuario:', error.message);
        res.status(500).json({ error: error.message });
    }
};

export const model = {
    addUsuario,
    getUsuarios,
    getUsuario
};