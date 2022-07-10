const express=require('express');
const app =express();
const cors=require('cors');
const wordsRoute=require('./routes/wordsRouter');
const path= require('path');


app.use(cors());
app.use(express.json());

app.use('/api',wordsRoute);


const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1,'../client/build')));
app.get('/',(req,res)=>{
  
  res.sendFile(path.resolve(__dirname1,"client","build","index.html"));
  
});



const PORT=5000;
app.listen(PORT,()=>{console.log(`Connected on Port ${PORT}`)})