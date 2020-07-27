import React,{useState} from 'react';
import CountUp from 'react-countup';
import {motion} from 'framer-motion';
const Cards = ({data}) => {
    
    return (
        (data.confirmed) ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 items-center justify-center ">
           <motion.div 
                initial={{y:'-100vh'}}
                animate={{y:0,transition:{duration:0.5}}}

                className=" bg-white px-5 py-3 border border-gray-300 shadow-sm relative rounded overflow-hidden ">
               <h4 className="mb-2 uppercase tracking-wide font-medium text-2xl text-gray-800">Infected</h4>
               <p className="text-xl text-gray-600">
                   <CountUp start={0} end={data.confirmed.value} duration={2.5} separator=','/>
                </p>
                <p className="text-md text-gray-500">
                    {new Date(data.lastUpdate).toDateString()}
                </p>
                <div className="h-1 w-full bg-indigo-500 absolute left-0 bottom-0"></div>
           </motion.div> 

           <motion.div 
                initial={{y:'-100vh'}}
                animate={{y:0,transition:{delay:0.5,duration:0.5}}}
                className="  bg-white px-5 py-3 border border-gray-300 shadow-sm relative rounded overflow-hidden">
               
               <h4 className="mb-2 uppercase tracking-wide font-medium text-2xl text-gray-800">recovered</h4>
               <p className="font-light text-xl text-gray-600">
                   <CountUp start={0} end={data.recovered.value} duration={2.5} separator=','/>
                </p>
                <p className="font-hairline text-md text-gray-500">
                    {new Date(data.lastUpdate).toDateString()}
                </p>
                <div className="h-1 w-full bg-green-500 absolute left-0 bottom-0"></div>
           </motion.div> 

           <motion.div 
                initial={{y:'-100vh'}}
                animate={{y:0,transition:{delay:1.0,duration:0.5}}}
                className="  bg-white px-5 py-3 border border-gray-300 shadow-sm relative rounded overflow-hidden">
               <h4 className="mb-2 uppercase tracking-wide font-medium text-2xl text-gray-800">deaths</h4>
               <p className="text-xl text-gray-600">
                   <CountUp start={0} end={data.deaths.value} duration={2.5} separator=','/>
                </p>
                <p className="font-hairline text-md text-gray-500">
                    {new Date(data.lastUpdate).toDateString()}
                </p>
                <div className="h-1 w-full bg-red-500 absolute left-0 bottom-0"></div>
           </motion.div> 



        </div>):(
            <div className="flex items-center justify-center">
                <p className="uppercase tracking-wide font-medium text-xl text-gray-900">Loading ... </p>
            </div>
        )
           
    )
}


export default Cards;