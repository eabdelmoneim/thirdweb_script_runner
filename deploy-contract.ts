import { ThirdwebSDK, getDefaultTrustedForwarders } from "@thirdweb-dev/sdk";
import { LocalWallet } from "@thirdweb-dev/wallets";
import { Mumbai } from "@thirdweb-dev/chains";
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

const trustedForwarders = await getDefaultTrustedForwarders(Mumbai.chainId);

const newContract = await sdk.deployer.deployReleasedContract("0x2Ee4c2e9666Ff48DE2779EB6f33cDC342d761372","LoyaltyCard",["0xF11D6862e655b5F4e8f62E00471261D2f9c7E380", "My Loyalty Contract", "test deploy using SDK", "", trustedForwarders, "0xF11D6862e655b5F4e8f62E00471261D2f9c7E380", "0xF11D6862e655b5F4e8f62E00471261D2f9c7E380", 0, 0, "0xF11D6862e655b5F4e8f62E00471261D2f9c7E380"]);
console.log("Contract address: ", newContract);

};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
