const fs=require("fs");
let wordsList=[];
let scoresList=[];
let parsedData;


// Reading Json File Data
try {
    
    const data = fs.readFileSync('./TestData.json',
              {encoding:'utf8', flag:'r'});
     parsedData= JSON.parse(data);
     wordsList=[...parsedData.wordList];
     scoresList=[...parsedData.scoresList];

} catch (error) {
    console.log(error.message);
}


const fetchingWordsList=(req,res)=>{
try {
   let randomWords= pushingRandomWords();
    res.json({msg:"success",data:randomWords})
} catch (error) {
    console.log(error.message,"oooooo");
    res.status(500).json({msg:error.message,})
}

    



}












// pushing random and all words types

function pushingRandomWords(){
    let posArr=["noun","adverb","adjective","verb"];
    let randomWords=[];
    
    while(randomWords.length<10){

        let randomNumber=Math.floor(Math.random() * 15);
        if(randomWords.includes(wordsList[randomNumber])){
            
        }
        else{
            // to make sure that all types are in the array of words 
            if(posArr.length>0){

                if(posArr.includes(wordsList[randomNumber].pos))
                {
                    let index=posArr.indexOf(wordsList[randomNumber].pos);
                    posArr.splice(index,1);
                    randomWords.push(wordsList[randomNumber]);
                    
                }
            }else{
                randomWords.push(wordsList[randomNumber]);
            }
        }
    }
    return randomWords;

}

module.exports={fetchingWordsList}