import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  // Instantiate thirdweb SDK for read/write
  // PRIVATE_KEY should be put into environment variable
  const PRIVATE_KEY = process.env.KEY as string;

  const sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    "goerli" // configure this to your network
  );

  const contract = await sdk.getContract(
    "0xDF481f24FfA0701144823723D64BfC79c5c52647"
  );

  const placeholderMetadata = {
    name: "Placeholder",
    description: "Mystery Moca NFT to be revealed soon",
  };

  const dreamerMetadata = [
    {
      name: "DREAMER #1",
      description: "1st Dreamer NFT",
    },
    {
      name: "DREAMER #2",
      description: "2nd Dreamer NFT",
    },
    {
      name: "DREAMER #3",
      description: "3rd Dreamer NFT",
    },
    {
      name: "DREAMER #4",
      description: "4th Dreamer NFT",
    },
    {
      name: "DREAMER #5",
      description: "5th Dreamer NFT",
    },
    {
      name: "DREAMER #6",
      description: "6th Dreamer NFT",
    },
    {
      name: "DREAMER #7",
      description: "7th Dreamer NFT",
    },
    {
      name: "DREAMER #8",
      description: "8th Dreamer NFT",
    },
    {
      name: "DREAMER #9",
      description: "9th Dreamer NFT",
    },
    {
      name: "DREAMER #10",
      description: "10th Dreamer NFT",
    },
  ];

  console.log("lazy minting DREAMER");
  const dreamerTx = await contract.erc721.tieredDrop.createBatchWithTier(
    dreamerMetadata,
    "dreamer"
  );
  console.log(dreamerTx);

  const builderMetadata = [
    {
      name: "BUILDER #1",
      description: "1st BUILDER NFT",
    },
    {
      name: "BUILDER #2",
      description: "2nd BUILDER NFT",
    },
    {
      name: "BUILDER #3",
      description: "3rd BUILDER NFT",
    },
    {
      name: "BUILDER #4",
      description: "4th BUILDER NFT",
    },
    {
      name: "BUILDER #5",
      description: "5th BUILDER NFT",
    },
    {
      name: "BUILDER #6",
      description: "6th BUILDER NFT",
    },
    {
      name: "BUILDER #7",
      description: "7th BUILDER NFT",
    },
    {
      name: "BUILDER #8",
      description: "8th BUILDER NFT",
    },
    {
      name: "BUILDER #9",
      description: "9th BUILDER NFT",
    },
    {
      name: "BUILDER #10",
      description: "10th BUILDER NFT",
    },
  ];

  console.log("lazy minting BUILDER");
  const builderTx = await contract.erc721.tieredDrop.createBatchWithTier(
    builderMetadata,
    "builder"
  );
  console.log(builderTx);

  const angelMetadata = [
    {
      name: "ANGEL #1",
      description: "1st ANGEL NFT",
    },
    {
      name: "ANGEL #2",
      description: "2nd ANGEL NFT",
    },
    {
      name: "ANGEL #3",
      description: "3rd ANGEL NFT",
    },
    {
      name: "ANGEL #4",
      description: "4th ANGEL NFT",
    },
    {
      name: "ANGEL #5",
      description: "5th ANGEL NFT",
    },
    {
      name: "ANGEL #6",
      description: "6th ANGEL NFT",
    },
    {
      name: "ANGEL #7",
      description: "7th ANGEL NFT",
    },
    {
      name: "ANGEL #8",
      description: "8th ANGEL NFT",
    },
    {
      name: "ANGEL #9",
      description: "9th ANGEL NFT",
    },
    {
      name: "ANGEL #10",
      description: "10th ANGEL NFT",
    },
  ];

  console.log("lazy minting ANGEL");
  const angelTx = await contract.erc721.tieredDrop.createBatchWithTier(
    angelMetadata,
    "angel"
  );
  console.log(angelTx);

  const neoMetadata = [
    {
      name: "NEO-CAPITALIST #1",
      description: "1st NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST #2",
      description: "2nd NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST #3",
      description: "3rd NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST #4",
      description: "4th NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST #5",
      description: "5th NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST #6",
      description: "6th NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST #7",
      description: "7th NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST #8",
      description: "8th NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST #9",
      description: "9th NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST #10",
      description: "10th NEO-CAPITALIST NFT",
    },
  ];

  console.log("lazy minting NEO-CAPITALIST");
  const neoTx = await contract.erc721.tieredDrop.createBatchWithTier(
    neoMetadata,
    "neo-capitalist"
  );
  console.log(neoTx);

  const connectorMetadata = [
    {
      name: "CONNECTOR #1",
      description: "1st CONNECTOR NFT",
    },
    {
      name: "CONNECTOR #2",
      description: "2nd CONNECTOR NFT",
    },
    {
      name: "CONNECTOR #3",
      description: "3rd CONNECTOR NFT",
    },
    {
      name: "CONNECTOR #4",
      description: "4th CONNECTOR NFT",
    },
    {
      name: "CONNECTOR #5",
      description: "5th CONNECTOR NFT",
    },
    {
      name: "CONNECTOR #6",
      description: "6th CONNECTOR NFT",
    },
    {
      name: "CONNECTOR #7",
      description: "7th CONNECTOR NFT",
    },
    {
      name: "CONNECTOR #8",
      description: "8th CONNECTOR NFT",
    },
    {
      name: "CONNECTOR #9",
      description: "9th CONNECTOR NFT",
    },
    {
      name: "CONNECTOR #10",
      description: "10th CONNECTOR NFT",
    },
  ];

  console.log("lazy minting CONNECTOR");
  const connectorTx = await contract.erc721.tieredDrop.createBatchWithTier(
    connectorMetadata,
    "connector"
  );
  console.log(connectorTx);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
