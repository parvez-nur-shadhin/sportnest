import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      <section className="container mx-auto py-20 bg-black/30 text-white rounded-xl my-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Why Choose Us</h2>

            <p className="text-gray-400 mt-4">
              Everything you need for hassle-free sports booking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-black">
            <div className=" p-8 rounded-2xl border border-white/10 bg-[#aaf40c]/80  transition hover:scale-110 duration-300 cursor-pointer">
              <h3 className="text-2xl font-bold mb-3">Easy Booking</h3>

              <p className=" font-medium">
                Book your favorite facility within minutes.
              </p>
            </div>

            <div className="bg-[#aaf40c]/80 p-8 rounded-2xl border border-white/10 transition hover:scale-110 duration-300 cursor-pointer">
              <h3 className="text-2xl font-bold mb-3">
                Affordable Pricing
              </h3>

              <p className="font-medium">
                Flexible pricing for every type of player.
              </p>
            </div>

            <div className="bg-[#aaf40c]/80 p-8 rounded-2xl border border-white/10 transition hover:scale-110 duration-300 cursor-pointer">
              <h3 className="text-2xl font-bold mb-3">
                Premium Facilities
              </h3>

              <p className="font-medium">
                Clean, modern, and well-maintained sports venues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
