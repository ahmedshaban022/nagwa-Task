const fs=require("fs");
let wordList=[];
let scoresList=[];
let parsedData;


// Reading Json File Data
try {
    
    const data = fs.readFileSync('./TestData.json',
              {encoding:'utf8', flag:'r'});
     parsedData= JSON.parse(data);
     wordList=[...parsedData.wordList];
     scoresList=[...parsedData.scoresList];

} catch (error) {
    console.log(error.message);
}


const fetchingWordsList=(req,res)=>{
try {
   let randomWords= pushingRandomWords();
    res.json({msg:"success",data:randomWords})
} catch (error) {
    console.log(error.message);
    res.status(500).json({msg:error.message,})
}


}

const findRank=(req,res)=>{

    try {
        const {finalScore}=req.body;
        if(!finalScore) res.status(400).json({msg:"faild Score is missing"});
        let belowScore=0;
        scoresList.map((score)=>{
            if(score<finalScore){
                belowScore++
            }
        });
        let Rank = (belowScore * 100)/30;

        addScoreToScoreList(finalScore);
        res.json({msg:"Success",data:+Rank.toFixed(2)})

        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:error.message,})
    }
}











// pushing random and all words types

function pushingRandomWords(){
    let posArr=["noun","adverb","adjective","verb"];
    let randomWords=[];
    
    while(randomWords.length<10){

        let randomNumber=Math.floor(Math.random() * 15);
        if(randomWords.includes(wordList[randomNumber])){
            
        }
        else{
            // to make sure that all types are in the array of words 
            if(posArr.length>0){

                if(posArr.includes(wordList[randomNumber].pos))
                {
                    let index=posArr.indexOf(wordList[randomNumber].pos);
                    posArr.splice(index,1);
                    randomWords.push(wordList[randomNumber]);
                    
                }
            }else{
                randomWords.push(wordList[randomNumber]);
            }
        }
    }
    return randomWords;

}

// add the score to score list


async function  addScoreToScoreList (score){
try {
    scoresList=[...scoresList,score];
    let data= await JSON.stringify({wordList,scoresList});
    
    fs.writeFile("TestData.json", data, (err) => {
        if (err)
          console.log(err);
       })
    
} catch (error) {
    console.log(error.message);
}
}


module.exports={fetchingWordsList,findRank}