const express=require('express');
const app =express();


const wordsRoute=require('./routes/wordsRouter');
app.use(express.json());


app.use('/api',wordsRoute);




const PORT=5000;
app.listen(PORT,()=>{console.log(`Connected on Port ${PORT}`)})