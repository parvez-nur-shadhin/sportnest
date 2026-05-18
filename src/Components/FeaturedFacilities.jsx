import { fetchingFacilities } from "@/lib/fetchingData";
import FacilityCard from "./FacilityCard";

const FeaturedFacilities = async() => {

    const facilities = await fetchingFacilities();
    console.log(facilities);

    return (
        <div className="container mx-auto my-10 p-4">
            <h1 className="text-5xl font-bold text-center mt-10 mb-5 text-gray-200">Featured</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {facilities.slice(0, 6).map(facility => <FacilityCard key={facility._id} facility={facility} />)}
            </div>
        </div>
    );
};

export default FeaturedFacilities;