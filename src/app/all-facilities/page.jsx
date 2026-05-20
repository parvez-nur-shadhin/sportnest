import FacilityCard from "@/Components/FacilityCard";
import { fetchingFacilities } from "@/lib/fetchingData";

const AllFacilitiesPage = async() => {

    const facilities = await fetchingFacilities();

    return (
        <div className='container mx-auto my-10 p-4'>
            <h1 className='text-5xl text-center font-bold text-white'>All Facilities</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
                {facilities.map(facility => <FacilityCard key={facility._id} facility={facility} />)}
            </div>
        </div>
    );
};

export default AllFacilitiesPage;