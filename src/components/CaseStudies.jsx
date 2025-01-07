import React from "react";
import caseStudies from "../utils/caseStudies";

const CaseStudies = () => {
  return (
    <section className="pt-24 pb-16 bg-white" id="#use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* headline and description */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-8 rounded-md">
            <h2 className="text-2xl font-bold">Case Studies</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies
            </p>
          </div>
        </div>

        {/*case study  */}
<div className="bg-black text-white p-8 rounded-md">
<div>
  {caseStudies.map((study,index) =>(
<div key={index}>
  <h3>{study.title}</h3>
  <p>{study.description}</p>
  <a href="#" className="text-primary flex items-center hover:underline">Learn More</a>
   </div>
  ))}
</div>


</div>




      </div>
    </section>
  );
};

export default CaseStudies;
