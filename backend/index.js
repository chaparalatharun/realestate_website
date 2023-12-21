const express = require("express");
const mongoose = require("mongoose");

const credsModel = require("./database/creds");
const url = "mongodb+srv://tharun_chaparala:WpLYO2nMmKSROOlg@cluster0.fn1ju6t.mongodb.net/realestate?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>console.log("connection established"));

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get("/", (req,res)=>{
    res.json({"welcome": "to the realestate website"});
})

app.get("/signin", async(req,res)=>{
    const getCreds = await credsModel.find();
    res.json(getCreds);
})

app.get("/sign/:username/:password", async(req,res)=>{
    console.log(req.params);
    const un = req.params.username;
    const pass = req.params.password;
    const getCreds = await credsModel.findOne({username: un});
    console.log(getCreds);
    if(getCreds != null){
        if(getCreds.username == un && getCreds.password == pass){
            const name = getCreds.first_name + " " + getCreds.last_name;
            res.json({"message": `welcome ${name}`});
        }
        else{
            res.json({"message": "wrong password try again!"});
        }
    }
    else{
        res.json({"message": "try again"});
    }
})

app.post("/signup", async(req,res)=>{
    const getMovies = await credsModel.findOne({email: req.body.email});
    if (getMovies == null){
        const newCreds = await credsModel.create(req.body);
        return res.json({"new user": newCreds.username, "message":"new user was added"});
    }
    else{
        return res.json({"user already exists": "send again"});
    }
})

app.listen(9000, ()=>{
    console.log("server is running at port 9000");
})