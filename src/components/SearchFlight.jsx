import React, { useContext, useState } from 'react'
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import ThemeContext from '../context/ThemeContext';

const SearchFlight = () => {
    const [selectedClass, setSelectedClass] = useState("Economy");
    const classes = ["Economy", "Business Class", "First Class"];
    const { darkTheme } = useContext(ThemeContext)

    function handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <>
            <motion.div className='shadow-sm border-[#00000027] max-w-[1200px] xl:mx-auto md:mx-15 mx-7 my-20 flex flex-col gap-7 justify-center items-center sm:p-5 p-4  ' initial={{ y: 90, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1.8 }} viewport={{ once: true }}>
                <motion.div className={`bg-[#f0f4f3] ${darkTheme && 'text-black'} sm:max-w-[600px] text-[15px] px-1 py-1 sm:rounded-4xl rounded-3xl gap-1 flex sm:flex-row flex-col max-w-[100%] sm:w-fit w-full`} initial={{ y: 90, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    {classes.map((item) => (
                        <button key={item} className={`px-8 py-2 rounded-4xl duration-200 ${selectedClass === item ? "bg-[#193cb8] text-white" : "bg-transparent"}`} onClick={() => setSelectedClass(item)}>{item}
                        </button>
                    ))}
                </motion.div>
                <motion.div className='flex list-none justify-between w-[100%]' initial={{ y: 90, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1.8 }} viewport={{ once: true }}>
                    <form className='lg:flex xl:justify-between justify-center gap-7 items-center w-full lg:flex-wrap grid grid-cols-1' onSubmit={handleSubmit}>
                        <div className='flex items-center gap-3 justify-center relative lg:left-0 left-4'>
                            <span className='bg-[#ebe5e5] py-2 px-1 rounded-t-full rounded-b-full'><CiLocationOn size={25} color='black' /></span>
                            <p>
                                <li className='font-semibold' >Location</li>
                                <input type="text" name='location' className={`text-[13px] py-1 focus:outline-none focus:border-transparent ${darkTheme ? "placeholder-white" : "placeholder-gray-500"}`} placeholder='Where do you want to' required />
                            </p>
                        </div>
                        <div className='flex items-center gap-3 justify-center relative lg:left-0 left-4'>
                            <span className='bg-[#ebe5e5] py-2 px-1 rounded-t-full rounded-b-full'><PiUserCircleThin size={25} color='black' /></span>
                            <p>
                                <li className='font-semibold' >Travelers</li>
                                <input type="text" className={`text-[13px] py-1 focus:outline-none focus:border-transparent ${darkTheme ? "placeholder-white" : "placeholder-gray-500"}`} placeholder='Add guests' required />
                            </p>
                        </div>
                        <div className='flex items-center gap-3 justify-center'>
                            <span className='bg-[#ebe5e5] py-3 px-2 rounded-t-full rounded-b-full'><SlCalender size={18} color='black' /></span>
                            <p>
                                <li className='font-semibold' >Check In</li>
                                <input type="date" className='text-[13px] py-1 focus:outline-none focus:border-transparent' placeholder='Add date' required />
                            </p>
                        </div>
                        <div className='flex items-center gap-3 justify-center'>
                            <span className='bg-[#ebe5e5] py-3 px-2 rounded-t-full rounded-b-full'><SlCalender size={18} color='black' /></span>
                            <p>
                                <li className='font-semibold' >Check Out</li>
                                <input type="date" className='text-[13px] py-1 focus:outline-none focus:border-transparent' placeholder='Add date' required />
                            </p>
                        </div>
                        <button className='bg-blue-800 px-8 py-2.5 rounded-4xl text-white'>Search Flight</button>
                    </form>
                </motion.div>
            </motion.div>
        </>
    )
}

export default SearchFlight
