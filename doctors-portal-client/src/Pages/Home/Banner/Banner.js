import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import Button from '../../utilities/Button/Button';

const Banner = () => {
    return (
        <div className="hero pb-32" style={{background:`url(${bg})`, backgroundSize:"contain"}}>
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img  src={chair} className=" rounded-lg shadow-2xl lg:w-1/2" alt='' />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Button>Get Started</Button>
    </div>
  </div>
</div>
    );
};

export default Banner;