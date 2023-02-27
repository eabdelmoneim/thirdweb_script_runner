import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  // Instantiate thirdweb SDK for read/write
  // PRIVATE_KEY should be put into environment variable
  const PRIVATE_KEY = process.env.KEY as string;
  const delayedRevealPassword = process.env.DELAYED_REVEAL_PASSWORD as string;

  const sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    "goerli" // configure this to your network
  );

  const contract = await sdk.getContract(
    "0x74c6340f456d2839239f882707A242B3A2D09FDb"
  );

  const placeholderMetadata = {
    name: "Placeholder",
    description: "Mystery Moca NFT to be revealed soon",
  };

  const dreamerMetadata = [
    {
      name: "DREAMER 31",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 32",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 33",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 34",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 35",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 36",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 37",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 38",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 39",
      description: "Dreamer NFT",
    },
    {
      name: "DREAMER 40",
      description: "Dreamer NFT",
    },
  ];

  console.log("lazy minting DREAMER");
  const dreamerTx = await contract.erc721.tieredDrop.createBatchWithTier(
    dreamerMetadata,
    "dreamer"
  );
  /* const dreamerTx = await contract.erc721.tieredDrop.createDelayedRevealBatchWithTier(
    placeholderMetadata,
    dreamerMetadata,
    delayedRevealPassword,
    "dreamer"
  ); */

  console.log(dreamerTx);

  const builderMetadata = [
    {
      name: "BUILDER 31",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 32",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 33",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 34",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 35",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 36",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 37",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 38",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 39",
      description: "BUILDER NFT",
    },
    {
      name: "BUILDER 40",
      description: "BUILDER NFT",
    },
  ];

  console.log("lazy minting BUILDER");
  const builderTx = await contract.erc721.tieredDrop.createBatchWithTier(
    builderMetadata,
    "builder"
  );
  /* const builderTx = await contract.erc721.tieredDrop.createDelayedRevealBatchWithTier(
    placeholderMetadata,
    builderMetadata,
    delayedRevealPassword,
    "builder"
  ); */
  console.log(builderTx);

  const angelMetadata = [
    {
      name: "ANGEL 31",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 32",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 33",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 34",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 35",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 36",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 37",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 38",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 39",
      description: "ANGEL NFT",
    },
    {
      name: "ANGEL 40",
      description: "ANGEL NFT",
    },
  ];

  console.log("lazy minting ANGEL");
  const angelTx = await contract.erc721.tieredDrop.createBatchWithTier(
    angelMetadata,
    "angel"
  );
  /* const angelTx = await contract.erc721.tieredDrop.createDelayedRevealBatchWithTier(
    placeholderMetadata,
    angelMetadata,
    delayedRevealPassword,
    "angel"
  ); */
  console.log(angelTx);

  const neoMetadata = [
    {
      name: "NEO-CAPITALIST 31",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 32",
      description: "NEO-CAPIALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 33",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 34",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 35",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 36",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 37",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 38",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 39",
      description: "NEO-CAPITALIST NFT",
    },
    {
      name: "NEO-CAPITALIST 40",
      description: "NEO-CAPITALIST NFT",
    },
  ];

  console.log("lazy minting NEO-CAPITALIST");
  const neoTx = await contract.erc721.tieredDrop.createBatchWithTier(
    neoMetadata,
    "neo-capitalist"
  );
  /* const neoTx = await contract.erc721.tieredDrop.createDelayedRevealBatchWithTier(
    placeholderMetadata,
    neoMetadata,
    delayedRevealPassword,
    "neo-capitalist"
  ); */
  console.log(neoTx);

  const connectorMetadata = [
    {
      name: "CONNECTOR 31",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 32",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 33",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 34",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 35",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 36",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 37",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 38",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 39",
      description: "CONNECTOR NFT",
    },
    {
      name: "CONNECTOR 40",
      description: "CONNECTOR NFT",
    },
  ];

  console.log("lazy minting CONNECTOR");
  const connectorTx = await contract.erc721.tieredDrop.createBatchWithTier(
    connectorMetadata,
    "connector"
  );
  /* const connectorlTx = await contract.erc721.tieredDrop.createDelayedRevealBatchWithTier(
    placeholderMetadata,
    connectorMetadata,
    delayedRevealPassword,
    "connector"
  ); */
  console.log(connectorTx);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
