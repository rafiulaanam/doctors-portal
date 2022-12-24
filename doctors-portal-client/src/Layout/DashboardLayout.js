import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/Auth/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {user?.role === 'admin' ? (
              <>
                <li>
                  <Link to={"/dashboard/allusers"}>
                    <button>All Users</button>
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/manageuser"}>
                    <button>Manage Doctors</button>
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/adddoctor"}>
                    <button>Add Doctor</button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/dashboard"}>
                    <button>My Appointment</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
