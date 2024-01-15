import GaugeComponent from 'react-gauge-component'
// import { Line } from 'rc-progress';
import config from '../config';
import { useState, useEffect } from 'react';

// Data Component is the graph, the bar and the title of the Information
const DataComponent = ({data})=>{

    const [max, setMax] = useState('')
    const [sensorValue, setSensorValue] = useState('')
    const [todaySensorValue, setTodaySensorValue] = useState('')

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
                alert(data1['error'])
            } else{
                alert(data1['error'])
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
                alert(data2['error'])
            } else{
                alert(data2['error'])
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


    return(
        <div style={{width:300}}>
        <div className='p-2 shadow rounded m-2'>
            <div className='text-center fs-5 text-light rounded' style={{backgroundColor:'rgb(29, 26, 40)'}}>
                {data.name}<hr/>
            </div>
            <GaugeComponent
            className='d-flex'
            value={(sensorValue.count/max)*100}
            type="semicircle"
            arc={{
                nbSubArcs: 3,
                colorArray: ['#5BE12C', '#F5CD19', '#EA4228'],
                width: 0.2,
                padding: 0.0001
              }}
            labels={{
                valueLabel:{
                    formatTextValue:(e)=> `${e} %`,
                    style:{fontSize:35,fill:'rgb(47 40 45)',textShadow:'none'}
            },
                tickLabels: {
                type: 'outer',
                ticks: [{value:50}],
                defaultTickValueConfig:{
                    formatTextValue: (value) => `${value}`,
                },
                }
            }}
            pointer={{
                type:'arrow',
                width:15,
                }}
            
            />
            <div>
                Max: {max}<br/>
                Count: {sensorValue.count}<br/>
                Today's Value: {todaySensorValue}
            </div>
            {/* <div style={{position:'relative'}}>
                <Line 
                percent={60}
                strokeWidth={8}
                trailWidth={8}
                />
                <div className="fs-5" style={{position:'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -47%)'}}>
                <b>500/{max}</b>
                </div>
            </div> */}
            
        </div>
        </div>
    )
}

export default DataComponent;