import { ethers } from "ethers";
import { ABI } from "./Abi";
async function contractInstance() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = "0xF40A87284C64e008Bff039179d92777CB3Adf734";
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();
  const network = await provider.getNetwork();
  const networkId = network.chainId;
  const contract = new ethers.Contract(contractAddress, ABI, signer);
  localStorage.setItem("nid", networkId);
  return { contract, networkId, signerAddress };
}

export default contractInstance;
