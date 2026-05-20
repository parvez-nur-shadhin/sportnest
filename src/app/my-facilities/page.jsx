"use client";
import MyFacilityCard from "@/Components/MyFacilityCard";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const MyFacilities = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [myFacilities, setMyFacilities] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`,
      );
      const data = await res.json();
      setMyFacilities(data);
    };
    fetchingData();
  }, []);

  const facilitiesCreatedByUser = myFacilities.filter(
    (myFacility) => myFacility.email === user?.email,
  );

  return (
    <div className="container mx-auto  min-h-screen p-4">
      <h1 className="text-5xl text-white font-bold text-center my-10">
        My Facilities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {facilitiesCreatedByUser.map((facility) => (
          <MyFacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default MyFacilities;
