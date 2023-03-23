const express=require("express")
const router=express.Router()
const mw=require("../middleware/middleware.js")

router.post("/",mw.isValidUser, (req, res) => {
    res.status(201).json({message:"hoşgeldiniz"+req.body.kullaniciAdi})
});

module.exports = router;

