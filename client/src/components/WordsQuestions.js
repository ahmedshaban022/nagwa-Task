import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { Globalstate } from '../GlobalState';
import Progress from './Progress'

const WordsQuestions = () => {


    // global states
    const state=useContext(Globalstate);
    const [wordsList,setWordsList]=state.wordsList;
    const [rank,setRank]=state.rank;
    const [score,setScore]=state.score;
    const [answered,setAnsewred]=useState(false);
    const [next,setNext]=useState(false);
    const [selectedWord,setSelectedWord]=useState(0);

    // buttons refernses
    const nounBtn=useRef();
    const verbBtn=useRef();
    const adverbBtn=useRef();
    const adjectiveBtn=useRef();

    const handleOnClick=(btnRef)=>{
        if(answered) return false;
        if(btnRef.current.name===wordsList[selectedWord].pos)
        {
            btnRef.current.style.backgroundColor="green";
            setAnsewred(true);
            setScore(score+1);
        }else{
            
            btnRef.current.style.backgroundColor="red";
            setAnsewred(true);
        
                    // finding the right answer 
                    if(nounBtn.current.name===wordsList[selectedWord].pos)
                    nounBtn.current.style.backgroundColor="green";

                    else if(verbBtn.current.name===wordsList[selectedWord].pos)
                    verbBtn.current.style.backgroundColor="green";
                    
                    else if(adverbBtn.current.name===wordsList[selectedWord].pos)
                    adverbBtn.current.style.backgroundColor="green";
                    else if(adjectiveBtn.current.name===wordsList[selectedWord].pos)
                    adjectiveBtn.current.style.backgroundColor="green";
                
            
        }
        setNext(true);
        
    }
const handleNext=async()=>{
    if(selectedWord>=wordsList.length-1){
       try {
        let {data}=await axios.post('/api/',{finalScore:(score/wordsList.length)*100});
        console.log(data);
         setRank(data.data);
       } catch (err) {
        toast.error(err.response.data.msg)
       }
        return false;
    } else{

        setSelectedWord(selectedWord+1);
        setAnsewred(false);
        setNext(false);
        nounBtn.current.style.backgroundColor="";
        verbBtn.current.style.backgroundColor="";
        adverbBtn.current.style.backgroundColor="";
        adjectiveBtn.current.style.backgroundColor="";
    }

}
  return (
    <div className='container mt-3 p-3 m-auto bg-light '>
       <div className=' m-3 p-3'>
        <div className='my-2'>
            <span className='text-muted fw-bold'>{(selectedWord/wordsList.length)*100}%</span>
        <Progress progressPercentage={(selectedWord/wordsList.length)*100}/>
        </div>
        <div className='my-3'>
                
            <p className='text-muted '>Click on the Right Answer </p>
            <p className='fs-2 fw-bold '> { wordsList && wordsList[selectedWord].word}</p>
        </div>
       
        <div className='btns mt-5'>
            <button ref={nounBtn} name="noun"  onClick={()=>handleOnClick(nounBtn)}className=' btn border fs-4 text-muted   fw-bold m-3'>Noun</button>
            <button ref={verbBtn} name="verb" onClick={()=>handleOnClick(verbBtn)} className=' btn border fs-4 text-muted   fw-bold m-3'>Verb</button>
            <button ref={adverbBtn} name="adverb"  onClick={()=>handleOnClick(adverbBtn)}className=' btn border fs-4 text-muted   fw-bold m-3'>Adverb</button>
            <button ref={adjectiveBtn} name="adjective" onClick={()=>handleOnClick(adjectiveBtn)} className=' btn border fs-4 text-muted   fw-bold m-3'>Adjective</button>
        </div>
        <div className='text-end'>
            <button className='btn btn-primary ' onClick={handleNext} disabled={!next}>{selectedWord>=wordsList.length-1?"Submit":"Next"}</button>
        </div>
       </div>
    </div>
  )
}

export default WordsQuestions