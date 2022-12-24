import React, { useContext, useState } from "react";
import { Link,  useLocation,  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/Auth/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Login = () => {
  const location = useLocation()


  const from = location.state?.from?.pathname || "/";
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail)
  const navigate = useNavigate();
if(token){
  navigate(from,{replace:true})
}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 

  const {continueWithGoogle,loginUser} =useContext(AuthContext)

  const handleGoogle =()=> {
    continueWithGoogle()
    .then((result)=>{
      const user = result.user
      // console.log(user)
      if(user){

        toast.success("User Login Successfully")
        navigate(from,{replace:true})
      }
     
    })
    .catch(e=>console.log(e))
  }


  const handleLogin = (data) => {
    // console.log(data);


    loginUser(data.email, data.password)
    .then((result)=>{
      const user = result.user
      // console.log(user)
      if(user){

        setLoginUserEmail(data.email)
      }
      // 
  
      toast.success("User Login Successfully")
    })
    .catch(error=>console.log(error))
  };

  return (
    <div className="hero my-10 ">
      <div className="hero-content ">
        <div className="card card-body  w-full  shadow-2xl">
          <h1 className="text-2xl font-semibold text-center mt-5">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)} className="w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register(
                  "email",

                  {
                    required: "Enter your Valid Email",
                  }
                )}
                type="email"
                name="email"
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
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Enter your Valid Password",
                  pattern: /^[A-Za-z]+$/i,
                })}
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#!" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent text-white">Login</button>
            </div>
          </form>
            <p className="mt-2 text-center">
              New to Doctors Portal ?{" "}
              <span className="text-primary ">
                <Link to={"/register"}>Create new account</Link>
              </span>
            </p>
            <div className="divider">OR</div>
            <button onClick={handleGoogle} className="btn btn-outline btn-accent uppercase text-white">
              Continue with google
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
