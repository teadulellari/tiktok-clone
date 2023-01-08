import express from "express";
import mongoose from "mongoose";
import data from './data.js';

//app config
const app = express();
const port = 9000;


//middlewares


//DB config



//api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));


app.get('/v1/posts', (req, res) => {
    res.status(200). send(data)
})

//listener
app.listen(port, () => console.log(`listening on localhost : ${port}`));
