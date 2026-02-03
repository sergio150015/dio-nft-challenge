const hre = require("hardhat");

async function main() {
    // Configurações
    const contractAddress = "0xb5401D75Aa23828386116269c02F02e83A261eCF";
    const receiverAddress = "0xA9155F5B6FC993A82346a8ff86EFEf513fc4c096"; // Carteira do Professor
    // Em produção, você faria upload do JSON de metadados para o IPFS/Pinata.
    // Aqui estamos usando um hash ilustrativo para o "GENESIS ARCHITECT".
    const tokenURI = "ipfs://QmZ4tj8yS5R5X7q6Z3k8d9F0g1h2j3k4l5m6n7o8p9q0r";

    const [signer] = await hre.ethers.getSigners();
    const contractFactory = await hre.ethers.getContractFactory("DIOToken");
    const contract = contractFactory.attach(contractAddress);

    console.log(`Mintando NFT para ${receiverAddress}...`);

    const tx = await contract.mintNFT(receiverAddress, tokenURI);
    await tx.wait();

    console.log(`NFT Mintado com sucesso! Hash da transação: ${tx.hash}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
