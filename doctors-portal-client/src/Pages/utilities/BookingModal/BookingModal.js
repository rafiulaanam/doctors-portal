import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/Auth/AuthProvider";

const BookingModal = ({ modalInfo, selectedDate, setModalInfo, refetch }) => {
  const { name, slots } = modalInfo;
  const date = format(selectedDate, "PP");

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.number.value;

    const bookingData = {
      appointmentDate: date,
      slot,
      service: name,
      fullName,
      email,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setModalInfo(null);
          refetch();
          toast.success("Booking Confirmed");
        } else {
          toast.error(data.message);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form
            onSubmit={handleBooking}
            className="grid gap-6 grid-cols-1 mt-8"
          >
            <input
              type="text"
              name="date"
              value={date}
              disabled
              className="input input-bordered  w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="fullName"
              defaultValue={user?.displayName}
              disabled
              placeholder="Enter your Full Name"
              className="input input-bordered  w-full "
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Enter your Email"
              className="input input-bordered  w-full "
            />
            <input
              type="number"
              name="number"
              placeholder="Enter your Phone Number"
              className="input input-bordered  w-full "
              required
            />
            <input
              className="btn btn-accent text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
