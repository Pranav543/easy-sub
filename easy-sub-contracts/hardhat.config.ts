import { HardhatUserConfig } from "hardhat/config";

import * as dotenv from "dotenv";
dotenv.config();


const config: HardhatUserConfig = {
  defaultNetwork: "base-sepolia",
  networks: {
    // for Sepolia testnet
   "base-sepolia": {
    url: "https://sepolia.base.org",
    accounts: [process.env.WALLET_PRIVATE_KEY as string],
    gasPrice: 1000000000,
  },
  },
  solidity: {
    version: "0.8.17",
  },
};

export default config;
