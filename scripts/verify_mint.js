const hre = require("hardhat");

async function main() {
    const address = "0x9bba19013b28475fbB25Fa6ECB7875E8bF9Bb294";
    const dioTokenAddress = "0xb5401D75Aa23828386116269c02F02e83A261eCF";

    const [signer] = await hre.ethers.getSigners();
    const DIOToken = await hre.ethers.getContractAt("DIOToken", dioTokenAddress);

    const balance = await DIOToken.balanceOf("0xA9155F5B6FC993A82346a8ff86EFEf513fc4c096");
    console.log(`Saldo de NFTs do Professor: ${balance}`);

    if (balance > 0n) {
        const owner = await DIOToken.ownerOf(0);
        console.log(`Proprietário do Token #0: ${owner}`);
    }
}

main().catch(console.error);
