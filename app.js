/*
    name: Danna Villamil
    date: 30/03/2022
    https://www.youtube.com/watch?v=S4IgPTwwPBw&ab_channel=MonkeyWit
*/

const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001;
const bluebird = require('bluebird');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
require("dotenv").config();
const superRoutes = require("./routes/superhero")


const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));

//Al conectar a la nube recordar pegar el enlacedesde Atlas-laboratorio.superheroes
mongoose.connect("mongodb+srv://dcvillamil:dcvillamil12345@cluster0.w4fa5.mongodb.net/laboratorio?retryWrites=true&w=majority")
    .then(() => console.log('exitoso'))
    .catch((error) => console.error(error))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use('/api', superRoutes);
app.use(cors({ origin: true }));
app.set('port', process.env.PORT || port);


app.get("/", function(req, res) {

    res.send("Muestra")
});


app.listen(app.get('port'), async() => {
    console.log("Servidor running on port: " + port);
});