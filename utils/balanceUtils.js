import { ethers } from "ethers";
import Erc20Abi from "~/assets/abi/Erc20Abi.json";

export async function getTokenBalance(token, userAddress, signer) {
  let provider = signer;

  if (!provider) {
    provider = this.$getFallbackProvider(this.$config.supportedChainId);
  }

  let balanceWei;

  if (token.address === "0x0") {
    if (!signer) {
      balanceWei = await provider.getBalance(userAddress);
    } else {
      balanceWei = await signer.getBalance();
    }
  } else {
    const contract = new ethers.Contract(token.address, Erc20Abi, provider);
    balanceWei = await contract.balanceOf(userAddress);
  }

  return ethers.utils.formatUnits(balanceWei, token.decimals);
}