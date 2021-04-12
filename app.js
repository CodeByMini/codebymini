require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.ATLASDB, {useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false})


const cvItemsSchema = new mongoose.Schema({
    title: {
        type: String, 
        required:true
    },
    body:  {
        type: String, 
        required:true
    },
    year: {
        type: String
    }
});

const Item = mongoose.model('item', cvItemsSchema);


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const data = [0];

app.get('/', function(req, res) {
    res.render("index", {data: data});
});

app.get('/cv', function(req, res) {
    Item.find({}, function(err, items){
        res.render("cv", {items: items});
    });
});

app.get('/contact', function(req, res) {
    res.render("contact", {data: data});
});

app.get('/compose', function(req, res) {
    res.render("compose");
});

app.post('/compose', function(req, res){
    console.log(req.body.title)
    const item = new Item({
        title: req.body.title,
        body: req.body.body,
        year: req.body.year
    })
    console.log(item.body)
    item.save(function(err){
        if(!err){
            res.redirect("/cv");
        }else{
            console.log(err)
        }
    })
})

app.listen(process.env.PORT, function() {
    console.log("listening on port " + process.env.PORT);
})