import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function (props) {

    const [loginSuccess, setLogin]=useState(true);
    const [userName, setUserName] = useState("siva");
    const history=useHistory();
    const handleChangeUser = (event)=>{
        console.log(event.target.value);
       setUserName(event.target.value);
    }

    const [password, setPassword] = useState("dummy");
    const handleChangePwd = (event)=>{
        console.log(event.target.value);
       setPassword(event.target.value);
    }

    const loginClick=()=>{
        if (userName==="siva" && password==="dummy") {
            history.push(`/welcome/${userName}`)
        } else {
            setLogin(false);
        }
    }
    return (
        <div>
            {loginSuccess && <div>Login Successful</div>}
            {loginSuccess || <div>Invalid Credentials</div>}
            User Name: <input type="text" name="name" value={userName} onChange={handleChangeUser}></input>
            Password : <input type="Password" name="password" value={password} onChange={handleChangePwd}></input>
            <button name="login" onClick={loginClick}>Login</button>
        </div>
    )
}
