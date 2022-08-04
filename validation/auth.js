import {body} from 'express-validator';

export const registerValidator =[
    body('email').isEmail(),
    body('password', "Error: inValid Pass! Min lenght 8chars").isLength({min: 8}),
    body('login').isLength({min: 3}),
    body('avatarUrl').optional().isURL(),
]