import Banner from "@/Components/Banner";
import FAQ from "@/Components/FAQ";
import FeaturedFacilities from "@/Components/FeaturedFacilities";
import WhyChooseUs from "@/Components/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedFacilities />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}
