import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
import fs from "fs";
import csv from "csv-parser";

type ResultType = {
  address: string;
  quantity: number;
};

dotenv.config();

let results: ResultType[] = [];

const MAX_PER_TXN = 250;

const run = async () => {
  // Instantiate thirdweb SDK for read/write
  // PRIVATE_KEY should be put into environment variable
  const PRIVATE_KEY = process.env.KEY as string;

  // check number of transactions required based on addresses
  // divide by 250 and strip off the decimals
  const transactionCount = Math.ceil(results.length / MAX_PER_TXN);

  const sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    "goerli" // configure this to your network
  );

  const contract = await sdk.getContract(
    "0xF52900bDa78e495F4a5E2384d822B7cCcF1c13F0"
  );

  let encodedFnData: string[] = [];
  // Loop through transaction batches
  for (let c = 0; c < transactionCount; c++) {
    for (let i = 0; i < MAX_PER_TXN; i++) {
      // get current result count and break if about to out of bounds
      const current = c * MAX_PER_TXN + i;
      if (current === results.length) break;

      const claim1 = await contract.erc721.getClaimTransaction(
        results[current].address,
        results[current].quantity
      );
      encodedFnData.push(await claim1.encodeFunctionData());
    }
    // Call the multicall function with the encoded function data
    const batchTx = await contract.call("multicall", encodedFnData);
    console.log(batchTx);
    encodedFnData = [];
  }
};

// Load CSV and run file
fs.createReadStream("airdrop.csv")
  .pipe(csv())
  .on("data", (data: ResultType) => results.push(data))
  .on("end", () => {
    // console.log(results);
    run()
      .then(() => process.exit(0))
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  });
