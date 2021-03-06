import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import Display from './Display';

export default function Test () {
    const [data, setData] = useState([]);

    const getData = async () => {
      try {
        const res = await fetch ("https://jservice.io/api/random?count=10")
        const fetchedData = await res.json();
        setData(fetchedData);
      }
  
      catch (err){
        console.error(err);
      }
    }
    useEffect (() => {
        getData ();
    }, [])

    return (
        <>
        <h2> Welcome </h2>
          <Link to="/start"><button> start </button></Link>
          <Routes>
            <Route path='/start' element={<Display questions = { data }/> } /> 
          </Routes>
            
           
        </>
    )


    }
                 
    // text ? (
    // <>
    // <button value="reveal" onClick={ handleClick }>reveal answer</button>
    // <button value="correct" onClick= { handleClick }> increase score</button> 
    // <button value="incorrect"> decrease score</button>
    // </>): <h2>nothing</h2>
   
    // } 


    