import {useState} from 'react'
function Card({name, image, text, level, types}){
    const[cardData, setCardData]=useState({
        name:'',
        image:'',
        text:'',
        level:'',
        types:[]
        
        
    })
    function addCards(e){
        e.preventDefault()
        setCardData({
            name: name,
            image: image,
            text: text,
            level: level,
            types: types
             
      
          
        })
        
            fetch('/usercards', {
                method: 'POST', 
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(cardData)
            }).then((r)=>r.json())
        
        
    }
 return (

    <>
    <h2>{name}</h2>
    <img src={image} alt={name}/>
    <p>{text}</p>
    <p>{level}</p>
    <p>{types}</p>
   
    <button onClick={addCards}>Add</button>
    </>
 )
}
export default Card