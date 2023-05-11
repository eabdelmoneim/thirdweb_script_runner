import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { LocalWallet } from "@thirdweb-dev/wallets";
import { Mumbai } from "@thirdweb-dev/chains";
import { readFileSync } from "fs";
import dotenv from "dotenv";

dotenv.config();


const run = async () => {
  
// create a new wallet for the Mumbai and Goerli testnet
const wallet = new LocalWallet({
  chain: Mumbai,
});
const walletAddress = await wallet.generate();
await wallet.connect();
console.log("Wallet address: ", walletAddress);

// connect to the SDK with the wallet using the relayer URL for the Mumbai testnet
const sdk = await ThirdwebSDK.fromWallet(wallet, "mumbai",{
  gasless: {
     // By specifying a gasless configuration - all transactions will get forwarded to enable gasless transactions
    openzeppelin: {
      relayerUrl: process.env.RELAYER_URL as string, // your relayer URL
    },
  },
}
);
// create a new NFT contract
const contractAddress = await sdk.deployer.deployBuiltInContract("nft-collection", {
  name: "My NFT Collection",
  primary_sale_recipient: walletAddress,
});
console.log("Contract address: ", contractAddress);
const contract = await sdk.getContract(contractAddress);

// create a test user wallet that will receive the NFTs
const userWallet = new LocalWallet({
  chain: Mumbai,
});
const userWalletAddress = await userWallet.generate();
console.log("User wallet address: ", userWalletAddress);

// setup metadata for the NFTs that will be minted
const metadatas = [
  {
    name: "Blue Star",
    description: "A blue star NFT",
    image: readFileSync("assets/black-star.png"),
  },
  {
    name: "Red Star",
    description: "A red star NFT",
    image: readFileSync("assets/red-star.png"),
  },
  {
    name: "Yellow Star",
    description: "A yellow star NFT",
    image: readFileSync("assets/yellow-star.png"),
  },
];

// mint the NFTs to the user wallet
const tx = await contract.erc721.mintBatchTo(userWalletAddress, metadatas);
console.log("Successfully Minted NFTs to user wallet!!!");

};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
