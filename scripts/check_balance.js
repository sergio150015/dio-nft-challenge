const hre = require("hardhat");

async function main() {
    const address = "0x9bba19013b28475fbB25Fa6ECB7875E8bF9Bb294";
    const balance = await hre.ethers.provider.getBalance(address);
    console.log(`Saldo da carteira ${address}: ${hre.ethers.formatEther(balance)} POL`);

    if (balance === 0n) {
        console.log("AVISO: O saldo ainda é zero. Pode estar demorando para confirmar na rede.");
    } else {
        console.log("SUCESSO: Fundos detectados! Podemos prosseguir.");
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
