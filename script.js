const express = require ('express')

const app = express();

app.use(function(req,res,next){
  console.log("mmiddle wire working");
  next();
})
app.use(function(req,res,next){
  console.log("mmiddle wire worked 2nd time");
  next();
})

app.get("/",(req,res)=>{
  res.send("hello mountains v");
});
app.get("/about",(req,res,next)=>{
  return next(new Error("Something went wrong"))
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3001)