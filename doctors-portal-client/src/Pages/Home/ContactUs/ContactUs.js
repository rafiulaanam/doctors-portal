import React from 'react';
import appointment from '../../../assets/images/appointment.png'


const ContactUs = () => {
    return (
        <div className='text-center py-10 mt-32' style={{background:`url(${appointment})`}}>
            <div>
                <div >
                <h5 className="text-xl text-primary font-bold">Contact Us</h5>
                <h2 className="text-3xl text-white">Stay Connected with Us</h2>
                </div>
               <div className='mx-5 md:mx-20'>
               <input type="text" placeholder="Email Address" className="input input-bordered input-accent w-full  lg:w-96  mt-10" />
               </div>
               <div className='mx-5 md:mx-20'>
               <input type="text" placeholder="Subject" className="input input-bordered input-accent mt-5 w-full lg:w-96" />
               </div>
               <div className='mx-5 md:mx-20'>
               <textarea className="lg:w-96 w-full mt-5 h-40 textarea textarea-accent" placeholder="Your Message"></textarea>
               </div>
               <button className="btn btn-primary my-5 px-9 text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
             
            </div>
        </div>
    );
};

export default ContactUs;