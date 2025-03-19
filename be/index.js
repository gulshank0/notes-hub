const express=require("express");
const app = express();


app.get("/",function(req,res){
    res.send("hello world");
})
app.post("/",(req,res)=>{
    res.send("this time post request got invoke");
} )




app.listen(3000,()=>{
    console.log("listening on port 3000")
})