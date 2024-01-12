import GaugeComponent from 'react-gauge-component'
import { Line } from 'rc-progress';



// Data Component is the graph, the bar and the title of the Information
const DataComponent = ({name, value})=>{
    return(
        <div style={{width:300}}>
        <div className='p-2 shadow rounded m-2'>
            <div className='text-center fs-5 text-light rounded' style={{backgroundColor:'rgb(29, 26, 40)'}}>
                {name}<hr/>
            </div>
            <GaugeComponent
            value={33}
            type="semicircle"
            arc={{
                cornerRadius:5,
                padding:0.005,
                subArcs:[{
                    limit:33.33,
                    color:'rgb(248,49,47)',
                    showTick:false
                },
                {
                    limit:66.66,
                    color:'rgb(252,213,63)',
                    showTick:false
                },
                {
                    limit:100,
                    color:'rgb(0,210,106)',
                    showTick:false
                }]
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
            <div style={{position:'relative'}}>
                <Line 
                percent={50}
                strokeWidth={8}
                trailWidth={8}
                />
                <div className="fs-5" style={{position:'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -47%)'}}>
                <b>{value}</b>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default DataComponent;