import React, {useState} from 'react';
function Login({setUser}){

    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    function handleLogin(e){
        e.preventDefault()
        fetch('/login',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
        .then((r)=>{
            if(r.ok){
                r.json().then((r)=>setUser(r))
            }
        })
    }

return(
    <>
    <form onSubmit={handleLogin}>
        <input type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type='password' placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type='submit' value='Login'/>
    </form>
    
    </>
)
}

export default Login