import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  // Instantiate thirdweb SDK for read/write
  // PRIVATE_KEY should be put into environment variable
  const PRIVATE_KEY = process.env.KEY as string;

  const sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    "polygon" // configure this to your network
  );

  const contract = await sdk.getContract(
    "0x7223378D975d1Aa6e47e8f302699a437135Ecb78"
  );

  /*const balance = await contract.erc721.balanceOf(
    "0x95C4267d86dB9203c7cC98b615f9FBC961fc9aE9"
  );*/

  //console.log(balance.toNumber().toString());

  const cc = await contract.erc721.claimConditions.getActive();
  console.log(cc);

  const canClaim = await contract.erc721.claimConditions.canClaim(
    100,
    "0x5e01a33C75931aD0A91A12Ee016Be8D61b24ADEB"
  );
  console.log(canClaim);
  // const res = await storage.downloadJSON(cc.metadata as string);
  // console.log(res.name);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
