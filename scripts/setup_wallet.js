const ethers = require('ethers');
const fs = require('fs');
const path = require('path');

async function main() {
    // Check if .env already has a key
    const envPath = path.join(__dirname, '..', '.env');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8');
        if (envContent.includes('PRIVATE_KEY=')) {
            console.log("Carteira já configurada no .env.");
            return;
        }
    }

    // Create random wallet
    const wallet = ethers.Wallet.createRandom();

    console.log("Nova carteira gerada para o projeto:");
    console.log("Endereço:", wallet.address);
    console.log("Private Key:", wallet.privateKey);

    // Save to .env
    const content = `PRIVATE_KEY="${wallet.privateKey}"\nPOLYGONSCAN_API_KEY=""\n`;
    fs.writeFileSync(envPath, content);
    console.log("\nAs credenciais foram salvas automaticamente no arquivo .env");
    console.log("IMPORTANTE: Envie tokens MATIC (Amoy) para o endereço acima para podermos fazer o deploy.");
}

main().catch(console.error);
