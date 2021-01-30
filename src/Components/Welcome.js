import React from 'react'
import {useParams} from 'react-router-dom'

export default function Welcome() {
    const {name}=useParams();
    return (
        <div>
            <h1>Welcome to To-Do App  {name}</h1>
        </div>
    )
}
