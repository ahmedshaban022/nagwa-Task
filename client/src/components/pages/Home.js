import React, { useContext, useEffect, useState } from 'react'
import { Globalstate } from '../../GlobalState'
import Rank from '../Rank';
import WordsQuestions from '../WordsQuestions';

const Home = () => {
    const state=useContext(Globalstate);
    const [wordsList,setWordsList]=state.wordsList;
    const [rank,setRank]=state.rank;
    


    useEffect(()=>{
    },[])
  return (
    <div>

        { rank?<Rank/>:
           wordsList.length>0&& // change this condition
            <WordsQuestions />
            
        }

    </div>
  )
}

export default Home