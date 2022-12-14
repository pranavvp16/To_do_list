const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('veiw engine','ejs');

app.get("/",function(res,req){
    res.send("Hello")
});

app.listen(3000,function(){
    console.log("App running at port 3000")
});