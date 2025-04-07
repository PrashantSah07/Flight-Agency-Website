import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import LoadingEffect from '../components/LoadingEffect'
import ThemeContext from '../context/ThemeContext';
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { FaPlaneDeparture } from 'react-icons/fa';
import { MdAirplanemodeInactive } from 'react-icons/md'

import { motion } from "framer-motion"

const FlightList = () => {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [query, setQuery] = useState(null);
    const { darkTheme } = useContext(ThemeContext);
    const [rotate, setRotate] = useState(false);

    const api = '2a54435b1ac843cfbadedd53e888c197';
    const api2 = '44656ee5d6f49f4c8ae0b0fd9ea50c11';
    const api3 = '11caac55ba77f7ed3c9c1b7bbc030e5f';

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === 'departure') setDeparture(value);
        if (name === 'arrival') setArrival(value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (departure === arrival) {
            alert("Departure and Arrival can't be same");
            setDeparture('');
            setArrival('');
            return;
        }
        setQuery(`https://api.aviationstack.com/v1/flights?access_key=605df357563383a8afba15253f537f27&dep_iata=${departure}&arr_iata=${arrival}`)

    }

    function flip() {
        setDeparture(arrival);
        setArrival(departure);
        setRotate(!rotate)
    }


    const { data, loading, error } = useFetch(query);

    return (
        <div className='my-10 max-w-[1550px] mx-auto flex flex-col gap-10 sm:px-10 px-5'>
            <motion.form onSubmit={handleSubmit} initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                <div className='max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_170px] grid-cols-1 justify-center rounded-[10px] lg:py-6 lg:gap-5 gap-3  lg:px-10 sm:py-3 sm:px-5 px-3 py-3 bg-[#4e3ef7]'>
                    <div className='w-full md:grid md:grid-cols-[1fr_30px_1fr] flex flex-wrap justify-center items-center gap-1'>
                        <input className={`w-full sm:px-5 sm:py-3 px-3 py-2 focus:outline-none border-1  border-[#0000005d] rounded-[10px] font-medium ${darkTheme ? 'bg-[#111827] text-white' : 'bg-white text-black'} `} type="text" name='departure' placeholder='Enter Departure IATA (e.g. DEL)' value={departure} onChange={handleChange} required />
                        <p className={`flex justify-center items-center rounded-2xl p-0.5 bg-white duration-200 ${rotate ? 'rotate-180' : '-rotate-0'}`} onClick={flip}><HiOutlineSwitchHorizontal color='blue' size={25} /></p>
                        <input className={`w-full sm:px-5 sm:py-3 px-3 py-2 focus:outline-none border-1  border-[#0000005d] rounded-[10px] font-medium ${darkTheme ? 'bg-[#111827] text-white' : 'bg-white text-black'} `} type="text" name='arrival' placeholder='Enter Arrival IATA (e.g. BOM)' value={arrival} onChange={handleChange} required />
                    </div>
                    <button className='bg-[#fdc700] border-1 border-[#fdc700] sm:py-3 py-2 text-black font-bold h-full rounded-[10px]'>Get Results</button>
                </div>
            </motion.form>

            {query ? (
                <div className='max-w-[1200px] mx-auto w-full flex flex-col gap-10'>
                    <h1 className='text-3xl font-bold text-[#4b71ff] flex gap-3 mx-auto'>{departure} <FaLongArrowAltRight /> {arrival}</h1>
                    {loading && <LoadingEffect loopCount={20} />}
                    {error && <h1>{error}</h1>}
                    {data?.data?.length === 0 && (
                        <div className='flex justify-center items-center flex-col gap-3 mt-5'>
                            <img className='w-[15%]' src="https://app-search-result-s6web-prod-skyplus6e.goindigo.in/6c43bd4b7f5a67a13e15.svg" alt="no flight found" width="100px" height="100px"></img>
                            <p className='text-green-500 text-[25px] font-bold' >No Flights <span className={`${darkTheme ? 'text-white' : 'text-black'}`}>Found</span> </p>
                        </div>
                    )}
                    <div className='flex flex-col gap-20'>
                        {data?.data?.some(e => e.flight_status === 'scheduled') && (
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-3xl font-semibold text-[#00c951]'>Scheduled</h1>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                    {data.data
                                        .filter(e => e.flight_status === 'scheduled')
                                        .map((e, i) => (
                                            <div className={`border-1 shadow-lg border-[#00000017] px-5 py-4 rounded-2xl flex flex-col gap-2.5 ${darkTheme ? 'bg-[#1f2937] text-white' : 'bg-white'} `} key={i}>
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex items-center justify-center gap-2'>
                                                        {[
                                                            { name: 'indigo', img: 'https://images.ixigo.com/img/common-resources/airline-new/6E.png' },
                                                            { name: 'air india', img: 'https://images.ixigo.com/img/common-resources/airline-new/AI.png' },
                                                            { name: 'air india express', img: 'https://images.ixigo.com/img/common-resources/airline-new/IX.png' },
                                                            { name: 'spicejet', img: 'https://images.ixigo.com/img/common-resources/airline-new/SG.png' },
                                                            { name: 'american airlines', img: 'https://images.ixigo.com/img/common-resources/airline-new/AA.png' },
                                                            { name: 'emirates', img: 'https://images.ixigo.com/img/common-resources/airline-new/EK.png' }
                                                        ].map(({ name, img }, i) =>
                                                            (e.flight.codeshared?.airline_name?.toLowerCase() === name ||
                                                                e.airline.name?.toLowerCase() === name) && (
                                                                <img className='w-[50px]' key={i} src={img} alt={name} />
                                                            ))}
                                                        <p className='font-semibold'>{e.flight.codeshared?.airline_name || e.airline.name}</p>
                                                    </div>
                                                    <p className='text-[15px]'>
                                                        {new Date(e.departure.scheduled).toLocaleDateString('en-GB', {
                                                            timeZone: 'Asia/Kolkata',
                                                        }).replaceAll('/', '-')}
                                                    </p>

                                                </div>
                                                <div className='flex justify-between items-center gap-8'>
                                                    <p className='text font-bold text-[17px]'>{e.departure.iata}</p>
                                                    <div className='flex justify-center items-center gap-5'>
                                                        <span className=''> <FaLongArrowAltRight /> </span>
                                                        <p className='text-center'>{Math.floor((new Date(e.arrival.scheduled) - new Date(e.departure.scheduled)) / (1000 * 60 * 60))} hr {Math.floor(((new Date(e.arrival.scheduled) - new Date(e.departure.scheduled)) % (1000 * 60 * 60)) / (1000 * 60))} min
                                                        </p>
                                                        <span className=''> <FaLongArrowAltRight /> </span>
                                                    </div>
                                                    <p className='text font-bold text-[17px]'>{e.arrival.iata}</p>
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <p className='text-[14px]'>{e.departure.airport}</p>
                                                    <p className='text-[14px]'>{e.arrival.airport}</p>
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <p className='text-[14px]'>{new Date(e.departure.scheduled).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', })}</p>

                                                    <p className='text-[14px]'>{new Date(e.arrival.scheduled).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', })}</p>

                                                </div>
                                                <p className='text-[#00c951] font-semibold'>{e.flight_status}</p>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                        {data?.data?.some(e => e.flight_status === 'active') && (
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-3xl font-semibold text-[#fdc700]'>Active</h1>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                    {data.data
                                        .filter(e => e.flight_status === 'active')
                                        .map((e, i) => (
                                            <div className={`border-1 shadow-lg border-[#00000017] px-5 py-4 rounded-2xl flex flex-col gap-2.5 ${darkTheme ? 'bg-[#1f2937] text-white' : 'bg-white'}`} key={i}>
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex items-center justify-center gap-2'>
                                                        {[
                                                            { name: 'indigo', img: 'https://images.ixigo.com/img/common-resources/airline-new/6E.png' },
                                                            { name: 'air india', img: 'https://images.ixigo.com/img/common-resources/airline-new/AI.png' },
                                                            { name: 'air india express', img: 'https://images.ixigo.com/img/common-resources/airline-new/IX.png' },
                                                            { name: 'spicejet', img: 'https://images.ixigo.com/img/common-resources/airline-new/SG.png' },
                                                            { name: 'american airlines', img: 'https://images.ixigo.com/img/common-resources/airline-new/AA.png' },
                                                            { name: 'emirates', img: 'https://images.ixigo.com/img/common-resources/airline-new/EK.png' }
                                                        ].map(({ name, img }, i) =>
                                                            (e.flight.codeshared?.airline_name?.toLowerCase() === name ||
                                                                e.airline.name?.toLowerCase() === name) && (
                                                                <img className='w-[50px]' key={i} src={img} alt={name} />
                                                            ))}
                                                        <p className='font-semibold'>{e.flight.codeshared?.airline_name || e.airline.name}</p>
                                                    </div>
                                                    <p className='text-[15px]'>{new Date(e.departure.scheduled).toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata', }).replaceAll('/', '-')}</p>
                                                </div>
                                                <div className='flex justify-between items-center gap-8'>
                                                    <p className='text font-bold text-[17px]'>{e.departure.iata}</p>
                                                    <div className='flex justify-center items-center gap-5'>
                                                        <span><FaLongArrowAltRight /></span>
                                                        <p className='text-center'>{Math.floor((new Date(e.arrival.scheduled) - new Date(e.departure.scheduled)) / (1000 * 60 * 60))} hr {Math.floor(((new Date(e.arrival.scheduled) - new Date(e.departure.scheduled)) % (1000 * 60 * 60)) / (1000 * 60))} min
                                                        </p>
                                                        <span><FaLongArrowAltRight /></span>
                                                    </div>
                                                    <p className='text font-bold text-[17px]'>{e.arrival.iata}</p>
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <p className='text-[14px]'>{e.departure.airport}</p>
                                                    <p className='text-[14px]'>{e.arrival.airport}</p>
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <p className='text-[14px]'>{new Date(e.departure.scheduled).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', })}</p>

                                                    <p className='text-[14px]'>{new Date(e.arrival.scheduled).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', })}</p>

                                                </div>
                                                <p className='text-[#fdc700] font-semibold'>{e.flight_status}</p>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                        {data?.data?.some(e => e.flight_status === 'landed') && (
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-3xl font-semibold text-[#fb2c36]'>Landed</h1>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                    {data.data
                                        .filter(e => e.flight_status === 'landed')
                                        .map((e, i) => (
                                            <div className={`border-1 shadow-lg border-[#00000017] px-5 py-4 rounded-2xl flex flex-col gap-2.5 ${darkTheme ? 'bg-[#1f2937] text-white' : 'bg-white'}`} key={i}>
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex items-center justify-center gap-2'>
                                                        {[
                                                            { name: 'indigo', img: 'https://images.ixigo.com/img/common-resources/airline-new/6E.png' },
                                                            { name: 'air india', img: 'https://images.ixigo.com/img/common-resources/airline-new/AI.png' },
                                                            { name: 'air india express', img: 'https://images.ixigo.com/img/common-resources/airline-new/IX.png' },
                                                            { name: 'spicejet', img: 'https://images.ixigo.com/img/common-resources/airline-new/SG.png' },
                                                            { name: 'american airlines', img: 'https://images.ixigo.com/img/common-resources/airline-new/AA.png' },
                                                            { name: 'emirates', img: 'https://images.ixigo.com/img/common-resources/airline-new/EK.png' }
                                                        ].map(({ name, img }, i) =>
                                                            (e.flight.codeshared?.airline_name?.toLowerCase() === name ||
                                                                e.airline.name?.toLowerCase() === name) && (
                                                                <img className='w-[50px]' key={i} src={img} alt={name} />
                                                            ))}
                                                        <p className='font-semibold'>{e.flight.codeshared?.airline_name || e.airline.name}</p>
                                                    </div>
                                                    <p className='text-[15px]'>{new Date(e.departure.actual || e.departure.scheduled).toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata', }).replaceAll('/', '-')}</p>
                                                </div>
                                                <div className='flex justify-between items-center gap-8'>
                                                    <p className='text font-bold text-[17px]'>{e.departure.iata}</p>
                                                    <div className='flex justify-center items-center gap-5'>
                                                        <span><FaLongArrowAltRight /></span>
                                                        <p className='text-center'>{Math.floor((new Date(e.arrival.actual || e.arrival.scheduled) - new Date(e.departure.actual || e.departure.scheduled)) / (1000 * 60 * 60))} hr {Math.floor(((new Date(e.arrival.actual || e.arrival.scheduled) - new Date(e.departure.actual || e.departure.scheduled)) % (1000 * 60 * 60)) / (1000 * 60))} min
                                                        </p>
                                                        <span><FaLongArrowAltRight /></span>
                                                    </div>
                                                    <p className='text font-bold text-[17px]'>{e.arrival.iata}</p>
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <p className='text-[14px]'>{e.departure.airport}</p>
                                                    <p className='text-[14px]'>{e.arrival.airport}</p>
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <p className='text-[14px]'>{new Date(e.departure.actual || e.departure.scheduled).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', })}</p>

                                                    <p className='text-[14px]'>{new Date(e.arrival.actual || e.arrival.scheduled).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', })}</p>

                                                </div>
                                                <p className='text-[14px]'>
                                                    Delay: {Math.floor(
                                                        (new Date(e.departure.actual || e.departure.scheduled) -
                                                            new Date(e.departure.scheduled)) /
                                                        (1000 * 60)
                                                    )} min
                                                </p>

                                                <p className='text-[#fb2c36] font-semibold'>{e.flight_status}</p>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )
                : (<div className="flex flex-col items-center justify-center lg:mt-20 mt-10 text-center space-y-4">
                    <FaPlaneDeparture className="text-blue-500 text-6xl animate-bounce" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-blue-500 animate-pulse drop-shadow-lg">
                        Search a flight to track live updates!
                    </h1>
                </div>
                )}
        </div>
    )
}

export default FlightList
