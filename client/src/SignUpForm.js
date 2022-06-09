import React, {useState} from "react"
function SignUpForm(setUser){
    const[username, setUsername]=useState('')
    const[password, setPassword]=useState('')
    const[confPassword, setConf]=useState('')

        function handleSignUp(e){
            e.preventDefault()
            fetch('/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {username, password, password_confirmation: confPassword}
                )
            }).then((r)=>{
                if (r.ok){
                    r.json().then((r)=>setUser(r))
                }
            })
        }
    return(
        
        <>
        
         <form onSubmit={handleSignUp}>
        <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}placeholder='Username'/>
        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder='Password'/>
        <input type="password" id="passwordConfirm" value={confPassword} onChange={(e)=>setConf(e.target.value)}placeholder="Confirmation"/>
        <input type='submit' id='submit'value="Submit"/>
    </form>
        </>
    )
}

export default SignUpForm