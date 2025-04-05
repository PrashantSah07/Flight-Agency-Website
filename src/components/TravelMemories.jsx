import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { SlCalender } from "react-icons/sl";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
import ThemeContext from '../context/ThemeContext';

const TravelMemories = () => {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <>
            <div className={`max-w-[1550px] mx-auto xl:px-0 md:px-15 px-7 flex flex-col gap-10  py-20 ${darkTheme ? "bg-[#010423]" : "bg-[#f0f4f3]"}`}>
                <div className='flex md:flex-row flex-col gap-5 md:gap-0 items-center justify-between max-w-[900px] mx-auto w-full'>
                    <motion.h1 className='font-medium text-[28px] max-w-[500px] leading-[40px] md:text-left text-center' initial={{ y: -90, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Travel to make memories all
                        around the world</motion.h1>
                    <motion.button className='bg-[#193cb8] text-white py-2 px-8 rounded-4xl' initial={{ x: 90, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>View All</motion.button>
                </div>
                <motion.div className='flex flex-col md:flex-row items-center max-w-[900px] w-full mx-auto xl:justify-between justify-center gap-10' initial={{ y: 90, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <div className='bg-[#ffffff] max-w-[260px] flex flex-col justify-center items-center gap-5 py-17 px-3 rounded-t-full rounded-b-full'>
                        <p className='bg-[#193cb8]  w-fit py-3 px-2 rounded-4xl'><SlCalender color='white' size={20} /></p>
                        <p className='text-center text-[20px] font-medium text-black'>Book & Relax</p>
                        <p className='text-center text-[16px] text-black'>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>
                    <div className='bg-[#ffffff] max-w-[260px] flex flex-col justify-center items-center gap-5 py-17 px-3 rounded-t-full rounded-b-full'>
                        <p className='bg-[#fc724f]  w-fit py-3 px-2 rounded-4xl'><BsShieldCheck color='white' size={20} /></p>
                        <p className='text-center text-[20px] font-medium text-black'>Smart Checklist</p>
                        <p className='text-center text-[16px] text-black'>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>
                    <div className='bg-[#ffffff] max-w-[260px] flex flex-col justify-center items-center gap-5 py-17 px-3 rounded-t-full rounded-b-full'>
                        <p className='bg-[#f89b68]  w-fit py-3 px-2 rounded-4xl'><BsBookmarkCheck color='white' size={20} /></p>
                        <p className='text-center text-[20px] font-medium text-black'>Save More</p>
                        <p className='text-center text-[16px] text-black'>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default TravelMemories
