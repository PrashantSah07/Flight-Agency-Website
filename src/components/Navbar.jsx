import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext';
import logo from '../assets/logo.png'
import { CgMenuGridO } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [scroll, setScroll] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const { darkTheme } = useContext(ThemeContext)

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div style={{ backgroundColor: darkTheme ? "#020617" : "white" }} className={`flex items-center justify-between px-10 max-w-[1550px] mx-auto text-[15px] sticky top-14.5 z-10 w-full bg-[#ffffff] transition duration-300 ${darkTheme ? (scroll ? " border-[#ffffff23] border-b-1" : "") : (scroll ? "shadow-md" : "")}`}>
                <img src={logo} className={`max-w-[80px] ${darkTheme ? 'invert' : ''}`} alt="" />
                <div className='hidden lg:flex items-center justify-center gap-30'>
                    <div className='list-none lg:flex items-center justify-center gap-2 font-medium'>
                        <NavLink to='/' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}><li className={`px-5 py-1 rounded-4xl ${darkTheme ? 'hover:bg-gray-900' : 'hover:bg-[#f0f4f3]'}`}>Home</li></NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}><li className={`px-5 py-1 rounded-4xl ${darkTheme ? 'hover:bg-gray-900' : 'hover:bg-[#f0f4f3]'}`}>About</li></NavLink>
                        <NavLink to='/offers' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}><li className={`px-5 py-1 rounded-4xl ${darkTheme ? 'hover:bg-gray-900' : 'hover:bg-[#f0f4f3]'}`}>Offers</li></NavLink>
                        <NavLink to='/seats' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}><li className={`px-5 py-1 rounded-4xl ${darkTheme ? 'hover:bg-gray-900' : 'hover:bg-[#f0f4f3]'}`}>Seats</li></NavLink>
                        <NavLink to='/destinations' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}><li className={`px-5 py-1 rounded-4xl ${darkTheme ? 'hover:bg-gray-900' : 'hover:bg-[#f0f4f3]'}`}>Destinations</li></NavLink>
                    </div>
                    <NavLink to='/contact'><button className='lg:flex bg-blue-800 px-5 py-1.5 rounded-4xl text-white'>
                        Contact
                    </button></NavLink>
                </div>
                <button className='flex lg:hidden' onClick={function () {
                    setShowNavbar(!showNavbar);
                }}><CgMenuGridO size={25} /></button>
            </div>

            <div className={`flex justify-center fixed top-0 z-10 h-[100vh] w-[100vw] ${showNavbar ? 'translate-x-[0%]' : 'translate-x-[100%]'} transition-transform duration-300`} onClick={function () {
                setShowNavbar(false);
            }}>
                <div className={`list-none py-7 px-10 lg:hidden flex flex-col justify-center items-center gap-5 w-[80%] font-medium ${darkTheme ? 'bg-[#010423]' : 'bg-[#f0f4f3]'} rounded-3xl shadow-2xl mt-40 h-fit`} onClick={function (e) {
                    e.stopPropagation();
                }}>
                    <NavLink to='/' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}><li className={`px-10 py-1 rounded-4xl ${darkTheme ? 'hover:bg-gray-900' : 'hover:bg-[#f0f4f3]'}`}>Home</li></NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}><li className={`px-10 py-1 rounded-4xl ${darkTheme ? 'hover:bg-gray-900' : 'hover:bg-[#f0f4f3]'}`}>About</li></NavLink>
                    <NavLink to='/offers' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}><li className={`px-10 py-1 rounded-4xl ${darkTheme ? 'hover:bg-gray-900' : 'hover:bg-[#f0f4f3]'}`}>Offers</li></NavLink>
                    <NavLink to='/seats' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}><li className={`px-10 py-1 rounded-4xl ${darkTheme ? 'hover:bg-gray-900' : 'hover:bg-[#f0f4f3]'}`}>Seats</li></NavLink>
                    <NavLink to='/destinations' className={({ isActive }) => isActive ? darkTheme ? 'bg-gray-800 rounded-4xl' : 'bg-gray-200 rounded-4xl' : ''}><li className={`px-10 py-1 rounded-4xl ${darkTheme ? 'hover:bg-gray-900' : 'hover:bg-[#f0f4f3]'}`}>Destinations</li></NavLink>
                    <button className='lg:flex bg-blue-800 px-10 py-1.5 rounded-4xl text-white'>
                        Contact
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
