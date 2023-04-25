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
    "0x4F08749EaDf5edd0e6Ff0481fB1BF0a8A54B6be0"
  );

  console.log("got contract");

  const metadataWithSupply = [{
    supply: 200, // The number of this NFT you want to mint
    metadata: {
      name: "Cool NFT #1",
      description: "This is a cool NFT",
    },
  },];

  
  

  const tx = await contract.erc1155.mintBatch.prepare(metadataWithSupply);
  const gasCost = tx.estimateGasCost();
  console.log("1155 gas cost", gasCost);

  const metadata = {
    name: "Cool NFT",
    description: "This is a cool NFT",
  };

  // create an array of metadata objects
  const metadataArray = Array(100).fill(metadata);

  const contract721 = await sdk.getContract("0x03029e52497959936249784867FB292DAD1224BD");
  const tx721 = await contract721.erc721.mintBatch.prepare(metadataArray);
  const gasCost721 = await tx721.estimateGasCost();
  console.log("721 gas cost", gasCost721);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
