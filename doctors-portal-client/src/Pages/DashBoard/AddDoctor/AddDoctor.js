import React from "react";
import Button from "../../utilities/Button/Button";

const AddDoctor = () => {
  return (
    <div className="p-20  bg-base-200">
        <h1 className="font-bold text-2xl mb-5">Add a New Doctor</h1>
      <div className=" ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Doctor Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Speciality</span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Select specialization
                </option>
                <option>Teeth Orthodontics</option>
                <option>Cosmetic Dentistry</option>
                <option>Teeth Cleaning</option>
                <option>Cavity Protection</option>
                <option>Pediatric Dental</option>
                <option>Oral Surgery</option>
              </select>
              <div className="form-control mt-10">
             
              <input type="file" placeholder="Upload Your Photo" className="file-input file-input-bordered w-full max-w-xs" />
            </div>
            </div>
            <div className="form-control mt-6">
                <Button>Add</Button>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
