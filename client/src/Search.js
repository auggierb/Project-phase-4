import {useState} from 'react'
import Card from './Card'

function Search({user}){
const ApiKey= '97c86bd2-5f88-47c7-983b-1c82177ffbf1'
    

    const[search, setSearch]=useState([])
    const[searchTerm,setTerm]=useState([])
    function sendSearch(e){
        e.preventDefault()
        fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}*`, {
            method: 'GET',
            headers:{'Content-Type': 'application/json', 'X-Api-Key':ApiKey}
        }).then((r)=>r.json())
            .then((r)=>setSearch(r.data))

         
        }
  
    
    return(
        <>
       
    <input type='text'value={searchTerm} onChange={(e)=>{setTerm(e.target.value)}}/>
    <button onClick={sendSearch}>Submit</button>
           {search.map((r)=>(
               <Card user_id={user.id}name={r.name} image={r.images.small} text={r.flavorText} level={r.level} types={r.types} />
           ))}
                
            
     
        </>
    )
}
export default Search