
import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import SignUpForm from './SignUpForm'
import Search from './Search';
import UserCards from './UserCards';
import Comments from './Comments';
function App() {
  const [user, setUser]=useState('')

 useEffect(()=>{
    fetch("/me").then((r)=>{
      if (r.ok) {
        r.json().then((r)=> setUser(r))
      }
    })
  },[])
  if (user){
    return <>
   
   
    
    <NavBar setUser={setUser}/>

    <Routes>
      <Route exact path='/' element={<Home user={user}/>}/>
      <Route exact path='/search'element={<Search user={user}/>}/>
      <Route exact path='/usercard' element={<UserCards user_id={user.id}/>}></Route>
      <Route exact path='/userComments' element={<Comments/>}></Route>
    </Routes>
    </>
  }
  else{
    return(<>{<SignUpForm setUser={setUser}/>} {<Login setUser={setUser}/>}</>)

  }
}

export default App;
