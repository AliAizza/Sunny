import React from 'react';
import Image from 'next/image';
import Header from '../Header/Header';

import arrow from '/public/assets/icon-arrow-down.svg'

const Hero = () => {
    return (
        <div className="h-50rem bg-desktopHero bg-cover bg-center small:bg-mobileHero small:h-33.625rem">
            <Header />
            <h1 className='text-white text-big font-body font-black tracking-main text-center mt-24 medium:text-4xl small:text-2xl'>WE ARE CREATIVES</h1>
            <div className='flex justify-center mt-24 small:mt-4.5rem'>
                <Image src={arrow} width={30} alt='arrow'/>
            </div>
        </div>
    );
}

export default Hero;
