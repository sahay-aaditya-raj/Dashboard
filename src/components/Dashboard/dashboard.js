import './dashBoard.css';

// use effect
import { useEffect, useState } from 'react';

// axios
import axios from 'axios';

// data component
import DataComponent from './dataComponent';

// SideBar
import {SideBarLg, SideBarSm} from './SideBar/sideBar';

// Navbar Utils
import { NavBarUtilsLg, NavBarUtilsMd, NavBarUtilsXs } from './NavBar/navBarUtils';

// NavBar
//import { NavBar } from './NavBar/NavBarTop';



// Dashboard Pages
export function DashBoard(){

  const [data, setData] = useState([{"device_id":"","r":0,"y":0,"b":0,"frequency":0,"ph":0,"temperature":0,"weight":0,"dtime":""}]);
  const [count, setCount] = useState(0);
  setTimeout(() => {
    let temp = count
    temp += 1
    setCount(temp)
  },5000)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://172.105.33.238:3500/api/v1/dashboard');
        //console.log(result);
        if (result.status === 200) {
          // console.log('Dashboard - Successfully got data from Server');
          // console.log(result.data);
          // Set the fetched data to the state variable
          setData(result.data);
          // console.log(data)
        }
      } catch (error) {
        // console.log('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function defined within useEffect
  }, [count]);


return(
    <div>
      <div className='body-content'>
        <div className='bg-dark' style={{width:'max', height:'100vh'}}>
          <SideBarSm/>
          <SideBarLg/>
        </div>
        <div>
          <div className="pb-5" style={{overflowY: 'scroll', height:'calc(100vh - 50px)',}}>
          <NavBarUtilsLg/>
          <NavBarUtilsMd/>
          <NavBarUtilsXs/>
          <div className='d-flex mt-2 flex-wrap justify-content-evenly'>
            {/* {Loop For Data} */}
            {
            (() => {
              const jsxElements = [];
              for (const key in data[0]) {
                if (data[0].hasOwnProperty(key)) {
                  jsxElements.push(<DataComponent name={key} value={data[0][key]} />);
                }
              }
              return jsxElements;
            })()}
          </div>
          </div>
        </div>
      </div>
    </div>
)
}