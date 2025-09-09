// /Context/CrowdFunding.js
import React, { createContext, useContext, useState } from "react";

export const CrowdFundingContext = createContext();

export const CrowdFundingProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [donations, setDonations] = useState({});
  const [currentAccount, setCurrentAccount] = useState(null);

  // Connect to MetaMask wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  // Check if wallet is already connected
  const checkIfWalletIsConnected = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) setCurrentAccount(accounts[0]);
    }
  };

  // run once on load
  React.useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  // Campaign functions
  const createCampaign = (data) => {
    const newCampaign = {
      id: Date.now().toString(),
      ...data,
      creator: currentAccount,
    };
    setCampaigns((prev) => [...prev, newCampaign]);
  };

  const getCampaigns = async () => campaigns;
  const getUserCampaigns = async (userId) => campaigns.filter((c) => c.creator === userId);

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

  const getDonations = async (campaignId) => donations[campaignId] || [];

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
        currentAccount,
        connectWallet,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  );
};

export const useCrowdFunding = () => useContext(CrowdFundingContext);
