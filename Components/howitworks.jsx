import React from "react";
import { FiEdit, FiShare2, FiDollarSign } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiEdit size={36} className="text-gray-800 mb-4" />,
      title: "Create Campaign",
      description: "Sign in and start your campaign by sharing your story and funding goal.",
    },
    {
      icon: <FiShare2 size={36} className="text-gray-800 mb-4" />,
      title: "Share with Community",
      description: "Share your campaign with friends, family, and the public to gain support.",
    },
    {
      icon: <FiDollarSign size={36} className="text-gray-800 mb-4" />,
      title: "Receive Funds",
      description: "Track donations and manage your campaign easily in real-time.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">How It Works</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
