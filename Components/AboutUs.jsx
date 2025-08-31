import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#fdeaea] py-16 px-6 sm:px-12 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About Us 
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          FundEther is a platform designed to empower individuals and organizations to raise funds for meaningful causes. Our goal is to connect supporters with projects that make a difference — whether it's helping a community in crisis, funding education, or launching an innovative solution to a global problem.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With an easy-to-use interface, secure donation system, and a passionate community, Fundether provides all the tools you need to start, manage, and grow a fundraising campaign. Join us in making the world a better place, one campaign at a time.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
