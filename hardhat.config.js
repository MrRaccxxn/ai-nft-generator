require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      chainId: 11155111,
      url: process.env.REACT_APP_ALCHEMY_PROVIDER,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
  },
};
