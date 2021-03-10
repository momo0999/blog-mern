import express from 'express';
const router = express.Router();

import { authUser, loginDemo } from '../controller/usersController.js';

router.route('/login').post(authUser);
router.route('/logindemo').post(loginDemo);

export default router;
