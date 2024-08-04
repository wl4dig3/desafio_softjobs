import poll from '../config/consultas.js';

const addUsuario = async ({email, password, rol, lenguage}) => {
    const sql = `INSERT INTO usuarios(email, password, rol, lenguage) VALUES($1, $2, $3, $4) RETURNING *`;
    const values = [email, password, rol, lenguage];

    const result = await poll.query(sql, values);
    if (result.rows.length > 0) {
        return result.rows[0];
    }
    return console.log("Error al registrar el usuario", error.message);
}
const getUsuarios = async () => {
    try {
        const { rows: usuarios } = await poll.query("SELECT * FROM usuarios");
        return usuarios;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error.message);
        throw error;
    }
};

export const model = {
    addUsuario,
    getUsuarios
};