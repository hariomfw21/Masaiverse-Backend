const express = require('express');
const connection = require('./connection/connection');
const { userRegister } = require('./Routes/userRegister');
const cors = require('cors');
const { adminRouter } = require('./Routes/login');
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/user",userRegister);
app.use("/admin",adminRouter);


app.listen(3000, async() => {
    try {
        await connection
        console.log('Connect to database');
    } catch (error) {
        console.log(error);
    }
    console.log('Example app listening on port 3000!');
});