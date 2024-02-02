import { ThirdwebSDK, getDefaultTrustedForwarders, predictThirdwebContractAddress } from "@thirdweb-dev/sdk";
import { LocalWallet } from "@thirdweb-dev/wallets";
import { Mumbai, Ethereum, ArbitrumGoerli, ModeTestnet, Polygon, FlagTestnet, Flag } from "@thirdweb-dev/chains";
import dotenv from "dotenv";

dotenv.config();


const run = async () => {

// connect to the SDK with the wallet using the relayer URL for the Mumbai testnet
const sdk = ThirdwebSDK.fromPrivateKey(process.env.THIRDWEB_ADMIN_PRIVATE_KEY as string, FlagTestnet,{secretKey: process.env.THIRDWEB_SECRET_KEY as string});

const contract = await sdk.getContract("0xDc58c5eBB09719fa94f1390793EDA043c1776DFe");
//const contract = await sdk.getContract("0x97cbc89109beF0Dae0b5B0fC833eA78ef7Eccd45");
//console.log(contract);

const tx = await contract.erc721.claimTo("0x749CaA9A7bbF7D5aEb8Ea6E92335AFa2f74dE4EE", 1);
console.log(tx);
const balance = await contract.erc721.balanceOf("0x749CaA9A7bbF7D5aEb8Ea6E92335AFa2f74dE4EE");
//const tx = await contract.erc721.claimTo.prepare("0x749CaA9A7bbF7D5aEb8Ea6E92335AFa2f74dE4EE", 1);
//tx.setType(0); 
// //tx.setGasLimit(300000);
// tx.setMaxFeePerGas(undefined);
// tx.setMaxPriorityFeePerGas(undefined);
//tx.setGasPrice(20)
// const receipt = await tx.send();
// console.log(receipt);

// const token = await contract.erc721.get(976);
// console.log(token);
//const canClaim = await contract.erc721.claimConditions.canClaim(11, "0x749CaA9A7bbF7D5aEb8Ea6E92335AFa2f74dE4EE");
//console.log(canClaim);

//const trustedForwarders = await getDefaultTrustedForwarders(Mumbai.chainId);

//const newContract = await sdk.deployer.deployReleasedContract.prepare("0x2Ee4c2e9666Ff48DE2779EB6f33cDC342d761372","LoyaltyCard",["0xF11D6862e655b5F4e8f62E00471261D2f9c7E380", "My Loyalty Contract", "test deploy using SDK", "", trustedForwarders, "0xF11D6862e655b5F4e8f62E00471261D2f9c7E380", "0xF11D6862e655b5F4e8f62E00471261D2f9c7E380", 0, 0, "0xF11D6862e655b5F4e8f62E00471261D2f9c7E380"]);
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
