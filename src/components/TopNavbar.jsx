import React, { useContext, useEffect, useState } from 'react'
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import ThemeContext from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className={`flex justify-between items-center py-3 sm:px-10 px-5  text-[15px] sticky top-0 w-full z-10 transition duration-300 ${darkTheme ? (scroll ? "bg-[#020617]" : "bg-[#020526]") : (scroll ? "bg-white" : "bg-[#f0f4f3]")}  `}>
                <SiConsul size={18} />
                <div className='list-none hidden lg:flex items-center gap-1 '>
                    <button className='flex items-center gap-1 py-1 px-3 rounded-4xl hover:bg-blue-800 hover:text-white duration-200'>
                        <li><BsPhoneVibrate /></li>
                        <li>Support</li>
                    </button>
                    <button className='flex items-center gap-1 py-1 px-3 rounded-4xl hover:bg-blue-800 hover:text-white duration-200'>
                        <li><GrLanguage /></li>
                        <li>Language</li>
                    </button>
                </div>
                <div className='flex items-center gap-2'>
                    {darkTheme ? <button className='px-2 py-2 rounded-4xl bg-[#e9e5e5]' onClick={function () {
                        setDarkTheme(!darkTheme);
                    }}><MdLightMode size={20} color='black' /></button> : <button className='px-2 py-2 rounded-4xl bg-[#e9e5e5]' onClick={function () {
                        setDarkTheme(!darkTheme);
                    }}><MdDarkMode size={20} /></button>}
                    <NavLink to='/login' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}>  <button className='py-1 px-5 rounded-4xl hover:bg-blue-800 hover:text-white duration-200 font-semibold'>Sign In</button></NavLink>
                    <NavLink to='/signup' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}>  <button className='py-1 px-5 rounded-4xl hover:bg-blue-800 hover:text-white duration-200 font-semibold'>Sign Up</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
