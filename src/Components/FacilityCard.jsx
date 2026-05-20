import Image from "next/image";
import Link from "next/link";

const FacilityCard = ({ facility }) => {
  const { imageUrl, facilityName, description, _id } = facility;

  return (
    <div>
      <div className="card  shadow-sm text-white bg-black/50 h-full transition duration-700 hover:scale-105 cursor-pointer">
        <figure>
          <Image src={imageUrl} alt={facilityName} height={300} width={400} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{facilityName}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link href={`/facility/${_id}`}>
              <button className="btn bg-[#aaf40c] text-black">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
