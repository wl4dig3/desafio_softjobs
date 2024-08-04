import jwt from 'jsonwebtoken';
import { model } from '../models/queries.js';


const home = (req, res) => {
    res.send("Hello World from Home");
};
// const verificarCredencialesController = async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     };
//       try {
//         await model.verificarCredenciales(email. password);
//         const token = jwt.sign({ email}, 'secret');
//         return res.status(200).json({ token });
//       } catch (error) {
//         console.log('falló por el controlador');
//         res.status(error.code || 500).send({ error: error.message })
//       }
//     };

    const register = async (req, res) => {
        const { email, password, rol, lenguage } = req.body;
        const result = await model.addUsuario({email, password, rol, lenguage});
        res.send("Usuario creado exitosamente");
        return result;
    };
    const getUsuarioControlador = async (req, res) => {
       try {
        const usuarios = await model.getUsuarios();
        res.json(usuarios);
       } catch (error) {
        console.log('falló la consulta',error.message);
       }
    };






export const controller = {
    home,
    register,
    getUsuarioControlador,
    // verificarCredencialesController,
};