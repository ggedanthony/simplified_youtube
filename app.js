const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/simplified_youtube",{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});

mongoose.connection.once("open", ()=>{
	console.log("Now connected to local MongoDB");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(4000,() =>{
	console.log("Now listening to port 4000");
})