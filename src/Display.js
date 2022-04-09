import { useState, useEffect } from "react";

export default function Display ({ questions }) {

    const [question, setQuestion] = useState(null);

    const getQuestion = () => {
        setQuestion(questions[Math.floor(Math.random()*questions.length)])
    }
    useEffect(() => {
        getQuestion();
    })
    return question ? <h1>{ question.answer }</h1> : <h1> shit has failed</h1>
}