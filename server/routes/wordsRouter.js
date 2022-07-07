const express=require("express");
const { fetchingWordsList, findRank } = require("../controller/wordsCtr");
const router=express.Router();


router.get("/",fetchingWordsList);
router.post("/",findRank);


module.exports=router;