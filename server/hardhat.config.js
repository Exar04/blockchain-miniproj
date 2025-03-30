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
      // url: process.env.ALCHEMY_RINKEBY_URL,
      // accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      url: "https://eth-sepolia.g.alchemy.com/v2/y47tYwP3MyVXk466csf0DcLpa03zlXT4",
      accounts: ["30aa77404e396fa859289e54ad27819094fed908cf041bd147d32342b37b3d1d"],
    }
  }
};
