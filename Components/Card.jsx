import React from "react";
import { FaBullseye, FaCoins, FaClock } from "react-icons/fa";

const Card = ({ allcampaign, setOpenModel, setDonate, title, userWallet }) => {
  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays.toFixed(0);
  };

  const myCampaigns = userWallet
    ? allcampaign?.filter(
        (c) => c.owner?.toLowerCase() === userWallet.toLowerCase()
      )
    : [];

  const CardItem = ({ campaign, index, prefix = "" }) => (
    <div
      key={`${prefix}${index}`}
      onClick={() => {
        setDonate(campaign);
        setOpenModel(true);
      }}
      className="cursor-pointer group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1"
    >
      <img
        src="https://images.pexels.com/photos/5697262/pexels-photo-5697262.jpeg"
        alt="Campaign"
        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="p-5 space-y-3">
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <FaClock className="text-yellow-600" />
          {daysLeft(campaign.deadline)} days left
        </p>
        <h3 className="text-lg font-bold text-gray-800">
          {campaign.title}
        </h3>
        <p className="text-sm text-gray-600">
          {campaign.description.length > 60
            ? campaign.description.slice(0, 60) + "..."
            : campaign.description}
        </p>
        <div className="pt-2 space-y-1 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <FaBullseye className="text-green-700" />
            Target: {campaign.target} ETH
          </p>
          <p className="flex items-center gap-2">
            <FaCoins className="text-orange-600" />
            Collected: {campaign.amountCollected || 0} ETH
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full px-6 py-16 mx-auto max-w-7xl bg-gray-50 space-y-20">
      {/* All Campaigns Section */}
      {allcampaign?.length > 0 && (
        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="pb-8 text-4xl font-bold text-center text-gray-800">
            {title}
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allcampaign.map((campaign, i) => (
              <CardItem campaign={campaign} index={i} key={i} />
            ))}
          </div>
        </div>
      )}

      {/* My Campaigns Section */}
      {myCampaigns.length > 0 && (
        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="pb-8 text-4xl font-bold text-center text-gray-800">
            My Campaigns
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {myCampaigns.map((campaign, i) => (
              <CardItem campaign={campaign} index={i} prefix="my-" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
