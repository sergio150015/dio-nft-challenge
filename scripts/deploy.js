const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const DIOToken = await hre.ethers.getContractFactory("DIOToken");
    const dioToken = await DIOToken.deploy();

    await dioToken.waitForDeployment();

    console.log("DIOToken deployed to:", await dioToken.getAddress());

    // Instructions to user
    console.log("\nPróximos passos:");
    console.log("1. Copie o endereço do contrato acima.");
    console.log("2. Use o script de mint (mint.js) para criar o NFT e enviar para a carteira do professor.");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
