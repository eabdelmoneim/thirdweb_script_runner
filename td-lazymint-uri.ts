import { ThirdwebSDK, NFTMetadataInput } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import { readdir } from "fs/promises";
import { glob } from "glob";
import path from "path";

dotenv.config();

const run = async () => {
  // Instantiate thirdweb SDK for read/write
  // PRIVATE_KEY should be put into environment variable
  const PRIVATE_KEY = process.env.THIRDWEB_ADMIN_PRIVATE_KEY as string;
  const delayedRevealPassword = process.env.DELAYED_REVEAL_PASSWORD as string;
  const network = process.env.THIRDWEB_NETWORK as string;

  const sdk = ThirdwebSDK.fromPrivateKey(
    PRIVATE_KEY, // Your wallet private key
    network // configure this to your network
  );

  const contract = await sdk.getContract(
    process.env.THIRDWEB_CONTRACT_ADDRESS as string
  );

  const placeholderImage = readFileSync("placeholder/placeholder.png");

  // lazy mint team_reserve directories first so that they can be claimed by team before public mint
  const tribeDirs = [
    "metadata/team_reserve/angel",
    "metadata/team_reserve/builder",
    "metadata/team_reserve/connector"
  ];
  for (const tribeDir of tribeDirs) {
    // get all the sub-directories under each tribe name
    const dirs = (
      await readdir(tribeDir, {
        withFileTypes: true,
      })
    ).filter((d) => d.isDirectory());

    const tribe = tribeDir.split("/")[2];
    console.log("processing tribe: " + tribe);

    const placeholderMetadata = {
      name: "Mystery " + tribe + " Moca",
      description:
        "Mystery Moca NFT from tribe " + tribe + " to be revealed soon",
      image: placeholderImage,
    };
    for (const dir of dirs) {
      const filePath = path.resolve(tribeDir, dir.name);
      const uriFileName = glob.sync(filePath + "/uris.json", {})[0];
      console.log("uriFileName: " + uriFileName);
      const uriFile = readFileSync(uriFileName);
      const uris = JSON.parse(uriFile.toString());

      console.log(
        "delayed reveal lazy minting NFTs uris from directory: " + uriFileName
      );

      // create delayed reveal batch
      const lazyMintTx =
        await contract.erc721.tieredDrop.createDelayedRevealBatchWithTier(
          placeholderMetadata,
          uris,
          delayedRevealPassword,
          tribe
        );
    }
  }
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
