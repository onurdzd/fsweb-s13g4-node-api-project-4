const logger =(req,res,next)=>{
    console.log(`[${new Date().toISOString()}] method:${req.method} url:${req.url}`)
    next()
}

module.exports = logger