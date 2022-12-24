import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import Button from '../../utilities/Button/Button';

const MakeAppointment = () => {
    return (
        <div className="hero mt-32" style={{background:`url(${appointment})`}}>
  <div className="hero-content grid lg:grid-cols-2">
   <div> <img src={doctor} className="  rounded-lg max-w-lg hidden lg:block  -mt-20"alt='' /></div>
    <div className='text-white'>
      <h4 className="text-xl font-bold text-primary">Appointment</h4>
      <h1 className="text-5xl font-bold">Make an appointment Today</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <Button>Get Started</Button>
    </div>
  </div>
</div>
    );
};

export default MakeAppointment;