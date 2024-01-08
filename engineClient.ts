import dotenv from "dotenv";
import { Engine } from "@thirdweb-dev/engine";

dotenv.config();


const run = async () => {
  try {
    // create Engine connection
    const engine = new Engine({
        url: process.env.THIRDWEB_ENGINE_URL as string,
        accessToken: process.env.THIRDWEB_ENGINE_ACCESS_TOKEN as string,
    });

    const redKeyBalance = await engine.erc1155.balanceOf("0xc3F2b2a12Eba0f5989cD75B2964E31D56603a2cE", "0", "arbitrum-sepolia", "0x55FC5F6EbCd258aFc8958b897cC0f8cb054a0c10");
    console.log(redKeyBalance);

  } catch (err) {
    console.error(err);
  }

};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
