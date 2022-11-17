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
    "0xD79CecAD2EB0BE9c5Dded6AF4C99e61B2222b86F"
  );

  const placeholderMetadata = {
    name: "Placeholder",
    description: "Mystery Moca NFT to be revealed soon",
  };

  const dreamerMetadata = [
    {
      name: "DREAMER 1",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 2",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 3",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 4",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 5",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 6",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 7",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 8",
      description: "Dreamer NFT 8",
    },
    {
      name: "DREAMER 9",
      description: "Dreamer NFT 9",
    },
    {
      name: "DREAMER 10",
      description: "Dreamer NFT 10",
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
      name: "BUILDER 1",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 2",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 3",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 4",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 5",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 6",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 7",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 8",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 9",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 10",
      description: "BUILDER NFT",
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
      name: "ANGEL 1",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 2",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 3",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 4",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 5",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 6",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 7",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 8",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 9",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 10",
      description: "ANGEL NFT",
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
      name: "NEO-CAPITALIST 1",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 2",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 3",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 4",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 5",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 6",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 7",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 8",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 9",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 10",
      description: "NEO-CAPITALIST NFT",
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
      name: "CONNECTOR 11",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 12",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 13",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 14",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 15",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 16",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 17",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 18",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 19",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 20",
      description: "CONNECTOR NFT",
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
