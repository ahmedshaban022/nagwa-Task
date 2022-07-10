import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Globalstate } from '../GlobalState';
import Loader from './lodaer/Loader';

const Rank = () => {
    const state=useContext(Globalstate);
    
    const [rankPage,setRankPage]=state.rank;
    const [rank,setRank]=useState(0);
    const [callBack,setCallBack]=state.callBack;
    const [score,setScore]=state.score;
    const [wordsList,setWordsList]=state.wordsList;

    const getRank=async()=>{
      try {
        let {data}=await axios.post('/api/',{finalScore:(score/wordsList.length)*100});
            
         setRank(data.data);
       } catch (err) {
        toast.error(err.response.data.msg)
       }
    }
useEffect(()=>{
  getRank();
},[])

    const handleTryAgain=()=>{
      
      setCallBack(!callBack); // to reCall the api and change the words list with other on the Context
      setRank(0);
      setScore(0);
      setRankPage(0);

    }
  return (
    <div className='my-3 p-3 bg-light fw-bold '>
    {
      rank?<>
        <p className='p-3 fs-3'>
       Your Rank Is Better Than <span className='text-success'>{rank}%</span> From Peers  
      </p>
      <div>
        <button className='btn btn-success fw-bold' onClick={handleTryAgain}>Try Again</button>
      </div>
      </>:
      <div>
       <Loader/>
      </div>
    }
      </div>
  )
}

export default Rank