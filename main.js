import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider } from "@coral-xyz/anchor";
import { IDL } from "./cantangler.js";

const REVERSE = Buffer.from("reverse");
const ENTANGLED = Buffer.from("entangled");
const PROGRAM_ID = "hope3SoWBf1vSGwQUe9Cez3EMxJFn2HRVVq2js9ai9E";

const wallet = Keypair.generate();
const connection = new Connection("https://api.mainnet-beta.solana.com");

const findEntangledPairKeySync = (configKey, index, programId) => {
  return PublicKey.findProgramAddressSync(
    [ENTANGLED, configKey.toBuffer(), index.toArrayLike(Buffer, "le", 8)],
    programId
  );
};

const findReversePairKeySync = (configKey, address, programId) => {
  return PublicKey.findProgramAddressSync(
    [REVERSE, configKey.toBuffer(), address.toBuffer()],
    programId
  );
};

const loadProgram = async (connection, anchorWallet) => {
  const provider = new AnchorProvider(connection, anchorWallet, {
    preflightCommitment: "confirmed",
  });
  const idl = IDL;
  if (idl) {
    return new Program(idl, PROGRAM_ID, provider);
  } else {
    throw new Error("Could not load IDL");
  }
};

// "EkjEhudmtByPQZDTcPQV5tVT1GJG3dkKhemueXqph79R" is owned by wallet
// "HMTZjYAKui24bcxodpVgUjrVV5s4mNAy5dKtBpoz14ua" is owned by program

async function isAlreadyUnjailed(nftMint, ownerAddress) {
  const program = await loadProgram(connection, wallet);

  const [reversePairB] = findReversePairKeySync(configKey, new PublicKey(nftMint), PROGRAM_ID);
  const reverseAccount = await program.account.reversePair.fetch(reversePairB);

  const [entangledPair] = findEntangledPairKeySync(configKey, reverseAccount.index, PROGRAM_ID);
  const entangledAccount = await program.account.entangledPair.fetch(entangledPair);

  const mintAOwners = await program?.provider.connection.getTokenLargestAccounts(entangledAccount.mintA);
  const largestAccountInfoA = await program?.provider.connection.getParsedAccountInfo(
    mintAOwners.value[0].address
  );

  // @ts-ignore
  console.log("token A owner", largestAccountInfoA.value?.data?.parsed?.info.owner);
  // @ts-ignore
  if (largestAccountInfoA.value?.data?.parsed?.info.owner !== ownerAddress) {
    return false;
  } else {
    return true;
  }
}

(async () => {
  const isAlreadyOut = await isAlreadyUnjailed("EkjEhudmtByPQZDTcPQV5tVT1GJG3dkKhemueXqph79R");
  console.log('isAlreadyOut: ', isAlreadyOut);

  const isNotAlreadyOut = await isAlreadyUnjailed("HMTZjYAKui24bcxodpVgUjrVV5s4mNAy5dKtBpoz14ua");
  console.log('isNotAlreadyOut: ', isNotAlreadyOut);
})();