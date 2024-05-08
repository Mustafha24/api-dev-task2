import express from 'express';
import { registerUser, loginUser,forgotPassword} from '../controllers/user.controller.js';

const authRouter = express.Router();

authRouter.post('/register', registerUser);

authRouter.post('/login', loginUser);

authRouter.post('/forgot-password', forgotPassword);


export default authRouter;
