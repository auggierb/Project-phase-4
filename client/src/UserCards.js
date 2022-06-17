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
        const updateQuantity = {quantity: quantity + 1}
        fetch(`/usercards/${e.target.id}`, {
            method: 'PATCH',
           body: JSON.stringify(updateQuantity) }).then((r)=>r.json()).then((r)=> setQuantity(r))
    }
        function handleDelete(e){
            fetch(`/usercards/${e.target.id}`,{
                method: 'DELETE'
            })

        }
    return(  
        <>
        {cards.map((card)=>{
     return <> 
            <h2>{card.name}</h2>
            <img src= {card.image} alt={card.name}/>
            <h3>{card.quantity}</h3>
            <h3>{card.comment}</h3>
            <input type='button' id={card.id} value={'add'} onClick={handleClick}/>
            <input type='button' id={card.id} value={'delete'} onClick={handleDelete}/>
            <CommentForm user_id={user_id}/>
            
               </>
        })}
        </>
    )
}

export default UserCards