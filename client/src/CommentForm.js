import {useState, useEffect} from 'react'

function CommentForm({user_id}){
    const[comment, setComment]=useState('')
    const[currentCom, setCurrent]=useState([])
    useEffect(()=>{
        fetch('/comments').then((r)=>setCurrent(r))
    },[])
function handleSubmit(e){
    e.preventDefault()
    fetch('/comment',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({comment, user_id: user_id})

    })

   
}

    return <>

        <form  onSubmit={handleSubmit}>
            <input type='text'value={comment} onChange={(e)=>setComment(e.target.value)}/>
            <input type ='submit'></input>
        </form>
        
           
    </>
}
export default CommentForm 