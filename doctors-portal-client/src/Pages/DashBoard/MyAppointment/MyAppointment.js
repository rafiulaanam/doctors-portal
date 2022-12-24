import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/Auth/AuthProvider";
import Loading from "../../utilities/Loading";

const MyAppointment = () => {
  const { user, logoutUser } = useContext(AuthContext);
console.log(user?.email)
  const { data: bookings = [] , isLoading} = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`, //for jwt
        },
      })
        .then((res) => {
          if(isLoading){
            return <Loading></Loading>

          }
          if (res.status === 401 || res.status === 403) {
            logoutUser();
          }
          return res.json();
        })
        .then((data) => {
          console.log(data); 
        });
    },
  });
console.log(bookings)
  return (
    <div className="p-10 bg-[#F1F5F9] ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">My Appointment</h1>
        <p>20 May 2022</p>
      </div>

      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings.map((book, i) => (
                <tr key={book._id}>
                  <th>{i + 1}</th>
                  <td>{book.fullName}</td>
                  <td>{book.service}</td>
                  <td>{book.appointmentDate}</td>
                  <td>{book.slot}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
