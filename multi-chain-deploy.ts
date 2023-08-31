import { config } from "dotenv";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Goerli, Mumbai } from "@thirdweb-dev/chains";

config();

// chains to deploy to
const chainsToDeployTo = [Goerli, Mumbai];
// the name of the published contract to deploy ex: AccountFactory for the contract https://thirdweb.com/thirdweb.eth/AccountFactory
const publishedContractToDeploy = "DropERC721";
// The full list of constructor arguments for the published contract (for AccountFactory we just need the Entrypoint address)
const publishedContractConstructorArguments = [
  "MyMultiChainNFT",
  "0xc3F2b2a12Eba0f5989cD75B2964E31D56603a2cE",
];

const main = async () => {
  if (!process.env.THIRDWEB_ADMIN_PRIVATE_KEY) {
    throw new Error("No private key found");
  }

  try {
    for (const chain of chainsToDeployTo) {
      const sdk = ThirdwebSDK.fromPrivateKey(
        process.env.THIRDWEB_ADMIN_PRIVATE_KEY,
        chain,
        {
          secretKey: process.env.THIRDWEB_SECRET_KEY,
        }
      );
      // shows how to predict the address of any published contract
      // const predictedAddress = await sdk.deployer.predictAddressDeterministic(
      //   publishedContractToDeploy,
      //   publishedContractConstructorArguments
      // );
      // console.log("deploying on", chain.slug, "at address:", predictedAddress);

      // // shows how to deploy a published contract at a deterministic address
      // const deployedAddress =
      //   await sdk.deployer.deployPublishedContractDeterministic(
      //     publishedContractToDeploy,
      //     publishedContractConstructorArguments
      //   );

      const deployedAddress = await sdk.deployer.deployBuiltInContract("token",{name: "MyToken", primary_sale_recipient: "0xc3F2b2a12Eba0f5989cD75B2964E31D56603a2cE"},"latest",{saltForProxyDeploy: "eabdelmoneim"})
      console.log(
        "--> succesfully deployed on",
        chain.slug,
        "at address:",
        deployedAddress
      );
    }
  } catch (e) {
    console.error("Something went wrong: ", e);
  }
};

main();