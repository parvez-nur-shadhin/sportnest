"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BookingCard = ({ expectedFacility }) => {
  const { register, handleSubmit } = useForm();

  const { facilityName, pricePerHour, availableTimeSlots } = expectedFacility;

  const submitForm = async(data) => {
    const bookingData = {
      facilityName: facilityName,
      bookingDate: data.bookingDate,
      timeSlot: data.timeSlot,
      hours: data.hours,
      totalPrice: (pricePerHour * data.hours) || pricePerHour,
    };
    console.log(bookingData);
    const res = fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if(res){
        toast.success(`${facilityName} has been booked`);
        console.log(res);
    }
    else{
        toast.warning(`Something wend wrong!`);
    }
  };

  return (
    <div className="container h-full w-87.5 mx-auto">
      <form onSubmit={handleSubmit(submitForm)} className="mx-auto">
        <fieldset className="fieldset bg-black/50 border rounded-box h-full w-full p-10 mx-auto">
          <h1 className="text-xl font-semibold text-white">Price Start from</h1>
          <h1 className="text-2xl font-bold text-[#aaf40c] italic">
            ${pricePerHour}
          </h1>

          <label className="label text-white text-md font-medium">
            Date And Time
          </label>
          <input
            type="date"
            className="input w-full"
            placeholder="Enter Your Expected Date"
            {...register("bookingDate")}
          />

          <label className="label text-white text-md font-medium">Hours</label>
          <input
            type="number"
            className="input w-full"
            placeholder="Enter Hour"
            {...register("hours")}
          />

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm font-semibold text-white">
              Time Slot
            </legend>
            <select
              defaultValue="Choose A Time SLot"
              className="select"
              {...register("timeSlot", { required: true })}
            >
              <option disabled={true}>Choose A Time Slot</option>
              {availableTimeSlots.map((availableTimeSlot, index) => (
                <option key={index}>{availableTimeSlot}</option>
              ))}
            </select>
            <span className="label">Optional</span>
          </fieldset>

          <button className="btn text-black bg-[#aaf40c] mt-4">Book Now</button>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingCard;
