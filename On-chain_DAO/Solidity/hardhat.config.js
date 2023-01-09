require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
//console.log("Url :", PRIVATE_KEY);

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

/*
NFTMarketplace deployed to:  0x3B74993683710D3396a1865cAebD878D73000bdD
CryptoDevsDAO deployed to:  0x13569f777e318284b84f0997D58824084429B15b
*/