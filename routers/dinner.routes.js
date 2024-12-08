const express=require("express")
const router=express.Router()

const {dinner}=require("../controllers/index.controller.js")
const {vol_4}=require("../controllers/vol_4.controller.js")


router.get("/",dinner)
router.get("/vol-4",vol_4)


module.exports=router