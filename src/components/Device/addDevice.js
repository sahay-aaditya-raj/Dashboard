import DeviceForm from "./addDeviceForm";
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null && token !== undefined;
  };
  

const AddDevice = ()=>{
    if (!isAuthenticated()) {
        // Redirect to Dashboard
        return <Navigate to='/login'/>
      } else {
        // Redirect to the login page
        
        return <DeviceForm/>;
      }
}


export default AddDevice
