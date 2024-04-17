"use client"

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

import logo from '/public/assets/logo.svg';
import hamb from '/public/assets/icon-hamburger.svg';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className='flex justify-between pl-10 pr-12 pt-8 items-center medium:pt-8 medium:px-5per'>
            <Image src={logo} alt='logo' width={170} className='medium:w-7.5rem'/>
            <div className={`flex text-white items-center gap-2.94rem duration-700 medium:flex-col medium:absolute medium:right-5per ${isActive ? 'medium:top-7.5rem' : 'medium:top-minus20rem'} medium:bg-menuBackground medium:text-textGrey medium:text-xl medium:w-90per medium:py-10 medium:px-24 medium:gap-8`}>
                <p className='cursor-pointer font-sec font-semibold text-1.125rem'>About</p>
                <p className='cursor-pointer font-sec font-semibold text-1.125rem'>Services</p>
                <p className='cursor-pointer font-sec font-semibold text-1.125rem'>Projects</p>
                <button className='cursor-pointer text-black bg-white font-body font-bold text-0.9375rem py-4 px-8 rounded-1.75rem hover:bg-white/[0.3] hover:text-white duration-300 medium:bg-buttonYellow medium:hover:text-black medium:hover:bg-buttonYellow/[0.4]'>CONTACT</button>
                <div className='triangle hidden medium:block'></div>
            </div>
            <Image className={`hidden medium:block cursor-pointer ${isActive ? 'opacity-50' : 'opacity-100'} duration-500`} onClick={() => {setIsActive(!isActive)}} src={hamb} alt='hamb' width={24} height={18}/>
        </div>
    );
}

export default Header;
