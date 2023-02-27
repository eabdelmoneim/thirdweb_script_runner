import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  // Instantiate thirdweb SDK for read/write
  // PRIVATE_KEY should be put into environment variable
  const PRIVATE_KEY = process.env.KEY as string;

  let sdkOptions = {
    gasless: {
      biconomy: {
        apiKey: "different key",
        apiId: "different api ID",
      },
    },
  };
  let sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    "mumbai", // configure this to your network
    sdkOptions
  );

  sdkOptions = {
    gasless: {
      biconomy: {
        apiKey: "<api-Key-from-Biconomy>",
        apiId: "<api-Id-from-Biconomy>",
      },
    },
  };

  sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    "goerli", // configure this to your network
    sdkOptions
  );

  console.log(sdk);

  const contract = await sdk.getContract(
    "0x22CC74e471517C599e819ff2808729d5796Aa0ae"
  );

  const tx = await contract.erc721.claim(1);

  //const cp = await contract.erc721.claimConditions.getActive();
  //console.log(cp);
  //console.log(contract.erc721);
  // const res = await storage.downloadJSON(cc.metadata as string);
  // console.log(res.name);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
