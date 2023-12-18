import { ThirdwebSDK, getDefaultTrustedForwarders, predictThirdwebContractAddress } from "@thirdweb-dev/sdk";
import { LocalWallet } from "@thirdweb-dev/wallets";
import { Mumbai, Ethereum, ArbitrumGoerli, ModeTestnet } from "@thirdweb-dev/chains";
import dotenv from "dotenv";

dotenv.config();


const run = async () => {

// connect to the SDK with the wallet using the relayer URL for the Mumbai testnet
const sdk = ThirdwebSDK.fromPrivateKey(process.env.KEY as string, ModeTestnet,{secretKey: process.env.THIRDWEB_SECRET_KEY as string});

const contract = await sdk.getContractFromAbi('0x4200000000000000000000000000000000000006',[
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "src",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "guy",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
          }
      ],
      "name": "Approval",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "dst",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
          }
      ],
      "name": "Deposit",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "src",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "dst",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
          }
      ],
      "name": "Transfer",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "src",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
          }
      ],
      "name": "Withdrawal",
      "type": "event"
  },
  {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "allowance",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "guy",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
          }
      ],
      "name": "approve",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
          {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "dst",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
          }
      ],
      "name": "transfer",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "src",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "dst",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
          }
      ],
      "name": "transferFrom",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
          }
      ],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }
]);
console.log(contract);
//const canClaim = await contract.erc721.claimConditions.canClaim(11, "0x749CaA9A7bbF7D5aEb8Ea6E92335AFa2f74dE4EE");
//console.log(canClaim);

//const trustedForwarders = await getDefaultTrustedForwarders(Mumbai.chainId);

//const newContract = await sdk.deployer.deployReleasedContract.prepare("0x2Ee4c2e9666Ff48DE2779EB6f33cDC342d761372","LoyaltyCard",["0xF11D6862e655b5F4e8f62E00471261D2f9c7E380", "My Loyalty Contract", "test deploy using SDK", "", trustedForwarders, "0xF11D6862e655b5F4e8f62E00471261D2f9c7E380", "0xF11D6862e655b5F4e8f62E00471261D2f9c7E380", 0, 0, "0xF11D6862e655b5F4e8f62E00471261D2f9c7E380"]);
//console.log("Contract address: ", newContract);

// const addr = await predictThirdwebContractAddress(
//   "MarketplaceV3",
//   137,
//   sdk.storage,
//   "latest",
//   sdk.options.clientId,
//   sdk.options.secretKey
// );

// console.log("Contract address: ", addr);

};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
