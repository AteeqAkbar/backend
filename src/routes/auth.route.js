const express=require('express');
const authController= require('../controllers/auth.controller');

const router=express.Router();

router
    .route('/register')
    .post(authController.postRegister)

// router
//     .route('/login')
//     .post(authController.singinUser)

// router
//     .route('/user')
//     .post(authController.userRegister)



module.exports=router;