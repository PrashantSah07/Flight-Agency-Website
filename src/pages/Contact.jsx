import Navbar from '../components/Navbar';
import TopNavbar from '../components/TopNavbar'
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <>
            <TopNavbar />
            <Navbar />
            <motion.h1 className='text-center mt-40 text-3xl font-semibold' initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Contact Us</motion.h1>
        </>
    );
}
