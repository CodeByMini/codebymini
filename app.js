require('dotenv').config();
const express = require('express');


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const data = [0];

app.get('/', function(req, res) {
    res.render("index", {data: data});
});

app.get('/cv', function(req, res) {
    res.render("cv", {data: data});
});

app.get('/contact', function(req, res) {
    res.render("contact", {data: data});
});

app.listen(process.env.PORT, function() {
    console.log("listening on port " + process.env.PORT);
})