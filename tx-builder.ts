import { ThirdwebSDK, NFTMetadataInput } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
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
    "0xcd7806bB7aEe3dc8F61c27587a06e5b338544dD7"
  );

  console.log("got contract");

  const metadataWithSupply = [{
    supply: 500, // The number of this NFT you want to mint
    metadata: {
      name: "Cool NFT #1",
      description: "This is a cool NFT",
    },
  },];

  const tx = await contract.erc1155.claim.prepare(0,1);
  const gasCost = await tx.estimateGasCost();
  console.log("1155 gas cost for claiming 1", gasCost.wei);

  const tx2 = await contract.erc1155.airdrop.prepare(0,[{address: "0xc3F2b2a12Eba0f5989cD75B2964E31D56603a2cE", quantity: 1}]);
  const gasCost2 = await tx2.estimateGasCost();
  console.log("1155 gas cost for airdrop 1", gasCost2.wei.toNumber() / Math.pow(10,14));

  const metadata = {
    name: "Cool NFT",
    description: "This is a cool NFT",
  };

  // create an array of metadata objects
  // const metadataArray = Array(100).fill(metadata);

  // const contract721 = await sdk.getContract("0x03029e52497959936249784867FB292DAD1224BD");
  // const tx721 = await contract721.erc721.mintBatch.prepare(metadataArray);
  // const gasCost721 = await tx721.estimateGasCost();
  // console.log("721 gas cost", gasCost721);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
