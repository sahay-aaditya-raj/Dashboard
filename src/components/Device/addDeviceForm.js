import { useState } from "react";
import config from "../config";

const DeviceForm = ()=>{
    // device_id, lat, longi, name, uid
    let [deviceId, setDeviceId] = useState('')
    let [lat, setLat] = useState('')
    let [longi, setLongi] = useState('')
    let [name, setName] = useState('')


    const handleForm = async (e)=>{
        e.preventDefault();

        // form submittion
        try{
            let adminid = localStorage.getItem('uid')
            if(!adminid){
                window.location.href = "/login"
            } else{
            let dataToSend = {
                device_id : deviceId,
                lat: lat,
                longi: longi,
                name: name,
                uid: adminid
            }

            const response = await fetch(`${config.server.hostname}:${config.server.port}${config.apiKeys.addDevice}`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', 
                },
                body: JSON.stringify(dataToSend),
            });

            const data = await response.json();
            
            if (response.status === 300 && data.hasOwnProperty('invalidUserId')){
                alert(data['invalidUserId'])
            }
            if (response.status === 200 && data.hasOwnProperty('result')){
                alert(data['result'])
            }
            if (response.status === 300 && data.hasOwnProperty('DeviceExist')){
              alert(data['DeviceExist'])
            }
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
                <h2>Add Device</h2>
              <div className="mb-3 row">
                <label htmlFor="name" className="col-sm-3 col-form-label">Name:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="name" name="name" onChange={(e)=>setName(e.target.value)} />
                </div>
              </div>
    
              <div className="mb-3 row">
                <label htmlFor="devId" className="col-sm-3 col-form-label">Device Id:</label>
                <div className="col-sm-9">
                  <input type="email" className="form-control" id="devId" name="devId" onChange={(e)=>setDeviceId(e.target.value)} />
                </div>
              </div>
    
              <div className="mb-3 row">
                <label htmlFor="latitude" className="col-sm-3 col-form-label">Latitude:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="latitude" name="latitude" onChange={(e)=>setLat(e.target.value)} />
                </div>
              </div>
    
              <div className="mb-3 row">
                <label htmlFor="lon" className="col-sm-3 col-form-label">Longitude:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="lon" name="lon" onChange={(e)=>setLongi(e.target.value)} />
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

export default DeviceForm