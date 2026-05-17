import Image from "next/image";

const FacilityCard = ({ facility }) => {
  console.log(facility);
  const {imageUrl, facilityName, description} = facility;
//   {
//     "_id": "6a0a1d5b075a511bb2c610d9",
//     "facilityName": "Champions Tennis Court",
//     "facilityType": "Tennis",
//     "imageUrl": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "location": "Dhanmondi, Dhaka",
//     "pricePerHour": 800,
//     "capacity": 4,
//     "availableTimeSlots": "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
//     "description": "Hard court tennis facility suitable for singles and doubles matches."
// }

  return (
    <div>
      <div className="card  shadow-sm text-white bg-black/50 h-full transition duration-700 hover:scale-105 cursor-pointer">
        <figure>
          <Image src={imageUrl} alt={facilityName} height={300} width={400} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{facilityName}</h2>
          <p>
            {description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-[#aaf40c] text-black">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
