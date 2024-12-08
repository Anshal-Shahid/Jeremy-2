const express=require("express")
const router=express.Router()

const {home,about,index,dinner}=require("../controllers/index.controller.js")


router.get("/",home)
router.get("/about",about)
router.get("/index",index)
router.get("/dinner",dinner) 

module.exports=router