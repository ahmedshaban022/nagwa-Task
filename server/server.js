const express=require('express');
const app =express();
const cors=require('cors');
const wordsRoute=require('./routes/wordsRouter');



app.use(cors());
app.use(express.json());

app.use('/api',wordsRoute);




const PORT=5000;
app.listen(PORT,()=>{console.log(`Connected on Port ${PORT}`)})