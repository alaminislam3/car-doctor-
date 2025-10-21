"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

const CheckoutForm = ({ data }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookService = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const email = form.email.value;
    const bookingPayload = {
      customerName: name,
      email,
      date,
      phone,
      address,
      // service_id: data._id,
      // service_name: data.title,
      // service_img: data.img,
      // service_price: data.price,
    };

    // console.log(bookingPayload);

    try {
      const res = await fetch("http://localhost:3000/api/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingPayload),
      });
      const postedResponse = await res.json();
      // console.log("POSTED DATA", postedResponse);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Booking completed.Thanks !",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-3xl font-bold mb-6">
          Book Service : {data?.title}
        </h2>
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="input input-bordered w-full bg-gray-50 "
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-gray-50"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Due Amount</span>
              </label>
              <input
                type="text"
                defaultValue={data?.price}
                // readOnly
                name="price"
                className="input input-bordered w-full bg-gray-50 "
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered w-full bg-gray-50 "
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Phone</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="input input-bordered w-full bg-gray-50 "
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                className="input input-bordered w-full bg-gray-50 "
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button
              className="btn btn-primary w-full bg-gray-50  border-2 py-2 px-2"
              type="submit"
              // disabled={isSubmitting}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
