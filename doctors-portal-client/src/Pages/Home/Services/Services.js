import React from 'react';
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/cavity.png'
import img3 from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const serviceData =[
        {
            id:"1",
            img: img1,
            title:"Fluoride Treatment",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id:"2",
            img: img2,
            title:"Cavity Filling",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id:"3",
            img: img3,
            title:"Teeth Whitening",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='mt-20'>
            <div className='text-center'>
            <h4 className="text-xl uppercase font-bold text-primary">our services</h4>
            <h2 className="text-3xl ">Services We Provide</h2>

            </div>


            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    serviceData.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;