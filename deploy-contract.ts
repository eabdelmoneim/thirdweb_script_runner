import { NFTCollection, ThirdwebSDK, getDefaultTrustedForwarders, predictThirdwebContractAddress } from "@thirdweb-dev/sdk";
import { LocalWallet } from "@thirdweb-dev/wallets";
import { Mumbai } from "@thirdweb-dev/chains";
import dotenv from "dotenv";

dotenv.config();


const run = async () => {
  
// create a new wallet for the Mumbai and Goerli testnet
// const wallet = new LocalWallet({
//   chain: Mumbai,
// });
// const walletAddress = await wallet.generate();
// await wallet.connect();
// console.log("Wallet address: ", walletAddress);

// connect to the SDK with the wallet using the relayer URL for the Mumbai testnet
const sdk = ThirdwebSDK.fromPrivateKey(process.env.KEY as string, Mumbai,{secretKey: process.env.THIRDWEB_SECRET_KEY as string});
const walletAddress = "0xc3F2b2a12Eba0f5989cD75B2964E31D56603a2cE";
const contract = await sdk.getContract('0xfd7387700d206551A5BF41CEc3011A24f59DE67D');

// const tx = await contract.prepare("createAccount", ["0xc3F2b2a12Eba0f5989cD75B2964E31D56603a2cE", "0x"]);
// const gas = await tx.estimateGasCost();
// console.log("gas: ", gas);
const trustedForwarders = await getDefaultTrustedForwarders(Mumbai.chainId);

const newContract = await sdk.deployer.deployPublishedContract(
  "0xdd99b75f095d0c4d5112aCe938e4e6ed962fb024",
  "Pack",
  [
    walletAddress, 
    "My Pack", 
    "test deploy using SDK",
    "",
    trustedForwarders, 
    walletAddress,
    500,
  ],
  "5.0.2"
  );
console.log("Contract address: ", newContract);

//console.log("Contract address: ", newContract);

// const addr = await predictThirdwebContractAddress(
//   "MarketplaceV3",
//   137,
//   sdk.storage,
//   "latest",
//   sdk.options.clientId,
//   sdk.options.secretKey
// );

// console.log("Contract address: ", addr);

};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
