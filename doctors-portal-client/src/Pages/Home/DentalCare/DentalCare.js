import React from 'react';
import img from '../../../assets/images/treatment.png'
import Button from '../../utilities/Button/Button';

const DentalCare = () => {
    return (
        <div className="hero mt-20 ">
  <div className="hero-content  grid grid-cols-1 lg:grid-cols-2">
    <div className=' flex justify-center'>
    <img alt='' src={img} className="lg:max-w-sm  rounded-lg shadow-2xl" />
    </div>
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dental <br/> Care, on Your Terms</h1>
      <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <Button>Get Started</Button>
    </div>
  </div>
</div>
    );
};

export default DentalCare;