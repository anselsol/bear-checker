export const IDL = {
  "version": "0.1.0",
  "name": "cantangler",
  "instructions": [
    {
      "name": "initState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dev",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "deleteState",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createConfig",
      "accounts": [
        {
          "name": "caller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "configAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "updateAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "swapFee",
          "type": "u64"
        },
        {
          "name": "reswapFee",
          "type": "u64"
        },
        {
          "name": "canBurn",
          "type": "bool"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "sellerFeeBasisPoints",
          "type": "u16"
        },
        {
          "name": "royalties",
          "type": "u8"
        },
        {
          "name": "isMutable",
          "type": "bool"
        },
        {
          "name": "adminSwaps",
          "type": "u64"
        },
        {
          "name": "options",
          "type": {
            "array": [
              "bool",
              2
            ]
          }
        }
      ]
    },
    {
      "name": "createClaim",
      "accounts": [
        {
          "name": "configAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMintA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMintB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccountA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entangledPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECK made in the Reloader Config account call to ensure it is the correct account"
          ]
        },
        {
          "name": "updateAuthority",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECK made in the Reloader Config account call to ensure it is the correct account"
          ]
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "swap",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "configAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entangledPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintA",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintB",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccountA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccountB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccountA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccountB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reversePairB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK made in the ConfigAccount call to ensure it is the correct account"
          ]
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK made in the Reloader Config account call to ensure it is the correct account"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "unjail",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "configAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entangledPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintA",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintB",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccountA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccountB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccountA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccountB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reversePairB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK made in the ConfigAccount call to ensure it is the correct account"
          ]
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK made in the Reloader Config account call to ensure it is the correct account"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateConfig",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "configAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "canBurn",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "creator",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "collection",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "updateTreasuryMint",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "updateFees",
      "accounts": [
        {
          "name": "caller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "configAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "swapFee",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "reswapFee",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "royalties",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "adminSwaps",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "burnNft",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "configAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entangledPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccountA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAccountB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "configAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "programAuthority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "collection",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "treasuryMint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "swapFee",
            "type": "u64"
          },
          {
            "name": "reswapFee",
            "type": "u64"
          },
          {
            "name": "sellerFeeBasisPoints",
            "type": "u16"
          },
          {
            "name": "royalties",
            "type": "u8"
          },
          {
            "name": "isMutable",
            "type": "bool"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "canBurn",
            "type": "bool"
          },
          {
            "name": "maxSupply",
            "type": "u64"
          },
          {
            "name": "swapCount",
            "type": "u64"
          },
          {
            "name": "adminSwaps",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "entangledPair",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintA",
            "type": "publicKey"
          },
          {
            "name": "mintB",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "swapHappened",
            "type": "bool"
          },
          {
            "name": "index",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "reversePair",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "dev",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UninitializedAccount",
      "msg": "Account passed is uninitialized"
    },
    {
      "code": 6001,
      "name": "IncorrectOwner",
      "msg": "Incorrect Owner"
    },
    {
      "code": 6002,
      "name": "InvalidProof",
      "msg": "Incorrect Merkle Proof"
    },
    {
      "code": 6003,
      "name": "InvalidMint",
      "msg": "Invalid mint provided"
    },
    {
      "code": 6004,
      "name": "InvalidCollection",
      "msg": "Invalid collection"
    },
    {
      "code": 6005,
      "name": "PublicKeyMismatch",
      "msg": "Public Keys don't match"
    }
  ]
};
