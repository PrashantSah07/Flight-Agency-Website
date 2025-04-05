import React from 'react'
import { motion } from "framer-motion";
import windowView1 from '../assets/windowView1.avif'
import windowView2 from '../assets/windowView2.avif'
import windowView3 from '../assets/windowView3.avif'

const TravelSupport = () => {
    return (
        <>
            <div className='max-w-[1550px] xl:mx-auto md:mx-15 mx-7 flex flex-col gap-20 my-35'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='font-light sm:tracking-[15px] tracking-[12px] text-[17px] text-[#575757] text-center'>TRAVEL SUPPORT</p>
                    <p className='text-[32px] font-medium text-center'>Plan your travel with confidence</p>
                    <p className='text-[17px] text-[#575757] tracking-[1px] text-center'>Find help with booking and travel plans. see what to expect along the journey!</p>
                </div>

                <div className='w-full max-w-[1200px] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-15 lg:gap-0'>
                    <div className='flex flex-col sm:gap-5 gap-8'>
                        <motion.div className='flex flex-col gap-2' initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0 }} viewport={{ once: true }}>
                            <p className='border-2 w-fit py-1 px-2 bg-blue-800 text-white font-medium rounded-4xl'>01</p>
                            <p className='text-[22px] font-medium'>Travel requirements for Dubai</p>
                            <p>Find help with booking and travel plans, see what to expect
                                along the journey to your favourite destinations!</p>
                        </motion.div>
                        <motion.div className='flex flex-col gap-2' initial={{ y: -80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}>
                            <p className='border-2 w-fit py-1 px-2 bg-[#fc724f] text-white font-medium rounded-4xl'>02</p>
                            <p className='text-[22px] font-medium'>Chauffeur services at our arrival</p>
                            <p>Find help with booking and travel plans, see what to expect
                                along the journey to your favourite destinations!</p>
                        </motion.div>
                        <motion.div className='flex flex-col gap-2' initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }}>
                            <p className='border-2 w-fit py-1 px-2 bg-[#f89b68] text-white font-medium rounded-4xl'>03</p>
                            <p className='text-[22px] font-medium'>Multi-risk travel insurance</p>
                            <p>Find help with booking and travel plans, see what to expect
                                along the journey to your favourite destinations!</p>
                        </motion.div>
                    </div>
                    <motion.div className='relative flex justify-center items-center' initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1.7, delay: 0.5 }} viewport={{ once: true }}>
                        <img src={windowView1} className='lg:max-w-[220px] sm:max-w-[40%] max-w-[45%] rounded-full lg:absolute top-20 lg:right-50 relative -right-20 z-3' alt="windowView1" />
                        <img src={windowView2} className='lg:max-w-[220px] sm:max-w-[45%] max-w-[50%] rounded-full lg:absolute top-0 lg:right-20 relative z-2' alt="windowView2" />
                        <img src={windowView3} className='lg:max-w-[170px] sm:max-w-[30%] max-w-[35%] rounded-full lg:absolute lg:top-40 lg:right-0 relative top-30 right-15 z-1' alt="windowView3" />
                    </motion.div>

                </div>
            </div>

        </>
    )
}

export default TravelSupport
