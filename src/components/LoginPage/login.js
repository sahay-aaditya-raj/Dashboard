import { Navigate } from 'react-router-dom';
import LoginPage from './loginPage';

const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null && token !== undefined;
  };
  

const LoginUser = ()=>{
    if (isAuthenticated()) {
        // Redirect to Dashboard
        return <Navigate to='/get-devices'/>
      } else {
        // Redirect to the login page
        
        return <LoginPage/>;
      }
}


export default LoginUser