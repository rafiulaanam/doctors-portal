import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  // const {user} =useContext(AuthContext)

  const url = `http://localhost:5000/users`;

  const { data: users = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      console.log(data);
      return data;
    },
  });

  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successfully");
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((del) => {
        console.log(del);
        if (del.deletedCount > 0) {
          toast.success("Delete Successfully");
          refetch();
        }
      });
  };

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
              <th>Email</th>

              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>

                  <td>
                    {user?.role !== "admin" ? (
                      <button
                        onClick={() => handleAdmin(user._id)}
                        className="btn btn-sm btn-primary"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <td>Already Admin</td>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
