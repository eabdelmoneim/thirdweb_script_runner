import { ThirdwebSDK, getDefaultTrustedForwarders, predictThirdwebContractAddress } from "@thirdweb-dev/sdk";
import { LocalWallet } from "@thirdweb-dev/wallets";
import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";
import dotenv from "dotenv";

dotenv.config();


const run = async () => {

// connect to the SDK with the wallet using the relayer URL for the Mumbai testnet
const sdk = ThirdwebSDK.fromPrivateKey(process.env.THIRDWEB_ADMIN_PRIVATE_KEY as string, BaseSepoliaTestnet,{secretKey: process.env.THIRDWEB_SECRET_KEY as string});

const contract = await sdk.getContract("0xC5e6BbEc31F690BCc4E95E36f3f2Cf7f2FdEDF1c");

const balance = await contract.erc721.balanceOf("0x749CaA9A7bbF7D5aEb8Ea6E92335AFa2f74dE4EE");
console.log(balance.toNumber());

};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
