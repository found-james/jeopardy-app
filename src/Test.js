import { useState, useEffect } from 'react';

export default function Test () {
    const [data, setData] = useState([]);
    // const [text, setText] = useState(false);
    // const [answer, setAnswer] = useState(false);
    // const [score, setScore] =useState(0);
    // const [copyQuestion, setCopyQuestion] = useState[{}];
    
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

    // const handleClick = (e) =>{

    //     switch (e.target.value){
    //         case "start":
    //             setText(!text);
    //             // copyData();
    //             if (answer) setAnswer(!answer);
    //             break;
    //         case "reveal":
    //             setAnswer(!answer);
    //             break;
    //         case "correct":
    //             setScore(score + data[Math.floor(Math.random() * 10)].value);
    //             break; 
    //         default: console.log("default");
    //     }
    // }
    

    // const copyData = () => {
    //      console.log(setCopyQuestion(data[Math.floor(Math.random() * 10)].value));
    // }

    return (
        <>
        <h2> hello again</h2>
            <button  value="start"> start </button>
            
           
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


    