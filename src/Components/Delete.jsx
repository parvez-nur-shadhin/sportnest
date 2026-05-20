"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Delete = ({ id }) => {
    const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8000/facilities/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
      toast.success("Facility Deleted Successfully");

      router.push("/my-facilities");

      router.refresh();
    } else {
      toast.error("Delete Failed");
    }
  };
  return (
    <div>
      <button onClick={handleDelete} className="btn bg-red-600 text-white">
        Delete Facility
      </button>
    </div>
  );
};

export default Delete;
