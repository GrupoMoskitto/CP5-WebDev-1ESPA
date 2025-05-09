const express =require("express")
const cors =require("cors")
const bodyParser =require("body-parser")
const {v4:uuid} =require("uuid")

const app =express();

const Port=3000;

app.use(cors());
app.use(bodyParser.json());

let produtos=[];