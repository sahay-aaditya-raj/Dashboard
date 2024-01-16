import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginPage.css"
import user from "./images/user.png"
import eyeOn from "./images/eyeOn.png"
import eyeOff from "./images/eyeOff.png"
import config from "../config"





const LoginPage = ()=>{
    
    let [username, setUsername] = useState('');// username
    let [password, setPassword] = useState('');// password 
    let [showPassword, setShowPassword] = useState(false); // eye button for password

    // handles view password
    const eyeClick = (e)=>{
        if (showPassword){
            setShowPassword(false)
        }
        else{
            setShowPassword(true)
        }
    }
    

    // handles form filling
    const handleForm = async (e)=>{
        e.preventDefault();
        console.log(username,password)
        
        try {
            const dataToSend = {
              email: username,
              password: password
            };
            
            // Make a POST request to your Express backend
            const response = await fetch(`${config.server.hostname}:${config.server.port}${config.apiKeys.login}`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', 
                },
                body: JSON.stringify(dataToSend),
            });
      
            // Handle the response from the backend
            if (response.ok) {

                const data = await response.json();
                const auth_response = await fetch(`${config.server.hostname}:${config.server.port}${config.apiKeys.authenticate}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `${data.token}`
                    }                
                    })
                    if (auth_response.ok) {
                        const auth_data = await auth_response.json();
                        if (auth_data.message){
                            localStorage.setItem('token', data.token)
                            localStorage.setItem('uid', data.uid)
                            localStorage.setItem('role', data.type)
                            window.location.href = "/dashboard"
                        }
                      } else {
                        console.error(`HTTP error! Status: ${response.status}`);
                      }
            
            } else {
                console.error('Error:', response.statusText);
            }
            
          } catch (error) {
            // Handle errors
            console.error('Error:', error.message);
            
          }

        }
    
        
    return(
        <div className="loginDiv">
            <form onSubmit={handleForm} className="p-3 border border-1 rounded d-flex flex-column" style={{width:320}}>
                <div>
                    <h4 className="pb-0" style={{color:'#505050'}}>Welcome!<br/>Please Login.</h4>
                    <hr/>
                </div>
                <div className="input-group my-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Email" 
                        aria-label="Username" 
                        aria-describedby="basic-addon1" 
                        onChange={(e)=>setUsername(e.target.value)} 
                    />
                    <span 
                        className="input-group-text" 
                        id="basic-addon1"
                    >
                        <img src={user} alt="@"/>
                    </span>
                </div>
                <div className="input-group mb-3">
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        className="form-control" 
                        placeholder="Password" 
                        aria-label="Password" 
                        aria-describedby="basic-addon1" 
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <span 
                        className="input-group-text" 
                        id="basic-addon1"
                    >
                        <img src={showPassword ? eyeOff : eyeOn} alt="P" onClick={eyeClick}/>
                    </span>
                </div>
                <div className="d-flex justify-content-between mt-5">
                    <input type="submit" className="btn btn-primary" value="Login"/>
                    <Link className="btn btn-primary" to="/">New User?</Link>
                </div>
            </form>
        </div>
    )
    
}


export default LoginPage