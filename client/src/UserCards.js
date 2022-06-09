import { useState, useEffect } from "react"
import CommentForm from "./CommentForm"

function UserCards({user_id}){
    const[quantity, setQuantity]=useState(0)
    const[cards, setUserCard]=useState([])
    useEffect(()=>{
        fetch('/usercards').then((r)=>{
           if(r.ok){r.json().then((r)=>setUserCard(r))}

        })
    },[])
    function handleClick(e){
        fetch(`/usercards/${e.target.value}`, {
            method: 'PATCH',
           body: JSON.stringify({
               quantity: quantity + 1
           }) }).then((r)=>r.json)
    }
    return(
        <>
        {cards.map((card)=>{
     return <> 
            <h2>{card.name}</h2>
            <img src= {card.image} alt={card.name}/>
            <h3>{card.quantity}</h3>
            <input type='button' value={card.id} onClick={handleClick}/>
            
               </>
        })}
        </>
    )
}

export default UserCards