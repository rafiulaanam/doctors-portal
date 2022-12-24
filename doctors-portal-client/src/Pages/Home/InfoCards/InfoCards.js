import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const infoData = [
        {
            id: "1",
            title: "Opening Hours",
            description: "Lorem Ipsum is simply dummy text of the pri",
            icon: clock,
            bg:"bg-gradient-to-r from-secondary to-primary"
        },
        {
            id: "2",
            title: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            icon: marker,
            bg:"bg-accent"
        },
        {
            id: "3",
            title: "Contact us now",
            description: "+000 123 456789",
            icon: phone,
            bg:"bg-gradient-to-r from-secondary to-primary"
        }
    ]
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                infoData.map(info=><InfoCard
                
                    key={info.id}
                    info={info}

                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;