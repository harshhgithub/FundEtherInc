import React, { useState, useContext } from "react";
import { useAuth } from "../Context/AuthContext"; // ✅ import auth context
import { useRouter } from "next/router";
import { CrowdFundingContext } from "../Context/CrowdFunding";

const Hero = () => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const { createCampaign } = useContext(CrowdFundingContext);
  const { user } = useAuth(); // ✅ get user
  const router = useRouter();

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      await createCampaign(campaign);
      window.location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="relative">
      <div className="relative h-[710px]">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/9486890/pexels-photo-9486890.jpeg"
          alt="Hero"
          className="object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left Side Text */}
              <div className="text-white w-full lg:w-1/2">
                <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
                  FundEther
                </h1>
                <p className="text-lg lg:text-xl max-w-xl text-gray-200">
                  Join us to discover, support and share campaigns that bring
                  hope and empowerment to those in need.
                </p>
              </div>

              {/* Right Side Form or Login Prompt */}
              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-md">
                {user ? (
                  <>
                    <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                      Create Campaign
                    </h3>
                    <form onSubmit={createNewCampaign} className="space-y-3">
                      <input
                        onChange={(e) =>
                          setCampaign({ ...campaign, title: e.target.value })
                        }
                        placeholder="Title"
                        required
                        type="text"
                        className="w-full h-12 px-4 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
                      />
                      <input
                        onChange={(e) =>
                          setCampaign({ ...campaign, description: e.target.value })
                        }
                        placeholder="Description"
                        required
                        type="text"
                        className="w-full h-12 px-4 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
                      />
                      <input
                        onChange={(e) =>
                          setCampaign({ ...campaign, amount: e.target.value })
                        }
                        placeholder="Target Amount (ETH)"
                        required
                        type="number"
                        className="w-full h-12 px-4 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
                      />
                      <input
                        onChange={(e) =>
                          setCampaign({ ...campaign, deadline: e.target.value })
                        }
                        required
                        type="date"
                        className="w-full h-12 px-4 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
                      />
                      <button
                        type="submit"
                        className="w-full h-12 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
                      >
                        Create Campaign
                      </button>
                      <p className="text-sm text-gray-500 text-center">
                        Create your campaign to raise funds
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      Please Log In
                    </h3>
                    <p className="text-gray-600 mb-4">
                      You need to log in to create a campaign.
                    </p>
                    <button
                      onClick={() => router.push("/login")}
                      className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
                    >
                      Go to Login
                    </button>
                  </div>
                )}
              </div>
              {/* End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
