import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider } from "@coral-xyz/anchor";
import { IDL } from "./cantangler.js";

const REVERSE = Buffer.from("reverse");
const ENTANGLED = Buffer.from("entangled");
const PROGRAM_ID = "hope3SoWBf1vSGwQUe9Cez3EMxJFn2HRVVq2js9ai9E";

const wallet = Keypair.generate();
const connection = new Connection("https://rpc.hellomoon.io/3bd84347-2f2a-4be2-9653-bf99cce560c0");

// "EkjEhudmtByPQZDTcPQV5tVT1GJG3dkKhemueXqph79R" is owned by wallet
// "HMTZjYAKui24bcxodpVgUjrVV5s4mNAy5dKtBpoz14ua" is owned by program

async function isAlreadyUnjailed(nftMint) {
  const mintOwners = await connection.getTokenLargestAccounts(nftMint);
  const largestAccountInfo = await connection.getParsedAccountInfo(
    mintOwners.value[0].address
  );

  // @ts-ignore
  console.log("token owner", largestAccountInfo.value?.data?.parsed?.info.owner);
  // @ts-ignore
  const nftOwner = new PublicKey(largestAccountInfo.value?.data?.parsed?.info.owner);
  if (PublicKey.isOnCurve(nftOwner)) {
    return true;
  } else {
    return false;
  }
}

(async () => {
  const isAlreadyOut = await isAlreadyUnjailed(
    new PublicKey("AUuHHtdjqC5VdMaLAz87ApRTNqtgtahJtXcyLaxN5VhA")
  );
  console.log('isAlreadyOut: ', isAlreadyOut);

  const isNotAlreadyOut = await isAlreadyUnjailed(
    new PublicKey("EkjEhudmtByPQZDTcPQV5tVT1GJG3dkKhemueXqph79R")
  );
  console.log('isNotAlreadyOut: ', isNotAlreadyOut);
})();