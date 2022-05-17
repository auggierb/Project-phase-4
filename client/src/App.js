
import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUpForm from './SignUpForm'

function App() {
  const [user, setUser]=useState('')

  useEffect(()=>{
    fetch("/me").then((r)=>{
      if (r.ok) {
        r.json().then((r)=> setUser(r))
      }
    })
  }, [])
  if (user){
    return <>
    <h3>welcome - {user.username}</h3>
   
    <Home setUser={setUser}/>

    </>
  }
  else{
    return(<>{<SignUpForm setUser={setUser}/>} {<Login setUser={setUser}/>}</>)

  }
}

export default App;
