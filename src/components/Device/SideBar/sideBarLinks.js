import './sidebar.css'
import { Link } from 'react-router-dom'


// Responsive SideBar Links
export function SideBarLinksLg({text, link}){
    return(
        <Link className='d-block p-1 ps-3 fs-4 border-bottom' to={link}>{text}</Link>
    )
}

export function SideBarLinksSm({img, text, link}){
    return(
        <Link className='d-block py-1 fs-4 border-bottom text-center' to={link}>
            <img className="img-icon" title={text} src={img} alt=""/>
        </Link>
    )
}