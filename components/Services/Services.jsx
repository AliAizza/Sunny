import React from 'react';

const Services = () => {
    return (
        <section className='flex min-h-37.5rem medium:flex-col medium:min-h-75rem'>
            <div className='flex-1 bg-cherryBackground bg-cover bg-center flex flex-col items-center justify-end pb-16 medium:px-6 small:bg-mobilecherryBackground' >
                <h2 className='text-cherryTitle text-1.75rem font-body font-black mb-1.7rem'>Graphic Design</h2>
                <p className='text-center text-cherryParagraph text-base font-sec font-semibold max-w-21.1875rem'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
            <div className='flex-1 bg-orangeBackground bg-cover bg-center flex flex-col items-center justify-end pb-16 medium:px-6 small:bg-mobileorangeBackground' >
                <h2 className='text-orangeTitle text-1.75rem font-body font-black mb-1.7rem'>Photography</h2>
                <p className='text-center text-orangeParagraph text-base font-sec font-semibold max-w-21.1875rem'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </section>
    );
}

export default Services;
