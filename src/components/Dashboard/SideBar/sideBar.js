import {SideBarLinksLg, SideBarLinksSm} from './sideBarLinks'

// icons
import user from './icons/user.png'
import dashboardImg from './icons/dashboard.png'
import users from './icons/users.png'
import entrys from './icons/entrys.png'
import parts from './icons/parts.png'
import requirements from './icons/requirements.png'



// Responsive SideBar Layout
export function SideBarLg(){
    return(
        <div className="d-none p-0 d-lg-block bg-dark text-light d-flex flex-column">
          <div>
            <SideBarLinksLg text='Dashboard' link='#'/>
            <SideBarLinksLg text='Groups' link='#'/>
            <SideBarLinksLg text='User' link='#'/>
            <SideBarLinksLg text='Entrys' link='#'/>
            <SideBarLinksLg text='Parts' link='#'/>
            <SideBarLinksLg text='Requirements' link='#'/>
          </div>
        </div>
    )
}


export function SideBarSm(){
    return(
        <div className="d-block p-0 d-lg-none bg-dark text-light d-flex flex-column">
            <div>
            <SideBarLinksSm img={dashboardImg} text="Dashboard" link='#'/>
            <SideBarLinksSm img={users} text='Groups' link='#'/>
            <SideBarLinksSm img={user} text='User' link='#'/>
            <SideBarLinksSm img={entrys} text='Entrys' link='#'/>
            <SideBarLinksSm img={parts} text='Parts' link='#'/>
            <SideBarLinksSm img={requirements} text='Requiremets' link='#'/>
            </div>
        </div>
    )
}
