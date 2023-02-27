import { ThirdwebSDK, NFTMetadataInput } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";

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

  console.log("got contract");

  const payload = await contract.erc1155.signature.generateFromTokenId({
    to: "0xc3F2b2a12Eba0f5989cD75B2964E31D56603a2cE",
    tokenId: 0,
    quantity: 1,
    currencyAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    price: 0.5,
  });
  console.log(payload);

  console.log("minting NFT with signature");
  const claimTx = await contract.erc1155.signature.mint(payload);
  console.log(claimTx);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
