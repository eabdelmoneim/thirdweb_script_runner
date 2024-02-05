import { ThirdwebSDK, getDefaultTrustedForwarders, predictThirdwebContractAddress } from "@thirdweb-dev/sdk";
import { Rari} from "@thirdweb-dev/chains";
import dotenv from "dotenv";

dotenv.config();


const run = async () => {

const sdk = ThirdwebSDK.fromPrivateKey(process.env.THIRDWEB_ADMIN_PRIVATE_KEY as string, Rari,{secretKey: process.env.THIRDWEB_SECRET_KEY as string});

const contract = await sdk.getContract("0xf82427790E0c4E0C9a701655b53C8708d5FeFb19");

const tx = await contract.erc721.claimTo("0x749CaA9A7bbF7D5aEb8Ea6E92335AFa2f74dE4EE", 1);
console.log(tx);

};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
