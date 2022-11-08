import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  // Addresses and quantities to claim
  const addresses = [
    "0xeAa5a7D7fA42CBAff443FE1BDB764E608E039F97",
    "0xc3F2b2a12Eba0f5989cD75B2964E31D56603a2cE",
  ];
  const quantities = [2, 1];

  // Instantiate thirdweb SDK for read/write
  // PRIVATE_KEY should be put into environment variable
  const PRIVATE_KEY = process.env.KEY as string;

  const sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    "goerli" // configure this to your network
  );

  const contract = await sdk.getContract(
    "0xF52900bDa78e495F4a5E2384d822B7cCcF1c13F0"
  );

  const encodedFnData: string[] = [];
  // Loop through addresses and quantities to claim and encode the function data
  for (let i = 0; i < 2; i++) {
    const claim1 = await contract.erc721.getClaimTransaction(
      addresses[i],
      quantities[i]
    );
    encodedFnData.push(await claim1.encodeFunctionData());
  }

  // Call the multicall function with the encoded function data
  const batchTx = await contract.call("multicall", encodedFnData);
  console.log(batchTx);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
