const ethers = require('ethers');
const fs = require('fs');
const path = require('path');

async function main() {
    const wallet = ethers.Wallet.createRandom();
    console.log("NOVO ENDERECO TEMPORARIO (Só para o Faucet):", wallet.address);
    console.log("PRIVATE KEY TEMPORARIA (Eu já salvei para nós):", wallet.privateKey);

    const setupData = `TEMP_WALLET_ADDRESS="${wallet.address}"\nTEMP_WALLET_PRIVATE_KEY="${wallet.privateKey}"\n`;
    fs.appendFileSync(path.join(__dirname, '..', '.env'), setupData);
    
    console.log("\n1. Vá ao faucet e use o endereço acima.");
    console.log("2. Me avise quando o saldo cair.");
}

main().catch(console.error);
