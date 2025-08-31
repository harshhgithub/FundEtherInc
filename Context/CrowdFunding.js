// /Context/CrowdFunding.js
import React, { createContext, useContext, useState } from "react";

export const CrowdFundingContext = createContext();

export const CrowdFundingProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [donations, setDonations] = useState({}); // {campaignId: [{amount, userId, date}]}

  // Create a new campaign
  const createCampaign = (data) => {
    const newCampaign = {
      id: Date.now().toString(),
      ...data,
    };
    setCampaigns((prev) => [...prev, newCampaign]);
  };

  // Get all campaigns
  const getCampaigns = async () => {
    return campaigns;
  };

  // Get campaigns created by a specific user
  const getUserCampaigns = async (userId) => {
    return campaigns.filter((c) => c.creator === userId);
  };

  // Donate to a campaign
  const donate = (campaignId, amount, userId) => {
    const donation = {
      amount,
      userId,
      date: new Date().toLocaleString(),
    };
    setDonations((prev) => ({
      ...prev,
      [campaignId]: [...(prev[campaignId] || []), donation],
    }));
  };

  // Get donations for a campaign
  const getDonations = async (campaignId) => {
    return donations[campaignId] || [];
  };

  const titlData = "Decentralized Crowdfunding Platform";

  return (
    <CrowdFundingContext.Provider
      value={{
        titlData,
        campaigns,
        createCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  );
};

// Custom hook
export const useCrowdFunding = () => useContext(CrowdFundingContext);

