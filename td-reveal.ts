import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  const network = process.env.THIRDWEB_NETWORK as string;

   // PRIVATE_KEY should be put into environment variable
   const PRIVATE_KEY = process.env.M_WALLET_KEY as string;
   const delayedRevealPassword = process.env.DELAYED_REVEAL_PASSWORD as string;
 
   const sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    "forketh",

    {
      supportedChains: [{
        chainId: 1,
        rpc: ["https://rpc-1.eth.bio/"],
        nativeCurrency: {
          name: "ETH",
          symbol: "ETH",
          decimals: 18,
        },
        slug: "forketh",
      }],
      secretKey: process.env.THIRDWEB_SECRET_KEY as string,
      
    }
  );

  const contract = await sdk.getContract(
    "0x6FF54EF8d9860552950FF3843044E36E41e9D2eF"
  );

  // the number of batches in TieredDrop is equal to the number of base URIs
  const numberOfBatches = await contract.call("getBaseURICount");
  console.log("Number of batches to be revealed: ", numberOfBatches);

  for (let i = 0; i < numberOfBatches; i++) {
    const reveal = await contract.erc721.tieredDrop.reveal(
      i,
      delayedRevealPassword
    );
    console.log("Revealed batch: ", i);
  }
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
