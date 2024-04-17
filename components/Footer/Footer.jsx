import React from 'react';
import Image from 'next/image';

import greenlogo from '/public/assets/greenlogo.svg';
import facebook from '/public/assets/icon-facebook.svg';
import instagram from '/public/assets/icon-instagram.svg';
import twitter from '/public/assets/icon-twitter.svg';
import pinterest from '/public/assets/icon-pinterest.svg';


const Footer = () => {
    return (
        <div className='bg-footerBackground flex flex-col items-center py-4.5rem gap-10'>
            <Image src={greenlogo} alt='logo' width={170} height={33} />
            <div className='flex items-center gap-14 font-sec font-semibold text-1.125rem text-footerText mb-12 small:flex-col small:gap-4'>
                <p className='cursor-pointer'>About</p>
                <p className='cursor-pointer'>Services</p>
                <p className='cursor-pointer'>Projects</p>
            </div>
            <div className='flex gap-6'>
                <Image src={facebook} alt='social' width={20} height={20} className='tofilter'></Image>
                <Image src={instagram} alt='social' width={20} height={20} className='tofilter'></Image>
                <Image src={twitter} alt='social' width={20} height={20} className='tofilter'></Image>
                <Image src={pinterest} alt='social' width={20} height={20} className='tofilter'></Image>
            </div>
        </div>
    );
}

export default Footer;
