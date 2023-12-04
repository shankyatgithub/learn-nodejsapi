const express = require("express");
const app = express();
require("dotenv").config();

app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.get('/login', (req,res) => {
    let userName = req.query.user;
    if(userName == "admin"){
        res.json({"message":"Login Successful!"});
    }else{
        res.status(401).json({"error":'Invalid Username or Password!'});
    }
})

app.listen(process.env.PORT, () => console.log(`app is listening on port ${process.env.PORT}`));