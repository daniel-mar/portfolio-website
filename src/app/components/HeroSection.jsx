"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-100">Hi, I am {""}
                        </span>
                        <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'a creator',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'an engineer',
                            1000,
                            'a tinkerer',
                            1000
                        ]}
                        wrapper="span"
                        speed={27}
                        repeat={Infinity}
                        />
                </h1>
                <p className="text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl sm:mr-3">
                    First-gen software engineer, career changed from home-remodeling.
                </p>
                <div>
                    <Link href="https://github.com/daniel-mar">
                        <button className="px-7 py-3 rounded-full mr-4 w-full sm:w-fit bg-white hover:bg-slate-200 text-black bg-gradient-to-br from-yellow-300 via-gray-300 to-orange-600"
                        >
                            Github
                        </button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/daniel-martinez-paiz/">
                        <button className="px-2 py-2 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-br from-orange-600 via-gray-300 to-yellow-300"
                        >
                            <span className="block bg-[#191919] hover:bg-slate-800 rounded-full px-4 py-1"
                            >
                                LinkedIn
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#191919] w-[250px] h-[250px] lg:w-[275px] lg:h-[275px] relative">
                    <Image
                        src="/images/portfolio-me.jpg"
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