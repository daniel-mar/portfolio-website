"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600'>Hey, I'm {""}
                        </span>
                        <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Daniel',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'an engineer',
                            1000,
                            'an apprentice',
                            1000,
                            'a tinkerer',
                            1000
                        ]}
                        wrapper="span"
                        speed={20}
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl'>
                    First-gen full stack development in MERN, Python, C#, Java
                </p>
                <div>
                    <button className='px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-white hover:bg-slate-200 text-black bg-gradient-to-br from-blue-600 via-gray-300 to-green-500'>Github</button>
                    <button className='px-2 py-2 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-br from-blue-600 via-gray-500 to-green-600'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>LinkedIn</span>
                        </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[275px] lg:h-[275px] relative">
                    <Image
                        src="/images/portrait.png"
                        alt="hero image"
                        className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroSection;