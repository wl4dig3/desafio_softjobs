import express from 'express';
import { controller } from '../controllers/controller.js';

const router = express.Router();

router.get('/',  controller.home);
router.post('/register', controller.register);
router.get('/usuarios', controller.getUsuarioControlador);

export default router;