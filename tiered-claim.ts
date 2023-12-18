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
  // test claim one of the NFTs
  const tribePriority = ["angel","builder","connector"]; // mint 178, 178, 177

  const payload = await contract.erc721.tieredDrop.generate({
    to: "0x8e357f619040d1B98b700792b38a4BAD1ca61fd1",
    quantity: 10,
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
