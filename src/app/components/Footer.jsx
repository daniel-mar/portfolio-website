import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
        <footer className='footer border border-top-[#33353f] border-l-transparent border-r-transparent text-white z-10'>
            <div className='container p-12 flex justify-between'>
                <div className='flex'>
                    <Image
                        src="/favicon.ico"
                        alt="logo"
                        width={20}
                        height={20}
                        className='mr-2'
                    />
                    <span>Daniel Paiz</span>
                </div>
                <p className='text-slate-600'>All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;