import React,{useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';

export default function Welcome() {
    const {name}=useParams();
    const [helloData, setData] = useState([]);

    const getCustomMessage=(name)=>{
        //console.log("Retreive clicked");
        axios.get(`http://localhost:8080/hello/pathVariable/${name}`)
            .then(data=>{
                setData(data.data);
                console.log(data.data);
            })
            .catch(err=>alert(err));
    }

    return (
        <div> 
            <h1>Welcome !</h1>
            <div className="container">
                Welcome to To-Do App {name} you can manage your todos <Link to="/todolist"> here</Link>
            </div>
            <div className="container">
                Click to see the custom welcome message 
                <button className='btn btn-success' onClick={getCustomMessage}>Custom Message</button>
            </div>
            <div>{helloData.hello}</div>
        </div>
    )
}
