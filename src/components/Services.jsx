import React from "react";

const Services = () => {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* headline and description */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Services</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              At our digital marketing agency,we offer a range of services to
              help business grow and succeed online.These service includes:
            </p>
          </div>
        </div>

        {/* services card */}
      </div>
    </section>
  );
};

export default Services;
