import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { XaiGoerliOrbit } from "@thirdweb-dev/chains";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  // Instantiate thirdweb SDK for read/write
  // PRIVATE_KEY should be put into environment variable
  const PRIVATE_KEY = process.env.KEY as string;

  const sdk = ThirdwebSDK.fromPrivateKey(
    "PRIVATE_KEY", // Your wallet private key
    XaiGoerliOrbit, // configure this to your network
    {secretKey: process.env.THIRDWEB_SECRET_KEY as string}
  );

  const contract = await sdk.getContract(
    "0x28D6a17986fB8d111144dF10aB66f67194e62A73"
  );
  console.log(contract.getAddress());

  const tx = await contract.erc1155.claim(0,1);
  console.log(tx);
  /*const balance = await contract.erc721.balanceOf(
    "0x95C4267d86dB9203c7cC98b615f9FBC961fc9aE9"
  );*/

  //console.log(balance.toNumber().toString());

  // const res = await storage.downloadJSON(cc.metadata as string);
  // console.log(res.name);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
