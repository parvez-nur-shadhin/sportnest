import React from "react";

const FAQ = () => {
  return (
    <div className="container mx-auto space-y-4 p-4 my-10">
        <h1 className="text-white text-center font-bold text-5xl mb-10">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div className=" collapse collapse-plus bg-[#aaf40c] border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            What types of facilities can I book?
          </div>
          <div className="collapse-content text-sm">
            You can book different types of sports and event facilities,
            including football fields, badminton courts, basketball courts, and
            indoor event spaces.
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#aaf40c] border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Can I cancel or reschedule my booking?
          </div>
          <div className="collapse-content text-sm">
            Yes, you can cancel or reschedule your booking depending on
            availability and the cancellation policy of the facility.
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#aaf40c] border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do I confirm my booking payment?
          </div>
          <div className="collapse-content text-sm">
            After completing the payment, you will receive a booking
            confirmation message and email with all your reservation details.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
