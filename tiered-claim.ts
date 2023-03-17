import { ThirdwebSDK, NFTMetadataInput } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import { readdir } from "fs/promises";
import { glob } from "glob";
import path from "path";

dotenv.config();

const run = async () => {
  // Instantiate thirdweb SDK for read/write
  // PRIVATE_KEY should be put into environment variable
  const PRIVATE_KEY = process.env.THIRDWEB_ADMIN_PRIVATE_KEY as string;
  const network = process.env.THIRDWEB_NETWORK as string;

  const sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    network // configure this to your network
  );

  const contract = await sdk.getContract(
    process.env.THIRDWEB_CONTRACT_ADDRESS as string
  );

  // test claim one of the NFTs
  //const tribePriority = ["angel"]; // mint 178
 // const tribePriority = ["builder"]; //mint 178
 const tribePriority = ["connector"]; // mint 177

  const payload = await contract.erc721.tieredDrop.generate({
    to: "0xc3F2b2a12Eba0f5989cD75B2964E31D56603a2cE",
    quantity: 177,
    currencyAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    price: 0,
    tierPriority: tribePriority,
  });
  // console.log(payload);

  console.log("claiming NFT");
  const claimTx = await contract.erc721.tieredDrop.claimWithSignature(payload);
  console.log(claimTx);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
