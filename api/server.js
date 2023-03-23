const express=require("express")
const server=express()
const {logger}=require("./middleware/middleware.js")
const cors = require("cors")

server.use(express.json());

const userRouter=require("./users/users-router.js")
const registerRouter=require("./register/register-router.js")
const loginRouter=require("./login/login-router.js")

server.use(logger);
server.use(cors())

server.get("/api/", (req, res) => {
    res.send(`<h2>Backend d4</h2>`);
  });

server.use("/api/kullanicilar",userRouter)
server.use("/api/kayitol",registerRouter)
server.use("/api/giris",loginRouter)

server.use((err,req,res)=>{
  let status=err.status || 500;
  res.status(status).json({
    customMessage:"Bir hata oluştu,server js ten hata veriyor",
    message:err.message
  })
})

module.exports=server