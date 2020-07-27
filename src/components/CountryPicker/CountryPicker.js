import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {API_URL} from '../../API/api';
import {motion} from 'framer-motion';

const CountryPicker = ({handleChange}) => {
    const[countryList,setCountryList]=useState();

    useEffect(()=>{
        axios.get(`${API_URL}/countries`).then(res=>{
            const tmpCountries = res.data.countries.map(country => {return {name:country.name,code:country.iso3}}) ;
            setCountryList(tmpCountries);
        }).catch(e=>{})
    },[])

    

    return (
        (countryList) ? (
            <motion.div 
                initial={{x:'-100vw'}}
                animate={{x:0,transition:{delay:1.5,duration:0.5}}}
                className="mt-10 flex items-center justify-center">
                <div className=" relative w-1/2">
                    <select onChange={handleChange} className=" appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="GLOBAL" className="font-semibold">Global</option>
                        {countryList.map(country=><option id={country.id} value={country.code}  key={country.name}>{country.name}</option>)}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </motion.div>):null
       
    )
}


export default CountryPicker
;