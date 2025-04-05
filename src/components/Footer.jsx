import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import ThemeContext from '../context/ThemeContext';
import {motion} from "framer-motion"

const Footer = () => {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <>
            <div className={`${darkTheme ? "bg-[#010423]" : "bg-[#f0f4f3]"} max-w-[1550px] mx-auto flex  flex-col gap-20 py-10`}>
                <motion.div className='flex flex-col gap-8 justify-center items-center mx-8 lg:mx-0' initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <h1 className='text-[32px] font-medium text-center'>Subscribe Newsletters & get Latest News</h1>
                    <form className='max-w-[800px] w-full flex sm:flex-row flex-col items-center justify-center relative sm:rounded-4xl rounded-3xl p-2 sm:gap-0 gap-2'>
                        <input type="email" className={`w-[100%] px-5 py-3 sm:pr-[130px] text-black rounded-4xl bg-[#ffffff] sm:text-[18px] text-[16px] focus:outline-none`} placeholder='Enter your email address' required />
                        <button className='bg-[#193cb8] text-white px-5 sm:py-2 py-3 rounded-4xl sm:absolute right-3.5 sm:w-fit w-full'>Subscribe</button>
                    </form>
                </motion.div>

                <motion.div className='lg:flex lg:items-center lg:justify-between max-w-[1200px] mx-auto w-full md:px-10 xl:px-0 grid sm:grid-cols-2 grid-cols-1 gap-10 lg:gap-0 px-8' initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <div className='flex flex-col gap-3.5'>
                        <img src={logo} className={`w-[50px] ${darkTheme ? 'invert' : ''}`} alt="logo" />
                        <p className='max-w-[300px] text-[#737272]'>Your mind should be stronger than your feelings, fly!</p>
                        <div className='flex gap-1.5'>
                            <span className='border-1 border-[#0000004c] rounded-4xl px-2 py-4 bg-white cursor-pointer'><TiSocialFacebook color='black' /></span>
                            <span className='border-1 border-[#0000004c] rounded-4xl px-2 py-4 bg-white cursor-pointer'><FaTwitter color='black' /></span>
                            <span className='border-1 border-[#0000004c] rounded-4xl px-2 py-4 bg-white cursor-pointer'><FaYoutube color='black' /></span>
                            <span className='border-1 border-[#0000004c] rounded-4xl px-2 py-4 bg-white cursor-pointer'><FaPinterestP color='black' /></span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3.5'>
                        <p className='font-medium'>Information</p>
                        <ul className='flex flex-col gap-1 text-[#737272]'>
                            <li>Home</li>
                            <li>Explore</li>
                            <li>Flight</li>
                            <li>Travel</li>
                            <li>Check-in</li>
                            <li>Manage your booking</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3.5'>
                        <p className='font-medium'>Quick Guide</p>
                        <ul className='flex flex-col gap-1 text-[#737272]'>
                            <li>FAQ</li>
                            <li>How to</li>
                            <li>Features</li>
                            <li>Baggage</li>
                            <li>Route Map</li>
                            <li>Our Communities</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3.5'>
                        <p className='font-medium'>Information</p>
                        <ul className='flex flex-col gap-1 text-[#737272]'>
                            <li>Chauffuer</li>
                            <li>Our Partners</li>
                            <li>Destination</li>
                            <li>Careers</li>
                            <li>Transportation</li>
                            <li>Programme Rules</li>
                        </ul>
                    </div>
                </motion.div>

                <p className='text-center text-[#737272] px-10'>Courtesy Design | Developed by <a target='_blank' href="https://github.com/PrashantSah07"><span className={`cursor-pointer ${darkTheme ? 'text-white' : 'text-[#061e75]'}`}>Prashant Sah</span></a></p>

            </div>

        </>
    )
}

export default Footer
