import jwt from 'jsonwebtoken';
import bcript from "bcryptjs";
import { model } from '../models/queries.js';


const home = (req, res) => {
    res.send("Hello World from Home");
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await model.getUsuario(email);
    if (!user) {
      res.status(401).send("usuario no encontrado");
    } else {
      const token = jwt.sign({ email }, 'secret');
      res.status(200).json({ token });
    }
  } catch (error) {
    res.status(500).send(error);
  }
  };


    const register = async (req, res) => {
        const { email, password, rol, lenguage } = req.body;
        const result = await model.addUsuario({email, password: bcript.hashSync(password, 10), rol, lenguage});
        res.send("Usuario creado exitosamente");
        return result;
    };
    const getUsuarioControlador = async (req, res) => {
      const { email, password, rol, lenguage } = req.body;
       try {
        const usuarios = await model.addUsuario({email, password: bcript.hashSync(password, 10), rol, lenguage});
        res.json(usuarios);
       } catch (error) {
        console.log('falló la consulta',error.message);
       }
    };
    const profile = async (req, res) => {
      let token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
       try {
        const decoded = jwt.verify(token, 'secret');
        const user = await model.getUsuario(decoded.email);
        if (user) {
          res.send(user);
        } else {
          return res.status(401).send({ message: 'Unauthorized' });
        }
       } catch (error) {
        return res.status(401).send("Invalid Token");

       }
    };






export const controller = {
    home,
    register,
    getUsuarioControlador,
    profile,
    login,
};