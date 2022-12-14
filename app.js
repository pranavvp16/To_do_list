const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Study Chemistry" , "Complete assignment" , "Make flappyBirdAI"];

app.use(bodyParser.urlencoded({extended: true}));
app.set('veiw engine','ejs');


app.get("/",function(req,res){
    let today = new Date();
    let options = {weekday: "long" , day: "numeric" , month: "long"};
    let day = today.toLocaleDateString('en-US',options);
    res.render("index" , {kindOfDay:day,newItems:items});
});

app.post("/",function(req,res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})


app.listen(3000,function(){
    console.log("App running at port 3000")
});