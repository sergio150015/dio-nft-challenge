const hre = require("hardhat");

async function main() {
    const address = "0xa11cD6DC09134CDE8CEe6aFE133a59Bd6EE419E2";
    const balance = await hre.ethers.provider.getBalance(address);
    console.log(`Saldo da carteira principal ${address}: ${hre.ethers.formatEther(balance)} POL`);

    if (balance === 0n) {
        console.log("O saldo ainda é zero. Pode levar alguns segundos para a transação ser confirmada na rede Amoy.");
    } else {
        console.log("Felicitações! Saldo detectado.");
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
