import { config } from "dotenv";
import {
  createThirdwebClient,
  encode,
  getContract,
  prepareContractCall,
  sendTransaction,
  waitForReceipt,
} from "thirdweb";
import { base } from "thirdweb/chains";
import {
  generateMintSignature,
  mintWithSignature,
} from "thirdweb/extensions/erc721";
import { privateKeyToAccount } from "thirdweb/wallets";

config();

const main = async () => {
  if (!process.env.WALLET_PRIVATE_KEY) {
    throw new Error("No private key found");
  }
  if (!process.env.THIRDWEB_SECRET_KEY) {
    throw new Error("No THIRDWEB_SECRET_KEY found");
  }
  try {
    const chain = base;
    const client = createThirdwebClient({
      secretKey: process.env.THIRDWEB_SECRET_KEY,
    });
    const account = privateKeyToAccount({
      client,
      privateKey: process.env.WALLET_PRIVATE_KEY,
    });

    const contract = getContract({
      client,
      chain,
      address: "0x25eacbE93C4Ea41720924edaeCe593CDE02BD7B3",
    });

    const encodedTxArray = [];

    // limit total gas used by multicall to around half of the block gas limit. For this example, that comes out to ~60 items for the multicall
    for (let index = 0; index < 60; index++) {
      const { payload, signature } = await generateMintSignature({
        account,
        contract,
        mintRequest: {
          to: "0x0E555C3c76ea7231D37B942BA89143023E32D4c9",
          metadata: {
            name: "Multicall NFT",
            description: "This is my NFT",
            image:
              "ipfs://QmciR3WLJsf2BgzTSjbG5zCxsrEQ8PqsHK7JWGWsDSNo46/nft.png",
          },
        },
      });

      const preparedTx = mintWithSignature({
        contract,
        payload,
        signature,
      });

      let encodedTx = await encode(preparedTx);
      encodedTxArray.push(encodedTx);
    }

    const transaction = prepareContractCall({
      contract,
      method: "function multicall(bytes[])", // from the docs: https://portal.thirdweb.com/contracts/build/extensions/general/Multicall
      params: [encodedTxArray as `0x${string}`[]],
    });

    const transactionResult = await sendTransaction({ transaction, account });
    const receipt = await waitForReceipt(transactionResult);
    console.log("transactionResult", transactionResult);
    console.log("receipt", receipt);
  } catch (err) {
    console.error("Something went wrong: ", err);
  }
};

main();
