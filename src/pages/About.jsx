import React from 'react'
import Navbar from '../components/Navbar'
import TopNavbar from '../components/TopNavbar'
import { motion } from "framer-motion"

const About = () => {
    return (
        <div>
            <TopNavbar />
            <Navbar />
            <motion.h1 className='text-center mt-40 text-3xl font-semibold' initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>About Us</motion.h1>
        </div>
    )
}

export default About
