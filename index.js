const server = require("./server.js");
require("dotenv").config();

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(process.env.MESSAGE + " " + port);
});

server.get("/", (req,res) => {
  res.send(process.env.MESSAGE + " ");
});
