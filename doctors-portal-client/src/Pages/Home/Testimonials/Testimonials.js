import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviewData=[
        {
            id:"1",
            description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:img1,
            location:"California",
            name:"Winson Herry"
        },
        {
            id:"2",
            description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:img2,
            location:"California",
            name:"Winson Herry"
        },
        {
            id:"3",
            description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img:img3,
            location:"California",
            name:"Winson Herry"
        }
    ]
    return (
        <div className='mt-20'>
            <div className='flex justify-between'>
                <div>

                    <h5 className="text-xl text-primary font-bold">Testimonials</h5>
                    <h3 className="text-4xl">What Our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} className='w-20 md:w-32 lg:w-48' alt=''/>
                </div>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'> 
            {
                reviewData.map(review=><Testimonial
                key={review.id}
                review={review}
                ></Testimonial>)
            }

            </div>
        </div>
    );
};

export default Testimonials;