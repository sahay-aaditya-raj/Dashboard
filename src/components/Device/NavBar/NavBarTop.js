import currentUser from '../SideBar/icons/userimg.png'
import { Link } from 'react-router-dom'

// NavBar Info, HomePage Routes
export function NavBar(){
    let role = localStorage.getItem('role')
    return(
        <div className='bg-dark m-0 p-0' style={{display:'grid',gridTemplateColumns:'1fr 6fr',height:'64px',position:'fixed', top:0, left:0,width:'100vw', zIndex:1}}>
            <div className="text-center p-2 d-flex d-lg-none justify-content-center align-items-center">
                <Link to="/login"><img src={currentUser} style={{filter: 'invert(100%)', width:28, height:28}} alt=""/></Link>
                
            </div>
            <h3 className='d-lg-flex align-items-center d-none text-light p-2 ps-3 m-0'>
                <Link to="/login">Welcome</Link>
            </h3>
            
            <div className='d-flex justify-content-end text-light text-end pe-3 p-2 fs-lg-5 align-items-center'>
                <Link title="Click me to Logout" to="/logout">{role}
                </Link>
            </div>
        </div>
        
    )
}
