import { useState } from 'react';
import { useEffect } from 'react';
import config from '../config';
// data component
import EditDataComponent from './editDevComp';

// SideBar
import {SideBarLg, SideBarSm} from './SideBar/sideBar';
import { Navigate } from 'react-router-dom';
// Navbar Utils
// import { NavBarUtilsLg, NavBarUtilsMd, NavBarUtilsXs } from './NavBar/navBarUtils';





const Devices = ()=>{

    const [devices, setDevices] = useState([]);
    const uid = localStorage.getItem("uid");
    
    // data
    useEffect(()=>{
        const getData = async ()=>{
            try{
                const response = await fetch(`${config.server.hostname}:${config.server.port}${config.apiKeys.getDevices}`, {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'user_id': uid
                    }
                });
        
                const data = await response.json();
        
                if (response.status===401){
                    alert(data['error'])
                }
                if (response.status===500){
                    alert(data['error'])
                }
                if (response.status===200){
                    setDevices(data)
                    }
            } catch{
                alert('FrontEnd Error')
            }
        
        }
        getData()
    },[uid])
    console.log(devices)


    return(
        <div>
            <div className='body-content'>
                <div className='bg-dark' style={{width:'max', height:'100vh'}}>
                <SideBarSm/>
                <SideBarLg/>
                </div>
                <div>
                <div className="pb-5" style={{overflowY: 'scroll', height:'calc(100vh - 50px)',}}>
                <div className='d-flex mt-2 flex-wrap justify-content-lg-start justify-content-center'>
                {devices.length<=0 ? (<h1>Loading...</h1>):(
                    <>
                    {devices.map((val, id)=>{
                        return <EditDataComponent key={id} data={val}/>
                    })}
                    </>
                    )}
                </div>
                </div>
                </div>
            </div>
            </div>
    )
}


const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null && token !== undefined;
  };
const EditDevices = ()=>{
    if (!isAuthenticated()) {
        // Redirect to Dashboard
        return <Navigate to='/login'/>
      } else {
        // Redirect to the login page
        
        return <Devices/>;
      }
}
export default EditDevices