const Router= require('express').Router();
let id =0;

Router.get('/:__id',(req,res,next)=>{
    id=req.id= req.params.__id;
    console.log("in get middleware")
    next();
})


Router.post('/',(req,res,next)=>{
    req.id = id;
    console.log("in post middleware")
    next();
})
module.exports = Router;
