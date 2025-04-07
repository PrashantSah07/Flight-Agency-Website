import React, { useContext, useState } from 'react'
import TopNavbar from '../components/TopNavbar'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'
import { motion } from "framer-motion"

const Login = () => {
    const { darkTheme } = useContext(ThemeContext)
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        firstName: '',
        emailNumber: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setErrors((prevErrors) => ({ [name]: value && '' }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const error = {};
        if (!event.target.firstName.value) {
            error.firstName = 'First name must be required!'
        }
        if (!event.target.emailNumber.value) {
            error.emailNumber = "Email or number is required!";
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(event.target.emailNumber.value) &&
            !/^\d{10}$/.test(event.target.emailNumber.value)
        ) {
            error.emailNumber = "Please enter a valid email or 10-digit mobile number.";
        }

        setErrors(error);

        if (Object.keys(error).length > 0) {
            return
        }

        setLoading(true);
        setTimeout(() => {
            const formData = {
                firstName: event.target.firstName.value,
                emailNumber: event.target.emailNumber.value,
            };
            alert('submitted')
            console.log(formData);
            event.target.reset();
            setLoading(false);
        }, 3000)

    }

    return (
        <>
            <TopNavbar />
            <Navbar />
            <div className='center w-full flex justify-center items-center mb-10 mt-5'>
                <motion.div className={`form sm:w-[480px] w-[100%] mx-7 shadow-2xl sm:p-10 p-5 flex flex-col gap-8 rounded-3xl ${darkTheme ? 'bg-[#1f2937] text-white' : 'bg-white'} `} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <h1 className='text-3xl font-semibold'>Login</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-7'>
                        <div>
                            <input type="text" name='firstName' placeholder='First Name' className={`focus:outline-none border-0 w-full rounded-[7px] border-b-1 px-3 py-1  ${darkTheme ? 'text-white bg-[#1f2937]' : 'text-black bg-white'} `} onChange={handleChange} />
                            {errors.firstName && <p className='text-red-600 text-[13px] pl-3 pt-0.5'>{errors.firstName}</p>}
                        </div>
                        <div>
                            <input type="text" name="emailNumber" placeholder='Email or Number' className={`focus:outline-none border-0 w-full rounded-[7px] border-b-1 px-3 py-1  ${darkTheme ? 'text-white bg-[#1f2937]' : 'text-black bg-white'} `} onChange={handleChange} />
                            {errors.emailNumber && <p className='text-red-600 text-[13px] pl-3 pt-0.5'>{errors.emailNumber}</p>}
                        </div>
                        <button disabled={loading} className='w-full p-2 cursor-pointer bg-[#193cb8] text-white rounded-md hover:bg-blue-700 transition' type='submit' value='login'>{loading ? 'Please Wait' : 'Login'}</button>
                        <div className='mt-4'>Don't have an account?
                            <Link to='/signup'><span className='text-blue-400 cursor-pointer font-semibold ml-1'> Sign Up</span></Link>
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
    )
}

export default Login
