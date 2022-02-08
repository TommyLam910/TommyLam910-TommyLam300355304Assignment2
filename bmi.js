// bmi = weight / Math.pow(height, 2);
//Math.round(bmi);

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//app.set('views', './views');
app.set('view engine', 'ejs');

//app.use('/css', express.static(__dirname + 'public/css'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render('bmi',{ageInput:null, weightInput: null, heightInput: null, put:false});
});

app.post("/", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var age = req.body.age;

    var bmi = weight / (height * height / 10000);
    bmi = bmi.toFixed(1);
    res.render('bmi',{ageInput:age, weightInput: weight, heightInput: height, put: true, bmiResult: bmi});
});

app.listen(3000, function(){
    console.log("The server is running on port 3000");
})