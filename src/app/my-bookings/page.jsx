"use client";

import MyBookingsCard from "@/Components/MyBookingsCard";
import { authClient } from "@/lib/auth-client";
import { fetchingBookings } from "@/lib/fetchingData";
import { useEffect, useState } from "react";

const MyBookingsPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`);
      const data = await res.json();
      setBookings(data);
    };
    fetchingData();
  }, []);

  const bookingsByUser = bookings.filter(
    (booking) => booking.email === user?.email,
  );

  return (
    <div className="container min-h-screen mx-auto my-20">
      <h1 className="text-center text-5xl text-white font-semibold">My Bookings</h1>
      <div>
        {bookingsByUser.map((bookingByUser) => (
          <MyBookingsCard
            key={bookingByUser._id}
            bookingByUser={bookingByUser}
            bookings={bookings}
            setBookings={setBookings}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
