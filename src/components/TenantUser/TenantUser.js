import {Navigate} from 'react-router-dom'
import TenantForm from './Form'

const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null && token !== undefined;
  };
  

const TenantUser = ()=>{
    if (isAuthenticated()) {
        // Render the protected content
        return <TenantForm/>;
      } else {
        // Redirect to the login page or show an access denied message
        return <Navigate to='/login'/>
      }
}


export default TenantUser