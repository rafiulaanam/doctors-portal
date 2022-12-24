import React from 'react';

const InfoCard = ({info}) => {
    const {icon,title,description,bg} = info;
    return (
        <div className={`card lg:card-side shadow-xl text-white ${bg}`}>
        <figure><img src={icon} className="p-6" alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          
        </div>
      </div>
    );
};

export default InfoCard;