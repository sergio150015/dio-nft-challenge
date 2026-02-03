const { expect } = require("chai");
const hre = require("hardhat");

describe("DIOToken Contract", function () {
    let DIOToken;
    let dioToken;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await hre.ethers.getSigners();
        DIOToken = await hre.ethers.getContractFactory("DIOToken");
        dioToken = await DIOToken.deploy();
        await dioToken.waitForDeployment();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await dioToken.owner()).to.equal(owner.address);
        });

        it("Should have correct name and symbol", async function () {
            expect(await dioToken.name()).to.equal("DIOArchitectNFT");
            expect(await dioToken.symbol()).to.equal("DIONFT");
        });
    });

    describe("Minting", function () {
        it("Should allow owner to mint a token", async function () {
            const tokenURI = "ipfs://test-metadata-uri";
            await dioToken.mintNFT(addr1.address, tokenURI);

            expect(await dioToken.ownerOf(0)).to.equal(addr1.address);
            expect(await dioToken.tokenURI(0)).to.equal(tokenURI);
        });

        it("Should fail if non-owner tries to mint", async function () {
            const tokenURI = "ipfs://test-metadata-uri";
            await expect(
                dioToken.connect(addr1).mintNFT(addr2.address, tokenURI)
            ).to.be.revertedWithCustomError(dioToken, "OwnableUnauthorizedAccount");
        });
    });
});
