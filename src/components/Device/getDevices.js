import { Navigate } from 'react-router-dom';
import Devices from './Devices';


const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null && token !== undefined;
  };
  

const DevicesList = ()=>{
    if (!isAuthenticated()) {
        // Redirect to login
        return <Navigate to='/login'/>
    }
    else{
        return <Devices/>;
    }
      
}

export default DevicesList;