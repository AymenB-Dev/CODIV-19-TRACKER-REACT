import React,{useState,useEffect} from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import './assets/css/app.css'
import axios from 'axios';
import {API_URL} from './API/api';
const App = () => {

  const [data,setData] = useState({});
  const [currentCountry,setCurrentCountry]=useState('GLOBAL');


  useEffect(()=>{
    axios.get(API_URL).then(res=>{
        const {confirmed,recovered,deaths,lastUpdate} = res.data;
        setData({confirmed,recovered,deaths,lastUpdate});
    }).catch((e)=>{})
  },[])


  
  
  const handleChange=(e)=>{
    setCurrentCountry(e.target.value);
    const url= (e.target.value!=="GLOBAL") ? `${API_URL}/countries/${e.target.value}` : API_URL ;
    axios.get(url).then(res=>{
        const {confirmed,recovered,deaths,lastUpdate} = res.data;
        setData({confirmed,recovered,deaths,lastUpdate});
    })
  }
  return (
    <div className="App bg-gray-100 sm:px-10 sm:py-5 md:px-20 md:py-10 lg:px-40 lg:py-10">
      <Cards data={data}/>
      <CountryPicker handleChange={handleChange}/>
      <Chart data={data} country={currentCountry}/>
    </div>
  );
}

export default App;
