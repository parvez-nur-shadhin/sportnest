import Image from "next/image";
import BannerImage from "@/assets/banner.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse text-center gap-4 md:text-left md:flex-row justify-between items-center p-4 md:p-10">
      <div className="space-y-3">
        <h1 className="text-5xl text-[#aaf40c] font-semibold">
          Discover Premium Sports Facilities
        </h1>
        <h3 className="text-gray-300 font-medium">
          Book world-class sports venues, training grounds, and fitness
          facilities with ease. Elevate your game anytime, anywhere.
        </h3>
        <Link href={"/all-facilities"}>
          <button className="btn btn-outline text-[#aaf40c] border-[##aaf40c] hover:bg-black/50 flex items-center gap-2 mx-auto md:mx-0">
            Explore Facilities <FaArrowRightLong />
          </button>
        </Link>
      </div>
      <div>
        <Image
          src={BannerImage}
          alt="Banner Image"
          className="rounded-lg"
          height={300}
          width={400}
        />
      </div>
    </div>
  );
};

export default Banner;
