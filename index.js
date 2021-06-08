const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static("public"));

app.set('view engine', 'pug');

app.get("/", function(req, res) {
    res.render('index');
});

app.get("/about", function(req, res) {
    res.render('about');
});

app.get("/contacts", function(req, res) {
    res.render('contacts');
});

app.get("/quotes", function(req, res) {
    res.render('quotes');
});

// app.post("/", function (req, res) {
//     console.log(req.body);
// });

app.listen(3000, function() {console.log("server started on port 3000")});