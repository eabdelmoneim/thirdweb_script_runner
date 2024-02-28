import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Mumbai} from "@thirdweb-dev/chains"; 
import dotenv from "dotenv";

dotenv.config();


const run = async () => {

const sdk = ThirdwebSDK.fromPrivateKey(process.env.THIRDWEB_ADMIN_PRIVATE_KEY as string, Mumbai,{secretKey: process.env.THIRDWEB_SECRET_KEY as string, gasless: {engine : {relayerUrl: process.env.RELAYER_URL as string}}});

const contract = await sdk.getContract("0xcf17e1989514d5e0f8e689e1f0639f11d1f238ec");

const tx = await contract.erc721.claimTo("0x6db6CbBb46ae5007f24860d408fF59322C9551F1", 1);
console.log(tx);

};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
