import React, { useContext } from 'react'
import { Globalstate } from '../GlobalState';

const Rank = () => {
    const state=useContext(Globalstate);
    
    const [rank,setRank]=state.rank;
    const [callBack,setCallBack]=state.callBack;
    const [score,setScore]=state.score;

    
    const handleTryAgain=()=>{
      
      setCallBack(!callBack); // to reCall the api and change the words list with other on the Context
      setRank(0);
      setScore(0);

    }
  return (
    <div className='my-3 p-3 bg-light fw-bold '>
      <p className='p-3 fs-3'>
       Your Rank Is Better Than <span className='text-success'>{rank}%</span> From Peers  
      </p>
      <div>
        <button className='btn btn-success fw-bold' onClick={handleTryAgain}>Try Again</button>
      </div>
      </div>
  )
}

export default Rank