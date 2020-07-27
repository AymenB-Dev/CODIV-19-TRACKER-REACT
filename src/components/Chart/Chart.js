import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {API_URL} from '../../API/api';
import {Line,Bar} from 'react-chartjs-2';
import { motion } from 'framer-motion';

const Chart = ({data,country}) => {

    const [dailyData,setDailyData]=useState({});

    useEffect(()=>{
        axios.get(`${API_URL}/daily`).then(res=>{
            const tmpData = res.data.map(elem =>{
                return {
                    confirmed:elem.confirmed.total,
                    deaths:elem.deaths.total,
                    reportDate:elem.reportDate
                }
            })
            setDailyData(tmpData);
        }).catch(e=>{})
    },[])

    const lineChart = (
        (dailyData[0]) ? (<Line
            data={{
                labels:dailyData.map(({reportDate})=> reportDate),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor:'#667EEA',
                    fill:'true'
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor:'#F56565',
                    fill:'true'
                }]
            }}
            options={{
                title:{display:true,text:'Global State'}
            }}
        
        ></Line>):null
    )

    const barChart = (
        (data.confirmed)? (
            <Bar
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[
                        {
                            label:'People',
                            backgroundColor:['#667EEA','#48BB78','#F56565'],
                            data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                        }
                    ]
                }}

                options={{
                    legend:{display:false},
                    title:{display:'true', text:`current state`}
                }}
            >

            </Bar>
        ):null
    )

    return (
        <motion.div 
            initial={{scale:0}}
            animate={{scale:1,transition:{delay:2.5,duration:0.5}}}
            className="mt-10 flex items-center justify-center">
            {(country!=="GLOBAL") ? barChart : lineChart}
        </motion.div>
    )
}


export default Chart;