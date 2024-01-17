
// import { Line } from 'rc-progress';
import config from '../config';
import { useState, useEffect } from 'react';
import edit from './edit.png'

const EditDataComponent = ({data})=>{

    const [max, setMax] = useState('')
    const [sensorValue, setSensorValue] = useState('')
    const [todaySensorValue, setTodaySensorValue] = useState('')
    const [name, setName] = useState(data.name)

    useEffect(()=>{
        // max value -----------------
    const getMaxValue = async (device_id)=>{
        try{
            const response = await fetch(`${config.server.hostname}:${config.server.port}${config.apiKeys.getMax}`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'device_id': device_id
                }
            });
    
            const data1 = await response.json();
            if(response.status===200){
                setMax(data1.max_value)
            } else if(response.status===404){
                // alert(data1['error'])
            } else{
                // alert(data1['error'])
            }
            
    
        } catch{
            alert('FrontEnd Error')
        }
    }
    getMaxValue(data.device_id)
    // ---------------------------
    // get sensor value -----------
    const getSensorValue = async (device_id)=>{
        try{
            const response = await fetch(`${config.server.hostname}:${config.server.port}${config.apiKeys.getSensorValue}`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'device_id': device_id
                }
            });
    
            const data2 = await response.json();
            
            if(response.status===200){
                setSensorValue(data2['device_id'])
            } else if(response.status===404){
                // alert(data2['error'])
            } else{
                // alert(data2['error'])
            }
    
        } catch{
            alert('FrontEnd Error')
        }
    }
    getSensorValue(data.device_id)
    // -------------
    // Today Sensor Value -----------
    const todaySensorValue = async (device_id)=>{
        try{
            const response = await fetch(`${config.server.hostname}:${config.server.port}${config.apiKeys.getCurrentDaySensorValue}`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'device_id': device_id
                }
            });
    
            const data3 = await response.json();
            // console.log(data3)
            if(response.status===200){
                setTodaySensorValue(data3['currentDayValue'])
            } else if(response.status===404){
                setTodaySensorValue(0)
            } else{
                setTodaySensorValue(0)
            }
    
        } catch{
            alert('FrontEnd Error')
        }
    }
    todaySensorValue(data.device_id)
    },[])

    const changeButton = ()=>{
            const putData = async ()=>{
                try{
                    const response = await fetch(`${config.server.hostname}:${config.server.port}${config.apiKeys.getMax}`, {
                        method: 'PUT',
                        headers: {
                        'Content-Type': 'application/json',
                        'device_id': data.device_id,
                        'max_value': max
                        }
                    });
            
                    if (response.status===200){
                        // alert('Max value changed!')
                    } else{
                        // alert('Something Went Wrong')
                    }
                } catch{
                    alert('FrontEnd Error')
                }
            }
            putData()
        
    }

    const updateName = ()=>{
        const putData = async ()=>{
            try{
                const response = await fetch(`${config.server.hostname}:${config.server.port}${config.apiKeys.deviceName}`, {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    'device_id': data.device_id,
                    'new_name': name
                    }
                });

                console.log(data.device_id)
                console.log(name)

        
                if (response.status===200){
                    alert('Name changed!')
                } else{
                    alert('Something Went Wrong')
                }
            } catch{
                alert('FrontEnd Error')
            }
        }
        putData()
    
}

    return(
        <div style={{width:320}}>
        <div className='p-2 px-1  shadow rounded m-2'>
        <div className="input-group mb-3 px-3" >
                    <input type="text" className="form-control" 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}/>
                    <button className="input-group-text px-2" onClick={updateName}><img src={edit} alt="Chg"/></button>
                </div>
            <div className='px-3'>
                <div className="input-group mb-3" >
                    <span className="input-group-text px-2">Max Value</span>
                    <input type="text" className="form-control" 
                    value={max} 
                    onChange={(e)=>setMax(e.target.value)}/>
                    <button className="input-group-text px-2" onClick={changeButton}><img src={edit} alt="Chg"/></button>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" style={{width:'50%'}}>Today's Value</span>
                    <span className="input-group-text" style={{width:'50%'}}>{todaySensorValue}</span>
                </div>
                <div className="input-group mb-3" >
                    <span className="input-group-text" style={{width:'50%'}}>Count</span>
                    <span className="input-group-text" style={{width:'50%'}}>{sensorValue.count}</span>
                </div>
                <div className="input-group">
                    <span className="input-group-text" style={{width:'30%'}}>Dev_Id</span>
                    <span className="input-group-text" style={{width:'70%'}}>{data.device_id}</span>
                </div>
            </div>
            
            
        </div>
        </div>
    )
}

export default EditDataComponent;