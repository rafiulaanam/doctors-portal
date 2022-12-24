import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../../utilities/BookingModal/BookingModal';
import Loading from '../../utilities/Loading';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState(null)
    const [modalInfo, setModalInfo] = useState(null)

    const date = format(selectedDate, 'PP')

    const {data:appointmentOptions=[], refetch, isLoading} = useQuery({
      queryKey:['appointmentOptions', date],
      queryFn:()=> fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
      .then(res=>res.json())
    })


    if(isLoading){
      return <Loading></Loading>
    }
    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res=>res.json())
    //     .then(data=>setAppointmentOptions(data))
    // },[])
    return (
        <div>
            <section>
                <p className='text-primary font-bold text-center mt-5'>Available Appointments on {format(selectedDate, 'PP')}</p>

              <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
              {     appointmentOptions &&
                    appointmentOptions.map(option=><AppointmentOption
                    key={option._id}
                    appointmentOption ={option}
                    setModalInfo={setModalInfo}
                    ></AppointmentOption>)
                }
              </div>
              { modalInfo &&
                <BookingModal
                modalInfo={modalInfo}
                selectedDate={selectedDate}
                setModalInfo={setModalInfo}
                refetch={refetch}
                ></BookingModal>
              }
            </section> 
        </div>
    );
};

export default AvailableAppointment;