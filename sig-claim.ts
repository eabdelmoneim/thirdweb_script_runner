import { ThirdwebSDK, NFTMetadataInput } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
import {utils} from "ethers"

dotenv.config();

const run = async () => {
  // Instantiate thirdweb SDK for read/write
  // PRIVATE_KEY should be put into environment variable
  const PRIVATE_KEY = process.env.THIRDWEB_ADMIN_PRIVATE_KEY as string;
  const network = process.env.THIRDWEB_NETWORK as string;

  const sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    network, // configure this to your network
    {secretKey: process.env.THIRDWEB_SECRET_KEY as string}
  );

  const contract = await sdk.getContract("0x4d2Dd3641e93dcF142c1a4bDeD5CC65344d8e9C6");

  console.log("got contract");

  const payload = await contract.erc721.signature.generate({
    to: "0xeAa5a7D7fA42CBAff443FE1BDB764E608E039F97",
    quantity: 1,
    currencyAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    price: 0,
    uid: utils.solidityKeccak256(["address"],["0xeAa5a7D7fA42CBAff443FE1BDB764E608E039F97"]).toString(),
  });
  console.log(payload);

  console.log("minting NFT with signature");
  const claimTx = await contract.erc721.signature.mint(payload);
  console.log(claimTx);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
