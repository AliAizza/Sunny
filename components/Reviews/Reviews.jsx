import React from 'react';
import Image from 'next/image';


import emily from "/public/assets/image-emily.jpg";
import thomas from "/public/assets/image-thomas.jpg";
import jennie from "/public/assets/image-jennie.jpg";

const feedbacks = [
    {
        src: emily,
        review: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name: "Emily R.",
        job: "Marketing Director",
    },
    {
        src: thomas,
        review: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        name: "Thomas S.",
        job: "Chief Operating Officer",
    },
    {
        src: jennie,
        review: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name: "Jennie F.",
        job: "Business Owner",
    }
]

const Reviews = () => {
    return (
        <div className='flex flex-col items-center py-40 gap-20 overflow-hidden 1150:py-16 1150:gap-16'>
            <h1 className='text-xl text-clientsTitle font-body font-black 1150:text-base 1150:tracking-0.25rem 1150:text-center 1150:px-6'>CLIENT TESTIMONIALS</h1>
            <div className='flex items-center w-screen justify-around 1150:flex-col 1150:justify-normal 1150:gap-16'>
                {
                    feedbacks.map((feedback, index) => (
                        <div key={index} className='flex flex-col items-center text-center 1150:px-6'>
                            <Image className='rounded-4.5rem mb-14 1150:mb-8' src={feedback.src} alt='profile image' width={72} height={72}/>
                            <p className=' max-w-21.875rem text-clientsFeedbacks font-sec font-semibold text-1.125rem mb-4.2rem 1150:mb-8'>{feedback.review}</p>
                            <h3 className='text-clientsNames font-body font-black text-1.125rem mb-0.56rem'>{feedback.name}</h3>
                            <h6 className='text-clientsTitle font-sec font-semibold text-0.875rem'>{feedback.job}</h6>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Reviews;
