import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TopTravelersOfThisMonth = ({ text, array }) => {
    const [imagesdata, setImagesData] = useState([]);

    useEffect(() => {
        setImagesData(array);
    }, [array]);

    return (
        <motion.div
            className="max-w-[1550px] xl:mx-auto md:mx-15 mx-7 flex flex-col sm:gap-20 gap-15 justify-center items-center my-20"
            initial={{ y: -90, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h1 className="text-3xl font-medium text-center">{text}</h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-center xl:gap-15 gap-8">
                {imagesdata.map((e, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${e.place})` }}
                        className="bg-cover bg-center xl:w-[240px] lg:w-[200px] xl:h-[350px] lg:h-[300px] w-[250px] h-[350px] rounded-full flex flex-col justify-end items-center overflow-hidden group"
                    >
                        <motion.p
                            className="w-[60px] border-4 border-[#d6d5d5] rounded-full overflow-hidden h-[60px] flex justify-center items-center cursor-pointer"
                            animate={{ y: ["100%", "150%"] }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1, ease: "easeInOut" }}
                        >
                            <img className="w-[60px] h-[60px] object-cover object-center rounded-full" src={e.traveler} alt="" />
                        </motion.p>

                        <motion.div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center bg-white w-[100%] py-[30px] gap-2 rounded-l-3xl rounded-r-3xl" animate={{ y: ["0%", "30%"] }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1, ease: "easeInOut" }}>
                            <p className="text-black">{e.username}</p>
                            <p className="text-black">{e.socialMediaHandle}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default TopTravelersOfThisMonth;
