export function getRpcs() {
  const config = useRuntimeConfig();
  
  return {
    "1": "https://rpc.ankr.com/eth",
    "10": "https://rpc.ankr.com/optimism",
    "14": "https://flare-api.flare.network/ext/C/rpc",
    "16": "https://coston-api.flare.network/ext/C/rpc",
    "19": "https://songbird-api.flare.network/ext/C/rpc",
    "56": "https://rpc.ankr.com/bsc",
    "100": "https://rpc.ankr.com/gnosis",
    "137": "https://rpc.ankr.com/polygon",
    "250": "https://rpc.ankr.com/fantom",
    "420": "https://opt-goerli.g.alchemy.com/v2/" + config.rpcOptGoerlyKey,
    "592": "https://astar.public.blastapi.io",
    "1284": "https://rpc.ankr.com/moonbeam",
    "42161": "https://rpc.ankr.com/arbitrum",
    "43114": "https://rpc.ankr.com/avalanche",
    "80001": "https://matic-mumbai.chainstacklabs.com"
  }
}

export function getRpcs2() {
  // alternative RPCs
  
  return {
    "1": "https://eth-mainnet.public.blastapi.io",
    "10": "https://optimism-mainnet.public.blastapi.io",
    "14": "https://flare-api.flare.network/ext/C/rpc",
    "16": "https://coston-api.flare.network/ext/C/rpc",
    "19": "https://songbird-api.flare.network/ext/C/rpc",
    "56": "https://rpc.ankr.com/bsc",
    "100": "https://rpc.ankr.com/gnosis",
    "137": "https://rpc.ankr.com/polygon",
    "250": "https://rpc.ankr.com/fantom",
    "420": "https://optimism-goerli.public.blastapi.io",
    "592": "https://astar.public.blastapi.io",
    "1284": "https://rpc.ankr.com/moonbeam",
    "42161": "https://rpc.ankr.com/arbitrum",
    "43114": "https://rpc.ankr.com/avalanche",
    "80001": "https://matic-mumbai.chainstacklabs.com"
  }
}