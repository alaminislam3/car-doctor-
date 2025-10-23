import React from "react";
import dbConnect, { collectionNameObj } from "../lib/dbConnect";

export default async function Bookingpage() {
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const data = await bookingCollection.find({}).toArray();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-teal-800 mb-8">
        Booking Details
      </h1>

      {/* If no data */}
      {data.length === 0 ? (
        <div className="flex justify-center items-center h-60">
          <p className="text-gray-500 text-lg font-medium">
            You haven't booked anything yet 💤
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {data.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-teal-800 mb-2">
                {booking.customerName}
              </h2>
              <p className="text-gray-600 mb-1">
                📅 <span className="font-medium">{booking.date}</span>
              </p>
              <p className="text-gray-600 mb-1">
                📍 <span className="font-medium">{booking.address}</span>
              </p>
              <p className="text-gray-600 mb-1">
                📧 <span className="font-medium">{booking.email}</span>
              </p>
              <p className="text-gray-600 mb-3">
                📞 <span className="font-medium">{booking.phone}</span>
              </p>
              <button className="w-full mt-2 py-2 bg-teal-800 text-white rounded-xl hover:bg-teal-700 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
