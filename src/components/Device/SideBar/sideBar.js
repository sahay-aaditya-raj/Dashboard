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
            <SideBarLinksLg text='Dashboard' link='/get-devices'/>
            <SideBarLinksLg text='Add Users' link='/add-tenant-user'/>
            {/* <SideBarLinksLg text='User' link='#'/> */}
            <SideBarLinksLg text='Add Device' link='/add-device'/>
            <SideBarLinksLg text='Edit Devices' link='/edit-devices'/>
            {/* <SideBarLinksLg text='Requirements' link='#'/> */}
          </div>
        </div>
    )
}


export function SideBarSm(){
    return(
        <div className="d-block p-0 d-lg-none bg-dark text-light d-flex flex-column">
            <div>
            <SideBarLinksSm img={dashboardImg} text="Dashboard" link='/get-devices'/>
            <SideBarLinksSm img={users} text='Add Users' link='/add-tenant-user'/>
            {/* <SideBarLinksSm img={user} text='User' link='#'/> */}
            <SideBarLinksSm img={parts} text='Add Device' link='/add-device'/>
            <SideBarLinksSm img={entrys} text='Edit Devices' link='/edit-devices'/>
            {/* <SideBarLinksSm img={requirements} text='Requiremets' link='#'/> */}
            </div>
        </div>
    )
}
