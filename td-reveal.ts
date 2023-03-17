import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  const PRIVATE_KEY = process.env.THIRDWEB_ADMIN_PRIVATE_KEY as string;
  const delayedRevealPassword = process.env.DELAYED_REVEAL_PASSWORD as string;
  const network = process.env.THIRDWEB_NETWORK as string;

  const sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    network // configure this to your network
  );

  const contract = await sdk.getContract(
    process.env.THIRDWEB_CONTRACT_ADDRESS as string
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
