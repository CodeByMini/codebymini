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
    yearstart: {
        type: String
    },
    yearend: {
        type: String
    }
});

const Item = mongoose.model('item', cvItemsSchema);

const cvPersonalSchema = new mongoose.Schema({
    body:  {
        type: String, 
        required:true
    }
});

const Personal = mongoose.model('personal', cvPersonalSchema);


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/', function(req, res) {
    Personal.find({}).sort({id : 1}).exec(function(err, personal){
    res.render("index", {personals: personal});
    });
});

app.get('/cv', function(req, res) {
    Item.find({}).sort({yearend : -1}).exec(function(err, items){
        res.render("cv", {items: items});
    });
});

app.get('/contact', function(req, res) {
    res.render("contact");
});

app.get('/pdf', function(req, res) {
    Item.find({}).sort({yearend : -1}).exec(function(err, items){
        Personal.find({}).sort({id : 1}).exec(function(err, personal){
        res.render("pdf", {items: items, personals: personal});
    });
});
});

app.get('/compose', function(req, res) {
    res.render("compose");
});

app.post('/compose', function(req, res){
    console.log(req.body.title)
    const item = new Item({
        title: req.body.title,
        body: req.body.body,
        yearstart: req.body.yearstart,
        yearend: req.body.yearend
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

app.post('/personalcompose', function(req, res){
    console.log(req.body)
    const personal = new Personal({
        body: "hejhej"
    })
    console.log("hejhejhejehejehejehehje")
    personal.save(function(err){
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