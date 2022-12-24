import React from "react";

const Testimonial = ({ review }) => {
  const { img, description, location, name } = review;
  return (
    <div className="card   shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="card-actions ">
          <div className="flex  mt-8 ">
            <div className=" avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
            </div>
            <div className="ml-6">
                <h5 className="text-xl font-semibold">{name}</h5>
                <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
