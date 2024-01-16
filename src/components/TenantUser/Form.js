import { useState } from "react";
import config from "../config";

const TenantForm = ()=>{

    let [name, setName] = useState('')
    let [mobile, setMobile] = useState('')
    let [password, setPassword] = useState('')
    let [address, setAddress] = useState('')
    let [company, setCompany] = useState('')
    let [email, setEmail] = useState('')
    let [role, setRole] = useState('')
    

    



    const handleForm = async (e)=>{
        e.preventDefault();

        // form submittion
        try{
            let adminid = localStorage.getItem('uid')
            if(!adminid){
                window.location.href = "/login"
            }
            if(!role){
                alert('Select Role')
            } else{
            let dataToSend = {
                name : name ,
                mobile: mobile ,
                email: email ,
                password: password ,
                address: address ,
                company: company ,
                role: role,
                adminid : adminid
            }

            const response = await fetch(`${config.server.hostname}:${config.server.port}${config.apiKeys.addTenantUser}`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', 
                },
                body: JSON.stringify(dataToSend),
            });

            const data = await response.json();
            
            // if (response.status === 300 && data.hasOwnProperty('accessDenied')){
            //     alert(data['accessDenied'])
            // }
            // if (response.status === 300 && data.hasOwnProperty('emailExist')){
            //     alert(data['emailExist'])
            // }
            if (response.status === 500){
                alert('Something Went Wrong From Backend')
            }
            
            
        }
        }catch{
            alert('Some Error From Front End')
        }
    }

    return (
        <div className="container">
          <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <form style={{ maxWidth: '600px', width: '100%' }} onSubmit={handleForm} method="POST">
                <h2>Add Tenant User</h2>
              <div className="mb-3 row">
                <label htmlFor="name" className="col-sm-3 col-form-label">Name:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="name" name="name" onChange={(e)=>setName(e.target.value)} />
                </div>
              </div>
    
              <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
                <div className="col-sm-9">
                  <input type="email" className="form-control" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
                </div>
              </div>
    
              <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
                <div className="col-sm-9">
                  <input type="password" className="form-control" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
                </div>
              </div>
    
              <div className="mb-3 row">
                <label htmlFor="address" className="col-sm-3 col-form-label">Address:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="address" name="address" onChange={(e)=>setAddress(e.target.value)} />
                </div>
              </div>
    
              <div className="mb-3 row">
                <label htmlFor="company" className="col-sm-3 col-form-label">Company:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="company" name="company" onChange={(e)=>setCompany(e.target.value)} />
                </div>
              </div>
    
              <div className="mb-3 row">
                <label htmlFor="mobile" className="col-sm-3 col-form-label">Mobile:</label>
                <div className="col-sm-9">
                  <input type="tel" className="form-control" id="mobile" name="mobile" onChange={(e)=>setMobile(e.target.value)} />
                </div>
              </div>
    
              <div className="mb-3 row">
                <label htmlFor="role" className="col-sm-3 col-form-label">Role:</label>
                <div className="col-sm-9">
                  <select className="form-select" id="role" name="role" onChange={(e)=>setRole(e.target.value)} >
                    <option value="">-------</option>
                    <option value="user">User</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
    
              <div className="mb-3 row">
                <div className="col-sm-9 offset-sm-3">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
}

export default TenantForm