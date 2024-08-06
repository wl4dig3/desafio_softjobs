import express from 'express';
import { controller } from '../controllers/controller.js';

const router = express.Router();

router.get('/',  controller.home);
router.post('/registrarse', controller.register);
router.post('/usuarios', controller.register);
router.get('/profile', controller.profile);
router.post('/login', controller.login);

export default router;