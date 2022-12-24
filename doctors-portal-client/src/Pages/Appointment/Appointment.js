import React, { useState } from 'react';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentHeader
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentHeader>
            <AvailableAppointment
            selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;