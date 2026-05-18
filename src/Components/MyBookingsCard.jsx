const MyBookingsCard = ({ bookingByUser, bookings, setBookings }) => {
  console.log(bookingByUser);
  const {
    _id,
    facilityName,
    timeSlot,
    bookingDate,
    totalPrice,
    hours,
    status,
  } = bookingByUser;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8000/bookings/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data.deletedCount > 0) {
      const remainingBookings = bookings.filter(
        (booking) => booking._id !== _id,
      );

      setBookings(remainingBookings);
    }
  };

  return (
    <div className="my-5 flex justify-between items-center bg-black/30 p-5 rounded-xl transition hover:scale-105 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-[#aaf40c]">{facilityName}</h1>
        <p className="text-white font-medium text-sm">Slot: {timeSlot}</p>
        <p className="text-white font-medium text-sm">Date: {bookingDate}</p>
        <p className="text-white font-medium text-sm">Hours: {hours}</p>
        <p className="text-white font-medium text-sm">
          Status: <span className="italic">{status}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-xl font-bold text-[#aaf40c]">${totalPrice}</h1>
        <button onClick={handleDelete} className="btn btn-md btn-error">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MyBookingsCard;
