import React from 'react';

const LoadingEffect = ({ loopCount }) => {
    const loopArray = Array.from({ length: loopCount });

    return (
        <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-5 w-full'>
            {loopArray.map((_, index) => (
                <div key={index} className='shadow-sm flex justify-between items-center p-5 animate-pulse w-full'>
                    <div className='flex gap-2 justify-center items-center'>
                        <div className='bg-[#ebeced] h-14 w-12 rounded-[5px]'></div>
                        <div className='flex flex-col gap-2'>
                            <div className='bg-[#ebeced] h-6 w-32 rounded-[5px]'></div>
                            <div className='bg-[#ebeced] h-6 w-20 rounded-[5px]'></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='bg-[#ebeced] w-40 h-6 rounded-[5px]'></div>
                        <div className='bg-[#ebeced] w-28 h-6 rounded-[5px]'></div>
                    </div>
                    <div className='flex justify-center items-start gap-2'>
                        <div className='bg-[#ebeced] h-6 w-24 rounded-[5px]'></div>
                        <div className='bg-[#ebeced] h-14 w-12 rounded-[5px]'></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LoadingEffect;
