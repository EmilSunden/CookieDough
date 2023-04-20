const Router = require('express');
const authRouter = new Router();

const { register } = require('../../controllers/authControllers/register/register');
const { login } = require('../../controllers/authControllers/login/login');

authRouter.post('/register', register);
authRouter.post('/login', login);

module.exports = {
    authRouter
};
