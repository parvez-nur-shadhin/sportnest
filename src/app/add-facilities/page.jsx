"use client";
import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddFacilitiesPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      availableTimeSlots: data.availableTimeSlots
        .split(",")
        .map((slot) => slot.trim()),
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    if (res) {
      toast.success("The Facility has been added!");
    } else {
      toast.warning("Something went wrong");
    }

    console.log(res);
    const resData = await res.json();
    console.log(resData);
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    if (user?.email) {
      setValue("email", user.email);
    }
  }, [user, setValue]);

  return (
    <div className="container mx-auto my-15">
      <h1 className="text-center text-5xl font-bold text-white">
        Add A Facility
      </h1>
      <div className="mx-auto my-10">
        <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-none border-base-300 rounded-box w-xs md:w-lg border p-4 mx-auto space-y-2">
            <label className="label text-white text-md">Facility Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Facility Name"
              {...register("facilityName")}
            />
            <label className="label text-white text-md">Facility Type</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Facility Type"
              {...register("facilityType")}
            />
            <label className="label text-white text-md">Image Upload</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Your Image URL"
              {...register("imageUrl")}
            />

            <label className="label text-white text-md">Location</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter The Location"
              {...register("location")}
            />
            <label className="label text-white text-md">Price Per Hour</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter Price Per Hour"
              {...register("pricePerHour")}
            />
            <label className="label text-white text-md">Capacity</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter Capacity"
              {...register("capacity")}
            />
            <label className="label text-white text-md">
              Available Time Slots
            </label>
            <input
              type="text"
              className="input w-full"
              placeholder="07:00-09:00, 12:00-14:00"
              {...register("availableTimeSlots")}
            />
            <label className="label text-white text-md">Description</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Description"
              {...register("description")}
            />
            <label className="label text-white text-md">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder={user?.email}
              {...register("email")}
            />
            <button className="btn bg-[#aaf40c] mt-4 text-black">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddFacilitiesPage;
