import { utils } from "ethers";
import { MerkleTree } from "@thirdweb-dev/merkletree";

import dotenv from "dotenv";

dotenv.config();


const run = async () => {

    const leaves = [utils.solidityKeccak256(
        ["uint256", "address"],
        ["53", "0x749CaA9A7bbF7D5aEb8Ea6E92335AFa2f74dE4EE"] // update this
    )];
    const tree = new MerkleTree(leaves, utils.keccak256, { sort: true });
    const root = tree.getHexRoot();
    const proof = tree.getHexProof(leaves[0]);
    console.log(root)

};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
