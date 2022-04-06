const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Storage", function () {

  it("Should return the number after once it changed", async function () {
    // getting the smart contract and deploying it using ethers
    const Storage = await ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();
    await storage.deployed();

    // testing if the number is `0` which is the defualt value for unit
    expect(await storage.getNumber()).to.equal(0);
    // setting the number to 58743
    const setNumberTx = await storage.setNumber(58743);


    // wait until the transaction is mined
    await setNumberTx.wait();
    // testing if the number is changed to 58743
    expect(await storage.getNumber()).to.equal(58743);
  });
});
