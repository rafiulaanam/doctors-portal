import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";


const AppointmentHeader = ({selectedDate, setSelectedDate}) => {
  
  return (
    <div>
      <div
        className="hero pb-32"
        style={{ background: `url(${bg})`, backgroundSize: "contain" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={chair} className=" rounded-lg shadow-2xl lg:w-1/2 lg:ml-20 " alt="" />
          <div className="card shadow-xl lg:mt-0 mt-10 ">
            <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHeader;
