import {NavLink} from 'react-router-dom'
function NavBar({setUser}){
    function handleLogout(e){
        e.preventDefault()
        fetch('/logout',{
            method:'DELETE'
        }).then((r)=>{
            if (r.ok){setUser(null)}
        }) }
    return (
        <>
        <button onClick={(e)=>{setUser(null)}}>LogOut</button>
        
        </>
    )
}
export default NavBar