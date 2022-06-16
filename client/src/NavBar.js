import {NavLink} from 'react-router-dom'
import { Container } from 'react-bootstrap'
function NavBar({setUser}){
    function handleLogout(e){
        e.preventDefault()
        fetch('/logout',{
            method:'DELETE'
        }).then((r)=>{
            if (r.ok){setUser([])}
        }) }
    return (
        <><Container>
        <button onClick={handleLogout}>LogOut</button>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/search'>Search</NavLink>
        <NavLink to='/usercard'>My Cards</NavLink>
        <NavLink to='/userComments'>Comments</NavLink>
        </Container></>
    )
}
export default NavBar