import React, { useContext } from 'react'
import flightImg from '../assets/flight.png'
import flightBgVideo from '../assets/flightBgVideo.mp4'
import { motion } from "framer-motion";
import ThemeContext from '../context/ThemeContext';

const Home = ({ text }) => {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`max-w-[1550px] mx-auto flex flex-col gap-18 items-center my-5 md:px-[50px] px-[25px]`}>
                <motion.h1 className='sm:text-[40px] text-[36px] max-w-120 text-center leading-12 font-medium' initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    {text}
                </motion.h1>
                <motion.div className={`max-h-[250px] max-w-[1000px] relative flex justify-center `} initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <video src={flightBgVideo} autoPlay loop muted className={`max-w-[100%] rounded-[200px] object-cover ${darkTheme ? "border-2 border-white" : ""}`}></video>
                    <img src={flightImg} className='md:max-w-[700px] sm:max-w-[600px] max-w-[110%] absolute md:-bottom-10 sm:-bottom-2 bottom-5' alt="flight" />
                </motion.div>
            </div>
        </>
    )
}

export default Home
