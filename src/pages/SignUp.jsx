import React, { useState } from 'react'
import TopNavbar from '../components/TopNavbar'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setErrors((prevErrors) => ({[name]: value && '' }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const error = {};
        if (!event.target.firstName.value) {
            error.firstName = 'First name must be required!'
        }
        if (!event.target.lastName.value) {
            error.lastName = 'Last name must be required!'
        }
        if (!event.target.email.value) {
            error.email = 'Email must be required!'
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(event.target.email.value)) {
            error.email = 'Please fill the valid email address!'
        }
        if (!event.target.number.value) {
            error.number = 'Number must be required!'
        } else if (!/^\d{10}$/.test(event.target.number.value)) {
            error.number = 'Please fill the correct format!'
        }

        setErrors(error);

        if (Object.keys(error).length > 0) {
            return
        }
        setLoading(true);
        setTimeout(() => {
            const formData = {
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                email: event.target.email.value,
                number: event.target.number.value,
            };
            alert('submitted')
            console.log(formData)
            event.target.reset();
            setLoading(false);
        }, 3000);

    }

    return (
        <>
            <TopNavbar />
            <Navbar />
            <div className='center bg-[#eeecec00] flex justify-center items-center mb-10 mt-5'>
                <div className='form bg-[#ffffff] shadow-2xl sm:w-[400px] w-[100%] mx-7 sm:p-10 p-5 flex flex-col gap-8 rounded-3xl'>
                    <h1 className='text-3xl font-semibold text-black'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-7'>
                        <div>
                            <input type="text" name='firstName' placeholder='First Name' className='focus:outline-none border-0 w-full rounded-[7px] border-b-1 px-3 py-1 border-[#0000005f] text-black' onChange={handleChange} />
                            {errors.firstName && <p className='text-red-600 text-[13px] pl-3 pt-0.5'>{errors.firstName}</p>}
                        </div>
                        <div>
                            <input type="text" name='lastName' placeholder='Last Name' className='focus:outline-none border-0 w-full rounded-[7px] border-b-1 px-3 py-1 border-[#0000005f] text-black' onChange={handleChange} />
                            {errors.lastName && <p className='text-red-600 text-[13px] pl-3 pt-0.5'>{errors.lastName}</p>}
                        </div>
                        <div>
                            <input type="text" name="email" placeholder='Email' className='focus:outline-none border-0 w-full rounded-[7px] border-b-1 px-3 py-1 border-[#0000005f] text-black' onChange={handleChange} />
                            {errors.email && <p className='text-red-600 text-[13px] pl-3 pt-0.5'>{errors.email}</p>}
                        </div>
                        <div>
                            <input type="text" name="number" placeholder='Number' className='focus:outline-none border-0 w-full rounded-[7px] border-b-1 px-3 py-1 border-[#0000005f] text-black' onChange={handleChange} />
                            {errors.number && <p className='text-red-600 text-[13px] pl-3 pt-0.5'>{errors.number}</p>}
                        </div>
                        <div>
                            <button disabled={loading} className='w-full p-2 cursor-pointer bg-[#193cb8] text-white rounded-md hover:bg-blue-700 transition' type='submit' value='signup'>{loading ? 'Please Wait' : 'Sign Up'}</button>
                        </div>
                        <div className='mt-4 text-black'> Already have an account?
                            <Link to='/login'><span className='text-blue-400 cursor-pointer font-semibold ml-1'> Login</span></Link>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SignUp
