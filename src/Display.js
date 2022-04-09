import { useState, useEffect } from "react";

export default function Display ({ questions }) {

    const [local, setLocal]= useState([]);
    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState(false);
    const [score, setScore] = useState(0);

        const getQuestions = () => {
            setLocal(questions);
            setQuestion(local[Math.floor(Math.random()*local.length)]);
        }

    const handleClick = (e) => {
        switch(e.target.name){
            case "reveal": 
                setAnswer(!answer);
                break;
            case "increase": 
                setScore(score + question.value);
                setAnswer(!answer);
                break;
            case "decrease": 
                setScore(score - question.value);
                setAnswer(!answer);
                break;
            case "new": 
                setQuestion(local[Math.floor(Math.random()*local.length)]);
                setAnswer(!answer);
            
            default: console.log("boo-ya");
        }
    }
    useEffect(() => {
        getQuestions();
    }, [local])


    return question ? (
                        <>
                        <h1>{ question.category.title }</h1>
                        <p> score: { score }</p>
                        <p>{ question.value }</p>
                        <p>{ question.question }</p>
                        <button name="reveal" onClick={ handleClick }> check answer</button>

                        {
                            answer ? (
                                        <>
                                        <p>{ question.answer }</p>
                                        <button name="increase" onClick={ handleClick }>correct</button>
                                        <button name="decrease" onClick={ handleClick }>incorrect</button>
                                        <button name="new" onClick={ handleClick }>new</button>
                                        </>
                            )
                                    : null
                        }
                        </>
                        ): <h1> shit has failed</h1>
}