require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const morgan = require('morgan');
const path = require('path');
const productRouter = require('./Routes/product');
const userRouter = require('./Routes/user');
const cors = require('cors');
// create an server
const server = express();

// set an middleware
server.use(express.json());
// server.use(morgan("default"));

main().catch(err => console.log("db-err: ", err))

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected");
}

// cors enable
server.use(cors());

// API version v1 for the // Products Resource
server.use('/api/v1', productRouter.productRouter)
// API Version v1 for the // Users Resource
server.use('/api/v1', userRouter.userRouter)

// const productRouter = express.Router();
// server.use((req, res, next) => {
//     next();
// })

// for static hosting
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))

// to handle the static react application
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'build','index.html'))
})


// start the server
server.listen(process.env.PORT, () => {
    console.log(`Server is running on this Port ${process.env.PORT}`);
})