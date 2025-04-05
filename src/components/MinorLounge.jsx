import React from 'react'
import { motion } from "framer-motion"
import flightCrew from '../assets/flightCrew.avif'
import flightSeats from '../assets/flightSeats.avif'

const MinorLounge = () => {
    return (
        <>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-20 lg:gap-0 items-center justify-between max-w-[1200px] xl:mx-auto md:mx-15 mx-7 py-25 '>
                <motion.div className='flex flex-col gap-10' initial={{ y: -90, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <h1 className='text-3xl font-medium'>Unaccompanied Minor Lounge</h1>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                        <motion.div className='flex flex-col' initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                            <p className='text-[17px] font-medium'>Help through the airpot</p>
                            <p className='text-[#949292]'>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
                        </motion.div>
                        <motion.div className='flex flex-col' initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                            <p className='text-[17px] font-medium'>Priority Boarding</p>
                            <p className='text-[#949292]'>You can also call ojrhnes from your phone and book a flight ticket to one of your favorite destinations</p>
                        </motion.div>
                        <motion.div className='flex flex-col' initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                            <p className='text-[17px] font-medium'>Care on the flight</p>
                            <p className='text-[#949292]'>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
                        </motion.div>
                        <motion.div className='flex flex-col' initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                            <p className='text-[17px] font-medium'>Chauffeur-drive service</p>
                            <p className='text-[#949292]'>You can also call airlines from your phone ond book a flight ticket to one of your favorite destinations.</p>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div className='flex relative justify-center items-center' initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <img src={flightCrew} className='lg:max-w-[220px] sm:max-w-[52%] max-w-[55%] sm:h-[600px] h-[400px] lg:h-[320px] object-cover rounded-full relative sm:left-20 left-16' alt="flightCrew" />
                    <img src={flightSeats} className='lg:max-w-[250px] sm:max-w-[37%] max-w-[40%] lg:h-[250px] rounded-full object-cover relative top-20 lg:-left-0 -left-7' alt="flightSeats" />
                </motion.div>
            </div>

        </>
    )
}

export default MinorLounge
