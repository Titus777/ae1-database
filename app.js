require("dotenv").config();
const express = require('express');
const expressSession = require("express-session")
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path =require('path'); 
const process = require("process");
const mongoose = require("mongoose");

const anime=require('./server/models/anime')

const animecontroller=require('./server/controller/animes')

const app = express()

const { PORT, MONGODB_URI } = process.env;


// log requests
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());
app.use(expressSession({secret: "foo barr", cookie: {expires: new Date(253403000000)}}));
//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load design
app.use('/css',express.static(path.resolve(__dirname,"design/css")))
app.use('/background',express.static(path.resolve(__dirname,"design/background")))
app.use('/javascript',express.static(path.resolve(__dirname,"design/javascript")))


app.get("/",animecontroller.list);
app.get("/home/delete/:id",animecontroller.delete);

app.get("/update-anime/:id",animecontroller.edit);
app.post("/update-anime/:id",animecontroller.update);


app.post("/search/ByName",animecontroller.searchBar)

app.get("/add-anime", (req, res) => {
  res.render("add-anime");
});
app.post("/add-anime", animecontroller.create);





mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on("error", (err) => {

    console.error(err);

    console.log(

        "MongoDB connection error. Please make sure MongoDB is running.",

        chalk.red("✗")

    );

    process.exit();

});

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});
