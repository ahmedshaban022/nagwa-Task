const express=require('express');
const app =express();


const wordsRoute=require('./routes/wordsRouter');
app.use(express.json());
// let wordsList=[];
// let scoresList=[];
// let randomWords=[];
// let parsedData;
// let posArr=["noun","adverb","adjective","verb"]

// // Reading Json File Data
// try {
    
//     const data = fs.readFileSync('./TestData.json',
//               {encoding:'utf8', flag:'r'});
//      parsedData= JSON.parse(data);
//      wordsList=[...parsedData.wordList];
//      scoresList=[...parsedData.scoresList];

// } catch (error) {
//     console.log(error.message);
// }


// // pushing random and all words types

//     function pushingRandomWords(){
    
//             while(randomWords.length<10){

//                 let randomNumber=Math.floor(Math.random() * 15);
//                 if(randomWords.includes(wordsList[randomNumber])){
                    
//                 }
//                 else{
//                     // to make sure that all types are in the array of words 
//                     if(posArr.length>0){

//                         if(posArr.includes(wordsList[randomNumber].pos))
//                         {
//                             let index=posArr.indexOf(wordsList[randomNumber].pos);
//                             posArr.splice(index,1);
//                             randomWords.push(wordsList[randomNumber]);
                            
//                         }
//                     }else{
//                         randomWords.push(wordsList[randomNumber]);
//                     }
//                 }
//             }
//             console.log(randomWords);

//     }
//      pushingRandomWords();
    


app.use('/api',wordsRoute);




const PORT=5000;
app.listen(PORT,()=>{console.log(`Connected on Port ${PORT}`)})