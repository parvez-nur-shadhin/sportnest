
import Delete from "@/Components/Delete";
import { fetchingFacilities } from "@/lib/fetchingData";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const FacilityDetails = async ({ params }) => {
  const { id } = await params;
  const facilities = await fetchingFacilities();

  const expectedFacility = facilities.find((facility) => id === facility._id);


  //   {
  //     "_id": "6a0ad9a6d3bde442030c2f3f",
  //     "facilityName": "Elite Basketball Court",
  //     "facilityType": "Basketball",
  //     "imageUrl": "https://plus.unsplash.com/premium_photo-1671436822261-2c99507bfc70?q=80&w=2070",
  //     "location": "Banani, Dhaka",
  //     "pricePerHour": 900,
  //     "capacity": 10,
  //     "availableTimeSlots": [
  //         "07:00-09:00",
  //         "12:00-14:00",
  //         "17:00-19:00"
  //     ],
  //     "description": "Professional indoor basketball court with wooden flooring and seating area.",
  //     "email": "parveznur00@gmail.com"
  // }

  const {
    imageUrl,
    facilityName,
    facilityType,
    location,
    pricePerHour,
    capacity,
    description,
  } = expectedFacility;

  return (
    <div className="container mx-auto my-15 p-4 md:p-10">
      <div className="flex justify-between items-center">
        <Link href={"/all-facilities"}>
          <h1 className="flex items-center gap-3 text-white text-2xl">
            <FaArrowLeftLong /> Facilities
          </h1>
        </Link>
        <div className="flex gap-4 items-center">
            <Link href={`/edit-form/${id}`}>
            <button className="btn bg-[#aaf40c]">Edit Facility</button>
            </Link>
            <Delete id={id} />
        </div>
      </div>
      <div className="mt-4">
        <Image
          className="mx-auto"
          src={imageUrl}
          alt={facilityName}
          height={400}
          width={1000}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-10 max-w-250 mx-auto">
        <div className="mt-10 p-4 max-w-250 w-full">
          <h1 className="text-3xl font-bold text-[#aaf40c] mb-5">
            Facility Details:
          </h1>
          <div className="flex justify-between items-center">
            <h1 className="text-white font-medium text-sm md:text-lg">
              Facility Name :
            </h1>
            <h1 className="text-white font-bold text:md md:text-xl">
              {facilityName}
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-white font-medium text-sm md:text-lg">
              Facility Type :
            </h1>
            <h1 className="text-white font-bold text:md md:text-lg">
              {facilityType}
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-white font-medium text-sm md:text-lg">
              Location :
            </h1>
            <h1 className="text-white font-bold text:md md:text-lg">
              {location}
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-white font-medium text-sm md:text-lg">
              Price Per Hour :
            </h1>
            <h1 className="text-white font-bold text:md md:text-lg">
              ${pricePerHour}
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-white font-medium text-sm md:text-lg">
              Capacity :
            </h1>
            <h1 className="text-white font-bold text:md md:text-lg">
              {capacity}
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-white font-bold text-lg text-center italic">
              {description}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
