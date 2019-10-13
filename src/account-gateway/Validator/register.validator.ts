import { check } from 'express-validator'

export default [
    check('email', 'Please enter email').isEmail(),
    check('password', 'The password must be 5+ chars long and contain a number')
    .not().isIn(['123', '12345', '123456','1234567','12345678', '123456789','1234567890','admin@123','admin123','password', 'god', ]).withMessage('Do not use a common word as the password')
    .isLength({
        min: 5
    })
    .matches(/\d/),
    check('confirmpassword', 'confirmpassword field must have the same value as the password field')
    .exists()
    .custom((value, { req }) => value === req.body.password)
]