import React from 'react';

const AppointmentOption = ({appointmentOption,setModalInfo}) => {
    const {name,slots} = appointmentOption;
    return (
        <div className="card   shadow-xl">
  <div className="card-body text-center">
    <h2 className="font-bold text-2xl ">{name}</h2>
    <p>{
    
    slots.length>0 ? slots[0] : 'Try another day'
    
    }</p>
    <p>{slots.length} {slots.length>0 ? 'spaces' : 'space'} available</p>
    <div className="card-actions justify-center">
      <label onClick={()=>setModalInfo(appointmentOption)} htmlFor="booking-modal" className="btn btn-primary">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentOption;