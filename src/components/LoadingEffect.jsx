import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const LoadingEffect = ({ loopCount }) => {
    const { darkTheme } = useContext(ThemeContext)
    const loopArray = Array.from({ length: loopCount });

    return (
        <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 grid-cols-1 xl:gap-5 gap-2 w-full overflow-hidden'>
            {loopArray.map((_, index) => (
                <div key={index} className='shadow-sm flex justify-between items-center sm:p-5 p-2 animate-pulse w-full'>
                    <div className='flex gap-2 justify-center items-center'>
                        <div className={`${darkTheme ? 'bg-[#1e2939]' : 'bg-[#ebeced]'} xl:h-14 md:h-12 h-14 xl:w-12 md:w-10 w-12 rounded-[5px]`}></div>
                        <div className='flex flex-col gap-2'>
                            <div className={`${darkTheme ? 'bg-[#1e2939]' : 'bg-[#ebeced]'} xl:h-6  md:h-4 h-6 xl:w-32 sm:w-28 w-[200%] rounded-[5px]`}></div>
                            <div className={`${darkTheme ? 'bg-[#1e2939]' : 'bg-[#ebeced]'} xl:h-6  md:h-4 h-6 xl:w-20 md:w-12 w-20 rounded-[5px]`}></div>
                        </div>
                    </div>
                    <div className='sm:flex flex-col gap-2 hidden'>
                        <div className={`xl:w-40 md:w-30 w-40 ${darkTheme ? 'bg-[#1e2939]' : 'bg-[#ebeced]'} xl:h-6 md:h-4 h-6 rounded-[5px]`}></div>
                        <div className={`xl:w-28 md:w-20 w-28 ${darkTheme ? 'bg-[#1e2939]' : 'bg-[#ebeced]'} xl:h-6 md:h-4 h-6 rounded-[5px]`}></div>
                    </div>
                    <div className='flex justify-center items-start gap-2'>
                        <div className={`${darkTheme ? 'bg-[#1e2939]' : 'bg-[#ebeced]'} xl:h-6  md:h-4 h-6 lx:w-24 sm:w-18 w-[200px] rounded-[5px]`}></div>
                        <div className={`${darkTheme ? 'bg-[#1e2939]' : 'bg-[#ebeced]'} xl:h-14 md:h-12 h-14 xl:w-12 md:w-10 w-12 rounded-[5px]`}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LoadingEffect;
