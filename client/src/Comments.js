import {useState,useEffect} from 'react'
function Comments(){
const [allCom, setCom]=useState([])
     useEffect(()=>{

        fetch('/comments')
        .then((r)=>setCom)
     },[])
    return<>
        {allCom.map((comment)=>{
            return<>
            <p>{comment}</p>
            </>
        })}
        </>
}
export default Comments