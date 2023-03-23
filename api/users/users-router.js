const express=require("express")
const router=express.Router()

router.get("/", (req, res) => {
    try {
        res.json({id:1,user:"onur"});
    } catch (error) {
        res.status(400).json({message:"Hata alındı"})
    }
  });

module.exports=router