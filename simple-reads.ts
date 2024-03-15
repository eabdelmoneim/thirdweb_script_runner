import { ThirdwebSDK} from "@thirdweb-dev/sdk";
import { XaiSepolia } from "@thirdweb-dev/chains";
import dotenv from "dotenv";

dotenv.config();


const run = async () => {

// connect to the SDK with the wallet using the relayer URL for the Mumbai testnet
const sdk = ThirdwebSDK.fromPrivateKey(process.env.THIRDWEB_ADMIN_PRIVATE_KEY as string, XaiSepolia,{secretKey: process.env.THIRDWEB_SECRET_KEY as string});

const contract = await sdk.getContract("0x00189f2AdBBA4Ab31777543476210F4946401aa5", );

const result = await contract.call("testRelayerCall",["1","2","3","4"]);
console.log(result.toString());

};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
