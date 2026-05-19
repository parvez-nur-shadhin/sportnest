'use client'
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const EditForm = () => {
    const {id} = useParams();
    console.log(id)
  const { register, handleSubmit} = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const res = await fetch(`http://localhost:8000/facilities/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
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

 
  return (
    <div className="container mx-auto my-15">
      <h1 className="text-center text-5xl font-bold text-white">
        Update This Facility
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
            <label className="label text-white text-md">Description</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Description"
              {...register("description")}
            />

            <button className="btn bg-[#aaf40c] mt-4 text-black">Update Facility</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
