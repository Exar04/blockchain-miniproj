// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

task("accounts", "prints the list of accounts", async(taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts){
    console.log(account.address)
  }
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_RINKEBY_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    }
  }
};
