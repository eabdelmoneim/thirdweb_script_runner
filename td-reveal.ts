import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
import { BigNumber } from "ethers";

dotenv.config();

const run = async () => {
  // Instantiate thirdweb SDK for read/write
  // PRIVATE_KEY should be put into environment variable
  const PRIVATE_KEY = process.env.KEY as string;
  const delayedRevealPassword = process.env.DELAYED_REVEAL_PASSWORD as string;

  const sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    "goerli" // configure this to your network
  );

  const contract = await sdk.getContract(
    "0x3929CdE8141b900A28FEf6eC930431EA5fb69398"
  );

  const numberOfBatches = 10;
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
