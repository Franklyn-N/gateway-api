const http = require('http');
const express = require('express');
const userRouter = require("./routes/index.js");

const app = express();

app.use('/user', userRouter);

let port = 8080;

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
    console.log(`Server running on ${port}`)
});