const http = require('http');
const express = require('express');
const userRouter = require("./routes/index.js");
const { config } = require('./config/config.js');


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', userRouter);



app.get("/", (req, res) => {
    res.status(200).json({message: "Wow everything is working fine!"})
  })

const httpServer = http.createServer(app);
httpServer.listen(config.port, () => {
    console.log(`Server running on ${config.port}`);
});
