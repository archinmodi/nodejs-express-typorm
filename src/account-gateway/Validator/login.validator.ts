import { check } from 'express-validator'

export default [
    check('email', 'Please enter email').isEmail(),
    check('password').isString(),
    check('rememberme').isBoolean()
]