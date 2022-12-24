import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/Auth/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Register = () => {
  const { continueWithGoogle, createUser, updateUser } =
    useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    // console.log(createdUserEmail)
    const navigate = useNavigate();
if(token){
  navigate('/')
}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogle = () => {
    continueWithGoogle()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("User Login Successfully");
      })
      .catch((e) => console.log(e));
  };

  const handleRegister = (data, event) => {
    const form = event.target;
   

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
   
        handleUpdateUser(data.fullName, data.phone, data.email);
        toast.success("User Created Successfully");
        form.reset();
      })
      .catch((e) => console.log(e));
  };

  const handleUpdateUser = (name, number, email) => {
    const userInfo = {
      displayName: name,
    };
    
    updateUser(userInfo)
      .then(() => {
        saveUser(name, email, number);
      })
      .catch((e) => console.log(e));
  };

  const saveUser = (name, email, phone) => {
    const user = {
      name,
      email,
      phone,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(() => {
        // console.log(email)
        setCreatedUserEmail(email)
        
      })
      .catch((e) => console.log(e));
  };



  return (
    <div className="hero my-10 ">
      <div className="hero-content  ">
        <div className="card card-body w-full  shadow-2xl py-10">
          <h1 className="text-2xl font-semibold text-center mt-5">Sign Up</h1>
          <form onSubmit={handleSubmit(handleRegister)} className=" w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                {...register("fullName", {
                  required: true,
                  maxLength: 50,
                  minLength: 4,
                })}
                type="text"
                placeholder="Enter your Full Name"
                className="input input-bordered "
              />
              {errors.fullName && (
                <p className="text-orange-600">valid name required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register(
                  "email",

                  {
                    required: "Enter your Valid Email",
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  }
                )}
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered "
              />
              {errors.email && (
                <p className="text-orange-600">
                  enter your valid email address
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                {...register("phone", {
                  required: true,
                  maxLength: 11,
                  minLength: 8,
                })}
                type="number"
                placeholder="Enter your Phone Number"
                className="input input-bordered"
              />
              {errors.phone && (
                <p className="text-orange-600">valid phone number required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Enter your Valid Password",
                  // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                })}
                type="password"
                placeholder="Enter your Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmPassword", {
                  required: "Password required",
                })}
                type="password"
                placeholder="Enter your Confirm Password"
                className="input input-bordered"
              />

              <label className="label">
                <a href="#!" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent text-white">Sign Up</button>
            </div>
          </form>
          <p className="mt-2 text-center">
            Already have an account ?{" "}
            <span className="text-primary  ">
              <Link to={"/login"}>Please Login</Link>
            </span>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogle}
            className="btn btn-outline btn-accent uppercase text-white"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
