const express=require('express')
const controller=require('../controller/userController')
const route=express.Router();

route.post('/create',controller.create)
route.get('/getAll',controller,getAll)
route.get('/getOne',controller,getOne)
route.put('/update',controller,update)
route.delete('/delete/:id',controller,deleteUser)

module.exports=route;