const express = require("express");
const app = express();

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

app.listen(3000, () => console.log("app is listening on port 3000"));