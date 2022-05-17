import {useState} from 'react'
function Search(){
const ApiKey= '97c86bd2-5f88-47c7-983b-1c82177ffbf1'


    const[searchTerm,setTerm]=useState([])
    function sendSearch(){
        
    }
    return(
        <>
        
    <input type='text'value={searchTerm} onChange={(e)=>{setTerm(e.target.value)}}/>
        </>
    )
}
export default Search