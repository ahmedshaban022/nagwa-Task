import React, { useContext } from 'react'
import { Globalstate } from '../GlobalState';

const Rank = () => {
    const state=useContext(Globalstate);
    
    const [rank,setRank]=state.rank;
    const [callBack,setCallBack]=state.callBack;
    const [score,setScore]=state.score;

    const handTryAgain=()=>{
      setCallBack(!callBack);
      setRank(0);
      setScore(0);

    }
  return (
    <div className='my-3 p-3 bg-light fw-bold '>
      <p className='p-3'>
       Your Rank Is Better Than <span className='text-danger'>{rank}%</span> From Your Friends   
      </p>
      <div>
        <button className='btn btn-success' onClick={handTryAgain}>Try Again</button>
      </div>
      </div>
  )
}

export default Rank