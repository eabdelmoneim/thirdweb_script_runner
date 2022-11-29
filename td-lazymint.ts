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
    "0x3929CdE8141b900A28FEf6eC930431EA5fb69398"
  );

  const placeholderMetadata = {
    name: "Placeholder",
    description: "Mystery Moca NFT to be revealed soon",
  };

  const dreamerMetadata = [
    {
      name: "DREAMER 11",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 12",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 13",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 14",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 15",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 16",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 17",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 18",
      description: "Dreamer NFT 8",
    },
    {
      name: "DREAMER 19",
      description: "Dreamer NFT 9",
    },
    {
      name: "DREAMER 20",
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
      name: "BUILDER 11",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 12",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 13",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 14",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 15",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 16",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 17",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 18",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 19",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 20",
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
      name: "ANGEL 11",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 12",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 13",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 14",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 15",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 16",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 17",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 18",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 19",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 20",
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
      name: "NEO-CAPITALIST 11",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 12",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 13",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 14",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 15",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 16",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 17",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 18",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 19",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 20",
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
      name: "CONNECTOR 1",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 2",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 3",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 4",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 5",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 6",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 7",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 8",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 9",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 10",
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
