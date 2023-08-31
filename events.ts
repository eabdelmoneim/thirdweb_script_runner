
import { ContractEvent, ThirdwebSDK } from '@thirdweb-dev/sdk';
import { XaiGoerliOrbit, Base } from "@thirdweb-dev/chains";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
    console.log("apiKey: " + process.env.THIRDWEB_SECRET_KEY as string);
    const sdk = new ThirdwebSDK(Base,{secretKey: process.env.THIRDWEB_SECRET_KEY as string});

    const contract = await sdk.getContract('0x918144e4916eb656db48f38329d72517a810f702');
    console.log("contract: " + contract.getAddress());

// get all the tokens claimed events
//const claimedEvents: ContractEvent[] = await contract.events.getEvents("RoleRevoked");

// for each event in claimedEvents add the claimer field in the event data to the claimers array
//const claimers = claimedEvents.map(claimer => claimer.data.claimer );

//console.log(claimers);

  const events = await contract.events.getAllEvents();
  
  //   // loop over events and print out the event name and data
    for (const event of events) {
      if(event.eventName.startsWith("Claim")){
      console.log(event);
      }
      // if event name starts with "Claim Conditions" then print it out
    // if(event.eventName.startsWith("TokensClaimed")){
    //   if(event.data.claimer == "0x457346566CA14EBAa228505E56e5Ba0BE8B702B8" || event.data.receiver == "0x457346566CA14EBAa228505E56e5Ba0BE8B702B8")
    //   console.log(event);
    //  }
    }

    // const canClaim = await contract.erc1155.claimConditions.canClaim(0,1, "0x7A7200714235Ed3251B66D41e1186f648585aB6f");
    // console.log(canClaim);

   // const cc = await contract.erc1155.claimConditions.getActive(0);
   // console.log(cc);
};
run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
