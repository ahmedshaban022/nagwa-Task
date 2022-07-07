const express=require("express");
const { fetchingWordsList } = require("../controller/wordsCtr");
const router=express.Router();


router.get("/",fetchingWordsList);


module.exports=router;