import React from 'react';
import Image from 'next/image';

const Sec = ({dir, title, paragraph, image}) => {
    return (
        <section className={`flex ${dir === 'row' ? 'flex-row' : 'flex-row-reverse'} 1000:flex-col-reverse`}>
            <div className='flex items-center justify-center w-full flex-1 1000:w-auto 1000:h-full 1000:py-12 1000:text-center'>
                <div className='w-27.8125rem'>
                    <h1 className='text-2.5rem font-body font-black text-clientsnames 500:text-2rem'>{title}</h1>
                    <p className='text-1.125rem font-sec font-semibold tracking-rev text-textGrey my-8 1000:my-6'>{paragraph}</p>
                    <h4 className={`mt-2 font-body cursor-pointer text-clientsNames font-black text-0.9375rem tracking-1px relative inline after:absolute after:w-8.5625rem after:h-2.5 after:left-minus0.53rem after:top-0.75rem after:block after:opacity-25 after:rounded-1.75rem ${dir === 'row' ? 'after:bg-lineYellow' : 'after:bg-lineRed'} after:z-minus1 after:duration-150 hover:after:opacity-100`}>LEARN MORE</h4>
                </div>
            </div>
            <Image className='w-screen h-auto flex-1 1000:w-auto 1000:h-screen' src={image} alt='egg image'/>
        </section>
    );
}

export default Sec;
