const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Date =require(__dirname +"/date.js");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


var items =["buy food","cook food","eat food"];
let workItems=[];




app.get("/", function(req, res) {
  let day = Date();
  res.render("list", {listTitle: day , newListItems : items});
});

app.post("/", function(req,res){
    var item = req.body.newItem;
    console.log(req.body.list);
if(req.body.list ==="work"){

  workItems.push(item);
   res.redirect("/work");
}
else{
    items.push(item);
     res.redirect("/");
    console.log(item);
  }

})

app.get("/work",function(req,res){
  res.render("list", {listTitle: "work List" , newListItems : workItems});
})


app.listen(3000, function() {
  console.log("server started at port 3000");
});
