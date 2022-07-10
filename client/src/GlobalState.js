import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";



export const Globalstate = createContext();


export const DataProvider =({children})=>{
    const [wordsList,setWordsList]=useState([]);
    const [rankPage,setRankPage]=useState();
    const [callBack,setCallBack]=useState(false);
    const [score,setScore]=useState(0);

    const fetchWords=async()=>{
        try {
            let {data}=await axios.get('/api/');
            setWordsList([...data.data]);
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    }
    useEffect(()=>{
        fetchWords();
    },[callBack])

   
    const state={
      wordsList:[wordsList,setWordsList],
      rank:[rankPage,setRankPage],
      score:[score,setScore],
      callBack:[callBack,setCallBack],
    }

    return(
        <Globalstate.Provider value={state}>
            {children}
        </Globalstate.Provider>
    )
}
 