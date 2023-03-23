const express=require("express")
const server=express()
const logger=require("./api/middleware/middleware.js")

server.use(express.json());

const userRouter=require("./api/users/users-router.js")
const registerRouter=require("./api/register/register-router.js")
const loginRouter=require("./api/login/login-router.js")

server.get("/api/", logger, (req, res) => {
    res.send(`<h2>Backend d4</h2>`);
  });

server.use("/api/kullanicilar",logger,userRouter)
server.use("/api/kayitol",logger,registerRouter)
server.use("/api/giris",logger,loginRouter)

module.exports=server