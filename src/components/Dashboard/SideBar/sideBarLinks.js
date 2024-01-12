import './sidebar.css'



// Responsive SideBar Links
export function SideBarLinksLg({text, link}){
    return(
        <div className='d-block p-1 ps-3 fs-4 border-bottom' href={link}>{text}</div>
    )
}

export function SideBarLinksSm({img, text, link}){
    return(
        <div className='d-block py-1 fs-4 border-bottom text-center' href={link}>
            <img className="img-icon" title={text} src={img} alt=""/>
        </div>
    )
}